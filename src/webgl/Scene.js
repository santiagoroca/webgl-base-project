import VertexArrayGeometry from './Geometry/VertexArray'
import buildMaterials from './Materials';
import Camera from './Camera';
import * as glMatrix from 'gl-matrix/gl-matrix';

const X = 0, Y = 1, Z = 2;

class Scene {
    
    constructor (gl) {
        this.geometries = new Map(); // Map<Material, Array<Geometry>>
        this.materials = buildMaterials(gl);
        this.camera = new Camera();

        for (let i = 0; i < 1000; i++) {
            const color = [ Math.random(), Math.random(), Math.random(), 1 ];

            const xyz = glMatrix.vec3.fromValues(
                Math.random() * 80 - 40,
                Math.random() * 40 - 20,
                Math.random() * -30,
            );

            this.addGeometry(new VertexArrayGeometry([
                xyz[X], xyz[Y], xyz[Z],
                xyz[X] + 1, xyz[Y], xyz[Z],
                xyz[X] + 0.5, xyz[Y] + 1, xyz[Z]
            ], { color }))
        }
    }

    addGeometry (geometry) {
        if (!this.geometries.has(geometry.material)) {
            this.geometries.set(geometry.material, []);
        }

        this.geometries
            .get(geometry.material)
            .push(geometry);
    }

    render (gl) {
        for (const [ material, geometries ] of this.geometries.entries()) {

            for (const geometry of geometries) {
                this.materials[material].render(gl, geometry, this.camera);
            }
        }
    }

    dispose () {
        // TODO Dispose
    }

}

export default Scene;