import {oneIconset} from "./one-iconset.js"
import {html, OneClass} from "@alexmtur/one-class"

export class OneIcon extends OneClass {
    static get properties() {return {
        icon: {type: String, value: "close"},
        size: {type: String, value: "25px"},
        padding: {type: String, value: "0"},
        viewBox: {type: String, value: "0 0 100 100"},
        // width: {type: String, value: "25px"},
        // height: {type: String, value: "auto"}
    }}
    constructor() {
        super();
        this.icon = 'close';
        this.viewBox = '0 0 100 100';
        this.padding = '0';
        this.size = '25px';
    }
    //Gradient definitions have to be put inside the one-style element
    _render() {return html`
    <!-- <svg class="one-icon" style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#43CBFF;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#9708CC;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg> -->
        <svg viewBox="0 0 100 100" width$="${this.size}" style="padding: ${this.padding}">
          ${oneIconset[this.icon]}
        </svg>`;
    }
}
customElements.define('one-icon', OneIcon); 