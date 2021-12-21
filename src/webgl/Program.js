class Program {
    
    constructor (gl, vertex, fragment) {
        const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertex);
        const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragment);

        this.program = gl.createProgram();

        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        const success = gl.getProgramParameter(this.program, gl.LINK_STATUS);
        if (!success) {
            gl.deleteProgram(this.program);
            throw(new Error(gl.getProgramInfoLog(this.program)));
        }
    }
    
    createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        
        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        
        if (!success) {
            gl.deleteShader(shader);
            throw(new Error(gl.getShaderInfoLog(shader)))
        }
        
        return shader;
    }

}

export default Program;