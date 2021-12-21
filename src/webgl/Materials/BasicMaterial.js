import Program from '../Program';

// Shaders
import basic from './Shaders/basic';

class BasicMaterial {

    constructor (gl) {
        this.basicProgram = new Program(gl, basic.VERTEX, basic.FRAGMENT);

        this.uniforms = {
            projection: gl.getUniformLocation(this.basicProgram.program, "u_projection"),
            transformation: gl.getUniformLocation(this.basicProgram.program, "u_transformation"),
            color: gl.getUniformLocation(this.basicProgram.program, "u_color"),
        }

        this.locations = {
            position: gl.getAttribLocation(this.basicProgram.program, "a_position"),
        }

        this.buffers = {
            position: gl.createBuffer(),
        }

        this.bufferType = {
            position: gl.ARRAY_BUFFER
        }

        this.bufferDataType = {
            position: gl.FLOAT
        }

        this.bufferDataSize = {
            position: 3
        }
    }

    render (gl, geometry, camera) {
        gl.useProgram(this.basicProgram.program);

        gl.uniformMatrix4fv(this.uniforms.projection, false, camera.projection);
        gl.uniformMatrix4fv(this.uniforms.transformation, false, camera.transformation);
        gl.uniform4fv(this.uniforms.color, geometry.color);

        for (const attribute in this.locations) {
            const location = this.locations[attribute];
            const buffer = this.buffers[attribute];
            const bufferType = this.bufferType[attribute];
            const bufferDataType = this.bufferDataType[attribute];
            const bufferDataSize = this.bufferDataSize[attribute];

            gl.bindBuffer(bufferType, buffer );
            gl.bufferData(bufferType, geometry[attribute], gl.STATIC_DRAW);
            gl.enableVertexAttribArray(location);
            gl.vertexAttribPointer( location, bufferDataSize, bufferDataType, false, 0, 0 );
        }

        gl.drawArrays(gl.TRIANGLES, 0, geometry.position.length);
    }

    dispose () {
        // TODO Dispose
    }

}

export default BasicMaterial;
export const BASIC_MATERIAL = 0;