import * as glMatrix from 'gl-matrix';

class Camera {

    constructor () {
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 100;
        const fov = 60;

        this.transformation = glMatrix.mat4.create();
        this.projection = glMatrix.mat4.perspective(
            glMatrix.mat4.create(), fov, aspect, near, far
        );

        this.translate(glMatrix.vec3.fromValues(0, 0, -3))
    }

    translate (xyz) {
        glMatrix.mat4.translate(
            this.transformation,
            this.transformation,
            xyz
        );
    }

}

export default Camera;