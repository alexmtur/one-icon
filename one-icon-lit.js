import {OneClass} from "@alexmtur/one-class"
import {oneIconset} from "@alexmtur/one-iconset"

export class OneIcon extends OneClass {
    static get properties() {return {
      icon: {type: String, value: "public"},
      size: {type: String, value: "25px"},
      // width: {type: String, value: "25px"},
      // height: {type: String, value: "auto"}
    }}

    constructor() {
    super();
    this.icon = 'public';
    console.log(document.getElementById('one-iconset-div'));
    }

    static get template() {return `
        <svg viewBox="0 0 100 100" width$="[[size]]">
            <use xlink:href="#camera"></use>
        </svg>
    `;} 
}
customElements.define('one-icon', OneIcon);