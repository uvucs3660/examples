import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter REST Client',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController _pathController = TextEditingController();
  final TextEditingController _dataController = TextEditingController();
  String _response = '';

  Future<void> _getData(String path) async {
    final response =
        await http.get(Uri.parse('http://localhost:8080/data/$path'));
    if (response.statusCode == 200) {
      setState(() {
        _response = response.body;
      });
    } else {
      setState(() {
        _response = 'Error: ${response.reasonPhrase}';
      });
    }
  }

  Future<void> _postData(String path, String data) async {
    final response = await http.post(
      Uri.parse('http://localhost:8080/data'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'path': path, 'data': jsonDecode(data)}),
    );

    if (response.statusCode == 201) {
      setState(() {
        _response = 'Record created';
      });
    } else {
      setState(() {
        _response = 'Error: ${response.reasonPhrase}';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter REST Client'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _pathController,
              decoration: InputDecoration(labelText: 'Path'),
            ),
            TextField(
              controller: _dataController,
              decoration: InputDecoration(labelText: 'Data (JSON)'),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () => _getData(_pathController.text),
                  child: Text('GET Data'),
                ),
                ElevatedButton(
                  onPressed: () =>
                      _postData(_pathController.text, _dataController.text),
                  child: Text('POST Data'),
                ),
              ],
            ),
            SizedBox(height: 20),
            Text(
              _response,
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
