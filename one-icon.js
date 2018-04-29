// import {OneClass} from "@alexmtur/one-class"
import {oneIconset} from "./one-iconset.js"
import {html, LitElement} from "@polymer/lit-element/lit-element.js"
// import {svg} from 'lit-html';

export class OneIcon extends LitElement {
    static get properties() {return {
      icon: {type: String, value: "public"},
      size: {type: String, value: "25px"},
      // width: {type: String, value: "25px"},
      // height: {type: String, value: "auto"}
    }}

    constructor() {
      super();
      this.icon = 'public';
    }
    render() {
      console.log(oneIconset[this.icon]);
      return html`
        <svg viewBox="0 0 100 100" width$="${this.size}">
          ${oneIconset[this.icon]}
        </svg>
      `;
    }
}
customElements.define('one-icon', OneIcon);


   