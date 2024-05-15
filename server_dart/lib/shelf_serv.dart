import 'dart:convert';
import 'package:postgres/postgres.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_cors_headers/shelf_cors_headers.dart';
import 'package:shelf_router/shelf_router.dart';

// Replace these with your actual database credentials
const String dbHost = 'your_db_host';
const String dbPort = '5432';
const String dbName = 'your_db_name';
const String dbUser = 'your_db_user';
const String dbPassword = 'your_db_password';

Future<Response> _getDataHandler(Request request, String path) async {
  final connection = await Connection.open(
    Endpoint(
      host: 'localhost',
      database: 'cs3660',
      username: 'root',
      password: 'root',
    ),
    // The postgres server hosted locally doesn't have SSL by default. If you're
    // accessing a postgres server over the Internet, the server should support
    // SSL and you should swap out the mode with `SslMode.verifyFull`.
    settings: ConnectionSettings(sslMode: SslMode.disable),
  );

  final results = await connection.execute(
      'SELECT * FROM document_store WHERE path = @path',
      parameters: {'path': path});
  await connection.close();

  if (results.isEmpty) {
    return Response.notFound('Document not found.');
  }

  final jsonData = results.first.toList();
  return Response.ok(jsonEncode(jsonData),
      headers: {'Content-Type': 'application/json'});
}

Future<Response> _postDataHandler(Request request) async {
  final String query = await request.readAsString();
  Map params = jsonDecode(query);

  final path = params['path'] as String?;
  final data = params['data'];

  if (path == null || data == null) {
    return Response.badRequest(
        body: jsonEncode({'error': 'Missing path or data'}),
        headers: {'Content-Type': 'application/json'});
  }

  final connection = await Connection.open(
    Endpoint(
      host: 'localhost',
      database: 'cs3660',
      username: 'root',
      password: 'root',
    ),
    // The postgres server hosted locally doesn't have SSL by default. If you're
    // accessing a postgres server over the Internet, the server should support
    // SSL and you should swap out the mode with `SslMode.verifyFull`.
    settings: ConnectionSettings(sslMode: SslMode.disable),
  );
  await connection.execute(
      'INSERT INTO document_store (path, data) VALUES (@path, @data)',
      parameters: {'path': path, 'data': jsonEncode(data)});
  await connection.close();

  return Response.ok(jsonEncode({'message': 'Document stored successfully'}),
      headers: {'Content-Type': 'application/json'});
}

void main(List<String> args) async {
  final router = Router();
  router.get('/data/<path>', _getDataHandler);
  router.post('/data', _postDataHandler);

  final handler = const Pipeline()
      .addMiddleware(corsHeaders(headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': '*',
      }))
      .addHandler(router.call);

  final server = await shelf_io.serve(handler, 'localhost', 8080);
  print('Server listening on port ${server.port}');
}
