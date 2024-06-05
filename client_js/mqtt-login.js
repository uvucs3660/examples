import { LitElement, html, css } from 'lit';

var mqttClient = {};

class MqttLogin extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-family: Arial, sans-serif;
    }
    input {
      padding: 8px;
      margin: 8px 0;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
    }
  `;

  static properties = {
    username: { type: String },
    password: { type: String },
    client: { type: Object }
  };

  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.topic = 'your/topic/here';
    this.message = '{"message": "no message"}';
    this.client = null;    

  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  connectToBroker() {
    const options = {
      username: this.username,
      password: this.password,
      connectTimeout: 4000, // 4 seconds
      reconnectPeriod: 1000, // 1 second
    };

    this.client = mqtt.connect('ws://localhost:9001/mqtt', options);

    this.client.on('connect', () => {
      console.log('Connected to broker');
      this.client.subscribe(this.topic, (err) => {
          if (err) {
              console.error('Subscription error:', err);
          }
      });
    });    

    this.client.on('message', (topic, message) => {
        this.message = message.toString();
        console.log(`Received message: ${this.message} from topic: ${topic}`);
    });

    this.client.on('error', (err) => {
      console.error('Connection error: ', err);
    });

    this.client.on('close', () => {
      console.log('Connection closed');
    });
  }

  updateTopic(event) {
    this.topic = event.target.value;
    if (this.client) {
      this.client.subscribe(this.topic, (err) => {
        if (err) {
            console.error('Subscription error:', err);
        }
      });
    }
  }

  render() {
    return html`
      <div>
        <h2>MQTT Client</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          .value=${this.username}
          @input=${this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          .value=${this.password}
          @input=${this.handleInputChange}
        />
        <button @click=${this.connectToBroker}>Connect</button>
      </div>
      <div>
          <h2>MQTT Client</h2>
          <label for="topic">Topic:</label>
          <input id="topic" type="text" @input=${this.updateTopic} />
          <p>Subscribed to: ${this.topic}</p>
          <p>Received message: ${this.message}</p>
      </div>
    `;
  }
}

customElements.define('mqtt-login', MqttLogin);
