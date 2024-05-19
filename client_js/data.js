// data.js
import { html, css, LitElement } from 'lit';

class DataPage extends LitElement {
  static styles = css`...`;

  render() {
    return html`
      <form @submit="${this._onSubmit}">
        <label>
          Path:
          <input id="path" name="path" type="text">
        </label>
        <label>
          Data:
          <textarea id="data" name="data"></textarea>
        </label>
        <button type="submit">Publish</button>
      </form>
    `;
  }

  _onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const path = formData.get('path');
    const data = formData.get('data');

    const topic = data ? `save/${path}` : `load/${path}`;
    mqtt.client.publish(topic, data);
  }
}

customElements.define('data-page', DataPage);
