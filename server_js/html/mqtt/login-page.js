// login.js
import { html, css, LitElement } from 'lit';

var client = {};

class LoginPage extends LitElement {
  static styles = css`...`;

  render() {
    return html`
      <form @submit="${this._onSubmit}">
        <label>
          Username:
          <input id="username" name="username" type="text">
        </label><br/>
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
    const clientId = Math.random().toString(16).substr(2, 8);
    
    client  = mqtt.connect('ws://localhost', {
      username,
      password,
    });


    client.on('connect', function () {
      console.log('client connected:' + clientId)
      client.subscribe('topic', { qos: 0 })
      client.publish('topic', 'wss secure connection demo...!', { qos: 0, retain: false })
      document.getElementById('login').style.display = 'none';
      document.getElementById('data').style.display = 'block';
    });
    
    client.on('message', (topic, message, packet) => {
      console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
    })
    
    client.on('close', () => {
      console.log(clientId + ' disconnected')
    })

  }
}

customElements.define('login-page', LoginPage);