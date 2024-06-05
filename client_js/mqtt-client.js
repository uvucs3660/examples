import { LitElement, html, css } from 'lit';


var client = {};

class MqttClient extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                padding: 16px;
                font-family: Arial, sans-serif;
            }
            label {
                display: block;
                margin-top: 8px;
            }
            input {
                margin-top: 4px;
                padding: 4px;
                width: 100%;
                box-sizing: border-box;
            }
        `;
    }

    static get properties() {
        return {
            topic: { type: String },
            message: { type: String }
        };
    }

    constructor() {
        super();
        this.topic = '';
        this.message = '';
        this.client = null;
    }

    firstUpdated() {
        this.connectToBroker();
    }

    connectToBroker() {
        const options = {
            clientId: 'web_client_' + Math.random().toString(16).substr(2, 8),
            clean: true,
            connectTimeout: 4000,
            reconnectPeriod: 1000,
            username:'coral',
            password:'all4Coarl'
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
            console.error('Connection error:', err);
        });

        this.client.on('close', () => {
            console.log('Connection closed');
        });
    }

    render() {
        return html`
            <div>
                <h2>MQTT Client</h2>
                <label for="topic">Topic:</label>
                <input id="topic" type="text" @input=${this.updateTopic} />
                <p>Subscribed to: ${this.topic}</p>
                <p>Received message: ${this.message}</p>
            </div>
        `;
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
}

customElements.define('mqtt-client', MqttClient);
