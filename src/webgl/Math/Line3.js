import intersect from 'ray-triangle-intersection';
import * as glMatrix from 'gl-matrix';

class Line3 {

    constructor (start, end) {
        this.start = start;
        this.end = end;
    }

    at (t) {
        return glMatrix.vec3.add(
            glMatrix.vec3.create(),
            this.origin, 
            glMatrix.vec3.scale(
                glMatrix.vec3.create(),
                this.direction,
                t
            )
        )
    }

    intersectsTriangle (triangle) {
        return intersect([], this.origin, this.direction, [ triangle.a, triangle.b, triangle.c ]);
    }

    /**
     * This is not robust. This assumes the canvas always occupies
     * the 100% of the screen. Careful there :)
     */
    static fromMouseEventAndCamera (mouseEvent, camera) {
        const x = mouseEvent.clientX;
        const y = mouseEvent.clientY;
        const clipX = x / window.innerWidth  *  2 - 1;
        const clipY = y / window.innerHeight * -2 + 1;

        const inverse = glMatrix.mat4.invert(
            glMatrix.mat4.create(),
            glMatrix.mat4.multiply(
                glMatrix.mat4.create(),
                camera.projection,
                camera.transformation
            )
        );

        const start = glMatrix.vec3.transformMat4(glMatrix.vec3.create(), [
            clipX, clipY, -1
        ], inverse);

        const end = glMatrix.vec3.transformMat4(glMatrix.vec3.create(), [
            clipX, clipY, +1
        ], inverse);

        return new Line3(start, end);
    }

    get origin () {
        return this.start;
    }

    get direction () {
        return glMatrix.vec3.normalize(
            glMatrix.vec3.create(),
            glMatrix.vec3.subtract(
                glMatrix.vec3.create(), this.end, this.start
            ),
        );
    }

}

export default Line3;