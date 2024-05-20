import 'package:json_annotation/json_annotation.dart';
import 'package:dia/dia.dart'; // for Resource
import 'package:dia_cors/dia_cors.dart';
import 'package:dia_router/dia_router.dart'; // for Response
import 'package:postgres/postgres.dart'; // for PgPool

// Replace 'connection_string' with your actual Postgres connection string
final String connectionString = 'connection_string';

// Define the data model for the document_store table
@JsonSerializable()
class Document {
  final String path;
  final String data;

  Document(this.path, this.data);

  factory Document.fromJson(Map<String, dynamic> json) =>
      _$DocumentFromJson(json);

  Map<String, dynamic> toJson() => _$DocumentToJson(this);

  // Add the following line to generate the toJson and fromJson methods
  // Run `flutter packages pub run build_runner build` after adding this line
  static const JsonSerializableGenerator generator =
      _$DocumentJsonSerializableGenerator;
}

// Create a Postgres client
final PgPool pg = PgPool(connectionString);

// Define the DIA service
class DataService extends Resource {
  DataService(this.pg);

  final PgPool pg;

  // Get a document by path
  @Get('/data/:path')
  Future<Response> getData(String path) async {
    final query = 'SELECT * FROM document_store WHERE path = @path';
    final result = await pg.query(query, substitution: {'path': path});

    if (result.isEmpty) {
      return Response.notFound(message: 'Document not found');
    }

    final document = Document.fromJson(result.single);
    return Response.ok(json: document.toJson());
  }

  // Store a new document
  @Post('/data')
  Future<Response> postData(String path, String data) async {
    final query =
        'INSERT INTO document_store (path, data) VALUES (@path, @data)';
    await pg.execute(query, substitution: {'path': path, 'data': data});
    return Response.created(json: {'message': 'Document stored successfully'});
  }
}

void main() async {
  // Create a DIA application
  final app = Application([
    CorsMiddleware(), // Enable CORS for all requests
    Router()..use('/data', DataService(pg)),
  ]);

  // Start the server
  await app.start(port: 8080);
  print('Server listening on port 8080');
}
