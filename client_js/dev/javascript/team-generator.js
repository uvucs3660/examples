import {html, css, LitElement} from 'lit';

class TeamGenerator extends LitElement {
            static styles = css`
                h1, h2 {
                    text-align: center;
                }
                #team-results, #report-results {
                    margin-top: 20px;
                }
                .team-set {
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 5px;
                }
                .team, .student-report {
                    margin-bottom: 10px;
                }
                button {
                    display: block;
                    margin: 0 auto;
                }
            `;

            constructor() {
                super();
                this.students = Array.from({ length: 25 }, (_, i) => `Student ${i + 1}`);
                this.teams = [];
                this.repeatedPairs = new Map();
            }

            generateTeams(students, teamSize, sets) {
                if (students.length % teamSize !== 0) {
                    console.error('The number of students should be divisible by the team size.');
                    return { sets: [], pairs: new Map() };
                }

                let allSets = [];
                let allPairs = new Map();

                function hasPair(s1, s2) {
                    let pairKey = s1 < s2 ? `${s1}-${s2}` : `${s2}-${s1}`;
                    return allPairs.has(pairKey);
                }

                function addPair(s1, s2) {
                    let pairKey = s1 < s2 ? `${s1}-${s2}` : `${s2}-${s1}`;
                    allPairs.set(pairKey, (allPairs.get(pairKey) || 0) + 1);
                }

                for (let i = 0; i < sets; i++) {
                    let currentSet = [];
                    let studentsCopy = [...students];

                    while (studentsCopy.length >= teamSize) {
                        let team = [];

                        for (let j = 0; j < teamSize; j++) {
                            let selectedIndex = studentsCopy.findIndex(student => {
                                return team.every(member => !hasPair(student, member));
                            });

                            if (selectedIndex === -1) {
                                selectedIndex = 0;
                            }

                            let selectedStudent = studentsCopy[selectedIndex];
                            team.push(selectedStudent);
                            studentsCopy.splice(selectedIndex, 1);

                            team.forEach(member => {
                                if (member !== selectedStudent) {
                                    addPair(member, selectedStudent);
                                }
                            });
                        }

                        currentSet.push(team);
                    }

                    allSets.push(currentSet);
                }

                return { sets: allSets, pairs: allPairs };
            }

            generateAndDisplayTeams() {
                const { sets, pairs } = this.generateTeams(this.students, 5, 3);
                this.teams = sets;
                this.repeatedPairs = pairs;
                this.requestUpdate();
            }

            renderTeams() {
                return this.teams.map((set, index) => html`
                    <div class="team-set">
                        <h3>Team Set ${index + 1}</h3>
                        ${set.map((team, teamIndex) => html`
                            <div class="team">Team ${teamIndex + 1}: ${team.join(', ')}</div>
                        `)}
                    </div>
                `);
            }

            renderReport() {
                return this.students.map(student => {
                    const reportForStudent = this.students
                        .filter(partner => student !== partner)
                        .map(partner => {
                            const pairKey = student < partner ? `${student}-${partner}` : `${partner}-${student}`;
                            const count = this.repeatedPairs.get(pairKey) || 0;
                            if (count > 1) return `${partner} (${count} times)`;
                            return '';
                        })
                        .filter(report => report !== '');

                    return reportForStudent.length > 0 ? html`
                        <div class="student-report">${student}: ${reportForStudent.join(', ')}</div>
                    ` : '';
                });
            }

            render() {
                return html`
                    <h1>Team Generator with Report (Lit)</h1>
                    <button @click=${this.generateAndDisplayTeams}>Generate Teams</button>
                    <div id="team-results">
                        ${this.renderTeams()}
                    </div>
                    <h2>Repeated Teammates Report</h2>
                    <div id="report-results">
                        ${this.renderReport()}
                    </div>
                `;
            }
        }

        customElements.define('team-generator', TeamGenerator);