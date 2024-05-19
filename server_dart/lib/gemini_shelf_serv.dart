import 'package:shelf/shelf.dart';
import 'package:shelf_cors_headers/shelf_cors_headers.dart';
import 'package:shelf_router/shelf_router.dart';
import 'package:postgres/postgres.dart';

// Replace 'connection_string' with your actual Postgres connection string
final String connectionString = 'connection_string';

// Define the data model for the document_store table
class Document {
  final int id;
  final String path;
  final String data;

  Document(this.id, this.path, this.data);

  factory Document.fromJson(Map<String, dynamic> json) {
    return Document(
        json['id'] as int, json['path'] as String, json['data'] as String);
  }

  Map<String, dynamic> toJson() => {'id': id, 'path': path, 'data': data};
}

// Create a Postgres client
final PostgreSQLExecutor executor =
    PostgreSQLExecutor.connect(connectionString);

// Define the handler function for getting a document by path
Future<Response> getDocument(Request request, String path) async {
  final query = 'SELECT * FROM document_store WHERE path = @path';
  final result = await executor.query(query, substitution: {'path': path});

  if (result.isEmpty) {
    return Response.notFound(reasonPhrase: 'Document not found');
  }

  final document = Document.fromJson(result.single);
  return Response.ok(
      headers: {'content-type': 'application/json'}, body: document.toJson());
}

// Define the handler function for storing a new document
Future<Response> postDocument(Request request) async {
  final payload = await request.readAsString();
  final data = jsonDecode(payload);
  final path = data['path'] as String;
  final documentData = data['data'] as String;

  final query = 'INSERT INTO document_store (path, data) VALUES (@path, @data)';
  await executor
      .execute(query, substitution: {'path': path, 'data': documentData});

  return Response.created('/data/$path',
      headers: {'content-type': 'application/json'},
      body: {'message': 'Document stored successfully'});
}

void main() async {
  // Create a Shelf router
  final router = Router();

  // Define routes
  router.get('/data/<path>', (request, path) => getDocument(request, path));
  router.post('/data', postDocument);

  // Configure CORS middleware with shelf_cors_headers
  final handler = CORS(router, corsHeaders: [
    // Allow all origins (adjust based on your security needs)
    CorsHeader.allowOrigin(all),
    // Allow common methods (adjust based on your API)
    CorsHeader.allowMethod(HttpMethod.get),
    CorsHeader.allowMethod(HttpMethod.post),
    // Allow common headers (adjust based on your API)
    CorsHeader.allowHeader(header: 'content-type'),
  ]);

  // Start the server
  final server = await serve(handler, port: 8080);
  print('Server listening on port ${server.port}');
}
