import VertexArrayGeometry from './Geometry/VertexArray'
import buildMaterials from './Materials';
import Camera from './Camera';
import * as glMatrix from 'gl-matrix/gl-matrix';

const X = 0, Y = 1, Z = 2;

class Scene {
    
    constructor (gl) {
        this.geometriesByMaterial = new Map(); // Map<Material, Array<Geometry>>
        this.materials = buildMaterials(gl);
        this.camera = new Camera();

        for (let i = 0; i < 100; i++) {
            const color = [ Math.random(), Math.random(), Math.random(), 1 ];

            const xyz = glMatrix.vec3.fromValues(
                Math.random() * 80 - 40,
                Math.random() * 40 - 20,
                Math.random() * -60 + 30,
            );

            this.addGeometry(new VertexArrayGeometry([
                xyz[X], xyz[Y], xyz[Z],
                xyz[X] + 1, xyz[Y], xyz[Z],
                xyz[X] + 0.5, xyz[Y] + 1, xyz[Z]
            ], { color }))
        }
    }

    addGeometry (geometry) {
        if (!this.geometriesByMaterial.has(geometry.material)) {
            this.geometriesByMaterial.set(geometry.material, []);
        }

        this.geometriesByMaterial
            .get(geometry.material)
            .push(geometry);
    }

    render (gl) {
        for (const [ material, geometries ] of this.geometriesByMaterial.entries()) {

            for (const geometry of geometries) {
                this.materials[material].render(gl, geometry, this.camera);
            }
        }
    }

    dispose () {
        // TODO Dispose
    }

    get geometries () {
        return [ ...this.geometriesByMaterial.entries() ].reduce(
            (geometries, [ _, materialGeometries ]) => [ ...geometries, ...materialGeometries ], []
        );
    }

}

export default Scene;