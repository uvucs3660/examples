import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { sharedStyles } from './shared_styles.js';


class AddPresentation extends LitElement {
  static get styles() {
    return [sharedStyles,css`
      :host {
        display: block;
      }
    `];
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }

  constructor() {
    super();
    this.message = '';
  }

  render() {
    return html`
      <div class="container">
        <h1>Add Presentation URL</h1>
        <form @submit="${this.handleSubmit}">
          <label for="team">Team:</label>
          <select id="team" name="team">
            <option value="1">Team 1</option>
            <option value="2">Team 2</option>
            <option value="3">Team 3</option>
            <option value="4">Team 4</option>
            <option value="5">Team 5</option>
          </select>
          <label for="url">Presentation URL:</label>
          <input type="url" id="url" name="url" required>
          <button type="submit">Submit</button>
        </form>
        <div id="message">${this.message}</div>
      </div>
    `;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const team = formData.get('team');
    const url = formData.get('url');

    try {
      const response = await fetch('/data/project2/presentation');
      const data = await response.json();

      const presentationIndex = data.presentations.findIndex(p => p.team == team);
      if (presentationIndex !== -1) {
        data.presentations[presentationIndex].url = url;
      }

      await fetch('/data/project2/presentation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      this.message = 'URL updated successfully!';
    } catch (error) {
      console.error('Error updating URL:', error);
      this.message = 'Failed to update URL.';
    }
  }
}

customElements.define('add-presentation', AddPresentation);
