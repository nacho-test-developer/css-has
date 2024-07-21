import { css, html, LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';

export class UiCard extends LitElement {
  static styles = [
    css`
      :host {
        button {
          background-color: red;
        }
      }
    `
  ]
  name = 'World';

  render() {
    return html `
      <div class="yo-card">
        <button aria-label="a">${this.name}</button>
      </div>
    `
  }
}

customElements.define("ui-card", UiCard);