// https://chatgpt.com/share/8df8c135-0d02-4257-814d-2948fbdc76d4


import { LitElement, html, css } from 'lit';
import mqtt from 'mqtt';
import { createMachine, interpret } from 'xstate';

class MqttVideoPlayer extends LitElement {
  static properties = {
    mqttBrokerUrl: { type: String },
    topic: { type: String }
  };

  constructor() {
    super();
    this.mqttBrokerUrl = 'ws://broker.hivemq.com:8000/mqtt'; // Default MQTT broker
    this.topic = 'video/control'; // Default topic
    this.client = null;
    this.service = null;
  }

  firstUpdated() {
    this.initMqtt();
    this.initStateMachine();
  }

  initMqtt() {
    this.client = mqtt.connect(this.mqttBrokerUrl);

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
      this.client.subscribe(this.topic, (err) => {
        if (!err) {
          console.log(`Subscribed to topic: ${this.topic}`);
        }
      });
    });

    this.client.on('message', (topic, message) => {
      const msg = message.toString();
      let command = msg;
      let payload = null;

      if (msg.startsWith('SEEK')) {
        const parts = msg.split(' ');
        command = parts[0];
        payload = parseFloat(parts[1]);
      }

      console.log(`Received command: ${command}`);
      this.service.send({ type: command, position: payload });
    });
  }

  initStateMachine() {
    const videoMachine = createMachine({
      id: 'video',
      initial: 'idle',
      states: {
        idle: {
          on: { PLAY: 'playing', SEEK: { actions: 'seekVideo' } }
        },
        playing: {
          onEntry: 'playVideo',
          on: { PAUSE: 'paused', END: 'ended', SEEK: { actions: 'seekVideo' } }
        },
        paused: {
          onEntry: 'pauseVideo',
          on: { PLAY: 'playing', STOP: 'stopped', SEEK: { actions: 'seekVideo' } }
        },
        stopped: {
          onEntry: 'stopVideo',
          on: { PLAY: 'playing', SEEK: { actions: 'seekVideo' } }
        },
        ended: {
          onEntry: 'endVideo',
          on: { REPLAY: 'playing', SEEK: { actions: 'seekVideo' } }
        }
      }
    }, {
      actions: {
        playVideo: () => this.shadowRoot.querySelector('video').play(),
        pauseVideo: () => this.shadowRoot.querySelector('video').pause(),
        stopVideo: () => {
          const video = this.shadowRoot.querySelector('video');
          video.pause();
          video.currentTime = 0;
        },
        endVideo: () => console.log('Video ended'),
        seekVideo: (context, event) => {
          const video = this.shadowRoot.querySelector('video');
          if (event.position !== null) {
            video.currentTime = event.position;
          }
        }
      }
    });

    this.service = interpret(videoMachine).start();
  }

  render() {
    return html`
      <video controls @ended=${() => this.service.send('END')}>
        <source src="your-video-source.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }

  static styles = css`
    video {
      width: 100%;
      height: auto;
    }
  `;
}

customElements.define('mqtt-video-player', MqttVideoPlayer);
