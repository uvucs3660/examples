<!DOCTYPE html>
<html>
<head>
    <script src="mqtt.js"></script>
    <script src="login.js"></script>
    <script src="data.js"></script>
</head>
<body>
    <div id="login"></div>
    <div id="data" style="display: none;"></div>
</body>
</html>

// login.js
import { html, css, LitElement } from 'lit';
import mqtt from 'mqtt';

class LoginPage extends LitElement {
  static styles = css`...`;

  render() {
    return html`
      <form @submit="${this._onSubmit}">
        <label>
          Username:
          <input id="username" name="username" type="text">
        </label>
        <label>
          Password:
          <input id="password" name="password" type="password">
        </label>
        <button type="submit">Login</button>
      </form>
    `;
  }

  _onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');

    const client  = mqtt.connect('mqtt://test.mosquitto.org', {
      username,
      password,
    });

    client.on('connect', function () {
      document.getElementById('login').style.display = 'none';
      document.getElementById('data').style.display = 'block';
    });
  }
}

customElements.define('login-page', LoginPage);

// data.js
import { html, css, LitElement } from 'lit';
import mqtt from 'mqtt';

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
    const data = new FormData(event.target);
    const path = data.get('path');
    const data = data.get('data');

    const topic = data ? `save/${path}` : `load/${path}`;
    client.publish(topic, data);
  }
}

customElements.define('data-page', DataPage);
