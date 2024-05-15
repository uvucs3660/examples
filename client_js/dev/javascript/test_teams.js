const projects = {
    "Project1": {
        "Team1": [
            "A1",
            "B1",
            "C1",
            "D1",
            "E1"
        ],
        "Team2": [
            "A2",
            "B2",
            "C2",
            "D2",
            "E2"
        ],
        "Team3": [
            "A3",
            "B3",
            "C3",
            "D3",
            "E3"
        ],
        "Team4": [
            "A4",
            "B4",
            "C4",
            "D4",
            "E4"
        ],
        "Team5": [
            "A5",
            "B5",
            "C5",
            "D5",
            "E5"
        ]
    },
    "Project2": {
        "Team1": [
            "A1",
            "B2",
            "C3",
            "D4",
            "E5"
        ],
        "Team2": [
            "A2",
            "B3",
            "C4",
            "D5",
            "E1"
        ],
        "Team3": [
            "A3",
            "B4",
            "C5",
            "D1",
            "E2"
        ],
        "Team4": [
            "A4",
            "B5",
            "C1",
            "D2",
            "E3"
        ],
        "Team5": [
            "A5",
            "B1",
            "C2",
            "D3",
            "E4"
        ]
    },
    "Project3": {
        "Team1": [
            "A1",
            "B3",
            "C5",
            "D2",
            "E4"
        ],
        "Team2": [
            "A2",
            "B4",
            "C1",
            "D3",
            "E5"
        ],
        "Team3": [
            "A3",
            "B5",
            "C2",
            "D4",
            "E1"
        ],
        "Team4": [
            "A4",
            "B1",
            "C3",
            "D5",
            "E2"
        ],
        "Team5": [
            "A5",
            "B2",
            "C4",
            "D1",
            "E3"
        ]
    },
    "Project4": {
        "Team1": [
            "A1",
            "B4",
            "C2",
            "D5",
            "E3"
        ],
        "Team2": [
            "A2",
            "B5",
            "C3",
            "D1",
            "E4"
        ],
        "Team3": [
            "A3",
            "B1",
            "C4",
            "D2",
            "E5"
        ],
        "Team4": [
            "A4",
            "B2",
            "C5",
            "D3",
            "E1"
        ],
        "Team5": [
            "A5",
            "B3",
            "C1",
            "D4",
            "E2"
        ]
    },
    "Project5": {
        "Team1": [
            "A1",
            "B5",
            "C4",
            "D3",
            "E2"
        ],
        "Team2": [
            "A2",
            "B1",
            "C5",
            "D4",
            "E3"
        ],
        "Team3": [
            "A3",
            "B2",
            "C1",
            "D5",
            "E4"
        ],
        "Team4": [
            "A4",
            "B3",
            "C2",
            "D1",
            "E5"
        ],
        "Team5": [
            "A5",
            "B4",
            "C3",
            "D2",
            "E1"
        ]
    }
};
    
  function countPairings(projects) {
    const pairings = {};
  
    // Helper function to add pairings
    function addPairing(person1, person2) {
      if (!pairings[person1]) {
        pairings[person1] = {};
      }
      if (!pairings[person1][person2]) {
        pairings[person1][person2] = 0;
      }
      pairings[person1][person2]++;
    }
  
    // Loop through each project and team
    for (const project in projects) {
      for (const team in projects[project]) {
        const members = projects[project][team];
        // Generate pairings for each team
        for (let i = 0; i < members.length; i++) {
          for (let j = i + 1; j < members.length; j++) {
            addPairing(members[i], members[j]);
            addPairing(members[j], members[i]);
          }
        }
      }
    }
  
    return pairings;
  }
  
  // Print results
  const result = countPairings(projects);
  console.log(result);
  

  