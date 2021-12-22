import { BASIC_MATERIAL } from '../Materials/BasicMaterial';

export const GEOMETRY_TYPE = {
    TRIANGLES: 0x0004,
    LINES: 0x0001
}

const DEFAULT_OPTIONS = {
    color: [1, 1, 1, 1],
    geometryType: GEOMETRY_TYPE.TRIANGLES
}

class Geometry {

    constructor (positions, options = {}) {
        this.position = new Float32Array(positions);
        this.material = BASIC_MATERIAL;

        options = { 
            ...DEFAULT_OPTIONS, ...options
        };

        this.color = options.color;
        this.geometryType = options.geometryType;
    }

    dispose () {
        // TODO Dispose
    }

}

export default Geometry;