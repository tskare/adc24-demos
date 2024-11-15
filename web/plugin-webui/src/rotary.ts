import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';


const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('rotary-control')
export class Rotary extends LitElement {
    @property({ type: String }) label = 'Gain';
    
    @property({type: String, attribute:false, reflect: false}) public colorBackground: string = '#ccf';
    @property({type: String, attribute:false, reflect: false}) public colorForeground: string = '#4caf50';
    @property({type: String, attribute:false, reflect: false}) public colorTrack: string = '#ccc';

    @property({type: Number}) public width: number =  200;
    @property({type: Number}) public height: number = 200;

    @property({ type: Number }) min: number = 0;
    @property({ type: Number }) max: number = 100;
    @property({ type: Number }) value: number = 50;

    @query('#canvaselem') canvas!: HTMLCanvasElement;
    @query('#container') containerElem!: HTMLDivElement;
    @query('#labeldiv') labelContainerElem!: HTMLDivElement;

    
    private isDragging: boolean = false;

  static styles = css`
    :host {
    display: block;
        align-items: center;
        justify-content: center;
        font: 2em Open Sans, sans-serif;
    }

    #container {
        width:100%;
        height:100%;
        align-items: center;
        justify-content: center;
        background-color: ${unsafeCSS('#ccc')};
    }
    #canvaselem {
    width:100%;
        aspect-ratio:2;
    }
    #labeldiv {
        width: 100%;
        text-align: center;    
    }
    #canvasdiv {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    #container {

     
    }


  `;

  constructor() {
    super();
  }
  firstupdated() {
        this.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    }

    connectedCallback() {
        super.connectedCallback();
        this.renderCanvas();
        window.addEventListener('resize', this.renderCanvas.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.renderCanvas.bind(this));
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>) {
        // TODO: make more efficient
        // if (changedProperties.has('value')) {
            this.containerElem.style.setProperty('background-color', this.colorBackground);
            this.labelContainerElem.style.setProperty('background-color', this.colorBackground);
            this.renderCanvas();

        //}
    }

private onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.updateValue(event);
}

private onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
        this.updateValue(event);
    }
}

private onMouseUp() {
    this.isDragging = false;
}

private onMouseLeave() {
    this.isDragging = false;
}

private updateValue(event: MouseEvent) {
    const canvas = this.canvas;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const angle = Math.atan2(mouseY - centerY, mouseX - centerX) + Math.PI / 2;
    const value = ((angle + Math.PI) / (2 * Math.PI)) * (this.max - this.min) + this.min;
    this.value = Math.min(this.max, Math.max(this.min, value));
}

private renderCanvas() {
    // The following is a simple example of a canvas2d element.
    // It's not likely what you'd use in production
    
    if (!this.canvas) return;
    const context = this.canvas.getContext('2d')!;
    if (!context) {
        return;
    }

    const canvas = this.canvas;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 10;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear the canvas
    context.fillStyle = this.colorBackground;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw background
    const PI2 = Math.PI/2;
    const gap2 = (2*Math.PI)/10;

    // Draw line pointing to that value
    context.beginPath();
    context.strokeStyle = this.colorForeground;
    context.lineWidth = 10;
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + Math.cos(PI2 + (this.value - this.min) / (this.max - this.min) * 2 * Math.PI) * radius, centerY + Math.sin(PI2 + (this.value - this.min) / (this.max - this.min) * 2 * Math.PI) * radius);
    context.stroke();

    // Arc
    context.beginPath();
    context.fillStyle = this.colorTrack;
    context.lineWidth = 15;
    context.lineCap = "round";
    context.arc(centerX, centerY, radius, gap2+PI2, 2 * Math.PI +PI2 - gap2);
    context.stroke();

    // Text
    context.font = "25px Sans-serif";
    context.textAlign = "center";
    context.fillText(`${this.value}`, canvas.width / 2, canvas.height - 30);
}

  render() {
   const containerStyles = {
        width: this.width + 'px',
        height: this.height + 'px',
   };
   const labelStyles = {
        color: this.colorTrack,
   };

    return html`
        <div id="container" style=${styleMap(containerStyles)}>
            <div id="canvasdiv"><canvas id="canvaselem"></canvas></div>
            <div id="labeldiv" style=${styleMap(labelStyles)}>${this.label}</div>
        </div>
        
    `;
  }
}
