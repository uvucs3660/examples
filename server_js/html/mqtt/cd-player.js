import { html, css, LitElement } from 'lit';
import { createMachine, createActor, assign } from 'xstate';

// Define the state machine
const cdPlayerMachine = createMachine({
  id: 'cdPlayer',
  initial: 'poweredOff',
  context: {
    currentTrack: 1,
    totalTracks: 10
  },
  states: {
    poweredOff: {
      on: {
        POWER_ON: 'idle'
      }
    },
    idle: {
      on: {
        LOAD: 'loading',
        POWER_OFF: 'poweredOff'
      }
    },
    loading: {
      on: {
        PLAY: 'playing',
        POWER_OFF: 'poweredOff'
      }
    },
    playing: {
      on: {
        PAUSE: 'paused',
        STOP: 'idle',
        POWER_OFF: 'poweredOff',
        NEXT_TRACK: {
          actions: assign({
            currentTrack: (context) => context.currentTrack === context.totalTracks ? 1 : context.currentTrack + 1
          })
        },
        PREV_TRACK: {
          actions: assign({
            currentTrack: (context) => context.currentTrack === 1 ? context.totalTracks : context.currentTrack - 1
          })
        }
      }
    },
    paused: {
      on: {
        PLAY: 'playing',
        STOP: 'idle',
        POWER_OFF: 'poweredOff',
        NEXT_TRACK: {
          actions: assign({
            currentTrack: (context) => context.currentTrack === context.totalTracks ? 1 : context.currentTrack + 1
          })
        },
        PREV_TRACK: {
          actions: assign({
            currentTrack: (context) => context.currentTrack === 1 ? context.totalTracks : context.currentTrack - 1
          })
        }
      }
    }
  }
});



class CdPlayer extends LitElement {
  static styles = css`
    /* Add your CSS here */
  `;

  constructor() {
    super();
    this.actor = createActor(cdPlayerMachine);
    this.state = this.actor.state;
    this.actor.subscribe((state) => {
      this.state = state;
      this.requestUpdate();
      console.log('state', state.value);
      console.log('context', state.context);
    });
    this.actor.start();

  }

  render() {
    return html`
      <div>
        <p>CD Player is now: ${this.state.value}</p>
        <p>Current Track: ${this.state.context.context}</p>
        <button @click=${() => this.actor.send({ type: 'POWER_ON'})}>Power On</button>
        <button @click=${() => this.actor.send({ type: 'LOAD'})}>Load</button>
        <button @click=${() => this.actor.send({ type: 'PLAY'})}>Play</button>
        <button @click=${() => this.actor.send({ type: 'PAUSE'})}>Pause</button>
        <button @click=${() => this.actor.send({ type: 'STOP'})}>Stop</button>
        <button @click=${() => this.actor.send({ type: 'NEXT_TRACK'})}>Next Track</button>
        <button @click=${() => this.actor.send({ type: 'PREV_TRACK'})}>Previous Track</button>
        <button @click=${() => this.actor.send({ type: 'POWER_OFF'})}>Power Off</button>
      </div>
    `;
  }
}

customElements.define('cd-player', CdPlayer);