import { BASIC_MATERIAL } from '../Materials/BasicMaterial';

const DEFAULT_OPTIONS = {
    color: [1, 1, 1, 1]
}

class Geometry {

    constructor (positions, options = {}) {
        this.position = new Float32Array(positions);
        this.material = BASIC_MATERIAL;

        options = { 
            ...DEFAULT_OPTIONS, ...options
        };

        this.color = options.color;
    }

    dispose () {
        // TODO Dispose
    }

}

export default Geometry;