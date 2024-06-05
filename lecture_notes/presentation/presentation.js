import {LitElement, html,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class PresentationViewer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        height: 100vh;
        background-color: #2b2b2b;
        color: #e0e0e0;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      iframe {
        width: 90%;
        height: 80%;
        border: none;
      }
      #timer {
        margin-top: 10px;
        font-size: 1.5em;
      }
    `;
  }

  static get properties() {
    return {
      presentations: { type: Array },
      currentPresentationIndex: { type: Number },
      timeLeft: { type: Number },
      intervalId: { type: Number }
    };
  }

  constructor() {
    super();
    this.presentations = [];
    this.currentPresentationIndex = 0;
    this.timeLeft = 0;
    this.intervalId = null;
  }

  render() {
    return html`
      <div class="container">
        <iframe id="presentationFrame" src="${this.presentations.length > 0 ? this.presentations[this.currentPresentationIndex].url : ''}"></iframe>
        <div id="timer">${this.formatTime(this.timeLeft)}</div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadPresentations();
  }

  async loadPresentations() {
    try {
      const response = await fetch('/data/project2/presentation');
      const data = await response.json();
      this.presentations = data.presentations;
      this.startPresentation();
    } catch (error) {
      console.error('Error loading presentations:', error);
    }
  }

  startPresentation() {
    if (this.presentations.length > 0) {
      this.timeLeft = 15 * 60;
      this.updateTimer();
      this.intervalId = setInterval(() => this.updateTimer(), 1000);
    }
  }

  updateTimer() {
    if (this.timeLeft > 0) {
      this.timeLeft--;
      this.requestUpdate();
    } else {
      clearInterval(this.intervalId);
      this.timeLeft = 3 * 60; // Voting time
      this.intervalId = setInterval(() => this.updateVotingTimer(), 1000);
    }
  }

  updateVotingTimer() {
    if (this.timeLeft > 0) {
      this.timeLeft--;
      this.requestUpdate();
    } else {
      clearInterval(this.intervalId);
      this.currentPresentationIndex++;
      if (this.currentPresentationIndex < this.presentations.length) {
        this.startPresentation();
      }
    }
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

customElements.define('presentation-viewer', PresentationViewer);
