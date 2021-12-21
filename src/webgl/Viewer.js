import Scene from './Scene';

/**
 * 
 */
const DEFAULT_CONFIGURATIONS = {
    clearColor: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
}

/**
 * 
 */
class Viewer {

    constructor (canvas, configurations = {}) {
        this.gl = canvas.getContext("webgl");

        if (this.gl === null) {
            throw(new Error('WebGL couldn\'t get initialized'));
        }

        this.configurations = {
            ...DEFAULT_CONFIGURATIONS,
            ...configurations
        };

        this.configure();
        this.initialize();
    }

    /**
     * 
     */
    configure () {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

        this.gl.clearColor(
            this.configurations.clearColor.r,
            this.configurations.clearColor.g,
            this.configurations.clearColor.b,
            this.configurations.clearColor.a
        );

        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    /**
     * 
     */
    initialize () {
        this.scene = new Scene(this.gl);
        this.render();
    }

    render () {
        this.gl.clearColor(
            this.configurations.clearColor.r,
            this.configurations.clearColor.g,
            this.configurations.clearColor.b,
            this.configurations.clearColor.a
        );

        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.scene.render(this.gl);

        requestAnimationFrame(() => {
            this.render();
        });
    }

}

export default Viewer;