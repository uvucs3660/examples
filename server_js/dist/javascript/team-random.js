"use strict";

var _lit = require("lit");
class TeamRandom extends _lit.LitElement {
  static styles = (0, _lit.css)`
    textarea {
      width: 100%;
      height: 200px;
    }
    button {
      margin-top: 10px;
      padding: 8px 16px;
    }
  `;
  static properties = {
    names: {
      type: String
    }
  };
  constructor() {
    super();
    this.names = '';
  }
  shuffleNames() {
    // Split names by line break, remove empty lines, shuffle them, and join them back.
    let namesArray = this.names.trim().split('\n').filter(Boolean);
    for (let i = namesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [namesArray[i], namesArray[j]] = [namesArray[j], namesArray[i]];
    }
    this.names = namesArray.join('\n');
  }
  updateNames(event) {
    this.names = event.target.value;
  }
  render() {
    return (0, _lit.html)`
      <textarea @input="${this.updateNames}" .value=${this.names}></textarea>
      <button @click="${this.shuffleNames}">Shuffle List</button>
    `;
  }
}
customElements.define('team-random', TeamRandom);