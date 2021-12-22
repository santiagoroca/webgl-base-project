import * as glMatrix from 'gl-matrix';

class Camera {

    constructor () {
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        const fov = 20;

        this.worldViewProjection = glMatrix.mat4.create();
        this.transformation = glMatrix.mat4.create();
        this.projection = glMatrix.mat4.perspective(
            glMatrix.mat4.create(), fov, aspect, near, far
        );

        this.position = glMatrix.vec3.create();
        this.xAngle = 0;
        this.yAngle = 0;

        this.update();
    }

    translate (xyz) {
        glMatrix.vec3.add(this.position, this.position, xyz);
        this.update();
    }

    translateAcrossLocalX (distance) {
        // TODO X Axis Movement
    }

    translateAcrossLocalY (distance) {
        // TODO Y Axis Movement
    }

    translateAcrossLocalZ (distance) {
        // TODO Z Axis Movement
    }

    rotateAroundX (angle) {
        this.xAngle += angle;
        this.update()
    }

    rotateAroundY (angle) {
        this.yAngle += angle;
        this.update()
    }

    update () {
        this.transformation = glMatrix.mat4.create();
        this.worldViewProjection = glMatrix.mat4.create();

        glMatrix.mat4.translate(
            this.transformation,
            this.transformation,
            [ 0, 0, -1 ]
        );

        glMatrix.mat4.rotateY(
            this.transformation,
            this.transformation,
            this.yAngle,
        );

        glMatrix.mat4.rotate(
            this.transformation,
            this.transformation,
            this.xAngle,
            glMatrix.mat4.fromValues(
                this.transformation[0],
                this.transformation[4],
                this.transformation[8],
            )
        );

        glMatrix.mat4.multiply(
            this.worldViewProjection, 
            this.projection,
            this.transformation,
        );

        console.log(this.transformation);
    }

}

export default Camera;