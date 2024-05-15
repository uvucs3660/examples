import 'dart:math';

void main() {
  int numProjects = 5;
  int numTeams = 5;
  int teamSize = 5;

  List<String> members = List<String>.generate(
      numTeams * teamSize,
      (i) =>
          String.fromCharCode(65 + i ~/ teamSize) +
          (1 + i % teamSize).toString());
  List<List<List<String>>> projects = List.generate(numProjects,
      (_) => List.generate(numTeams, (_) => List.filled(teamSize, '')));

  for (int round = 0; round < numProjects; round++) {
    for (int team = 0; team < numTeams; team++) {
      for (int member = 0; member < teamSize; member++) {
        int idx = (team + round * member) % numTeams + (teamSize * member);
        projects[round][team][member] = members[idx];
      }
    }
  }

  // Output the teams for each project in JSON-like format
  print("{");
  for (int i = 0; i < projects.length; i++) {
    print('  "Project${i + 1}": {');
    for (int j = 0; j < projects[i].length; j++) {
      print('    "Team${j + 1}": ["${projects[i][j].join('", "')}"]');
      if (j < projects[i].length - 1) print(',');
    }
    print('  }${i < projects.length - 1 ? ',' : ''}');
  }
  print("}");
}
