console.log("Hello Webpack Project.");

class MdC extends HTMLElement {
    constructor() {
        super();

        var content = this.innerText;
        var shadow = this.attachShadow({mode: 'open'});

        var svgImage = this.createSvg(content);
        shadow.appendChild(svgImage);
    }
    createSvg(text) {
        console.log("The content was: " + text)

        var xmlns = 'http://www.w3.org/2000/svg';
        var svgImage = document.createElementNS(xmlns, "svg");
        svgImage.setAttribute('width', 120);
        svgImage.setAttribute('height', 120);
        var path = document.createElementNS(xmlns, "path");
        path.setAttribute('d', 'M111,110c0,-27.89 -22.61,-50.5 -50.5,-50.5c-27.89,0 -50.5,22.61 -50.5,50.5l50.5,0l50.5,0Z')
        path.setAttribute('style', 'fill:none;stroke:#000;stroke-width:5px;');
        svgImage.appendChild(path);

        return svgImage;
    }
}

customElements.define('web-mdc', MdC);