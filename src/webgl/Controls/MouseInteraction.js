import Triangle from '../Math/Triangle';
import Line3 from '../Math/Line3';
import VertexArrayGeometry, { GEOMETRY_TYPE } from '../Geometry/VertexArray'

class MouseInteractions {

    constructor (viewer) {
        let isLeftClickDown = false;
        let lastMouseX = 0;
        let lastMouseY = 0;

        viewer.gl.canvas.addEventListener('mousedown', event => {
            if (event.stopPropagation) {
                event.stopPropagation();
            }

            isLeftClickDown = event.button === 0;
            lastMouseX = event.clientX;
            lastMouseY = event.clientY;
        })

        viewer.gl.canvas.addEventListener('mouseup', () => {
            isLeftClickDown = false;
        })

        viewer.gl.canvas.addEventListener('mousemove', event => {
            if (isLeftClickDown) {
                viewer.scene.camera.rotateAroundY(-(lastMouseX - event.clientX) * 0.001)
                viewer.scene.camera.rotateAroundX(-(lastMouseY - event.clientY) * 0.001)
            }

            lastMouseX = event.clientX;
            lastMouseY = event.clientY;
        })

        viewer.gl.canvas.addEventListener('dblclick', event => {
            const ray = Line3.fromMouseEventAndCamera(
                event, viewer.scene.camera
            );

            // Just because we know for sure they are all triangles
            for (const geometry of viewer.scene.geometries) {
                if (geometry.geometryType == GEOMETRY_TYPE.TRIANGLES) {
                    const triangle = new Triangle(...geometry.position);

                    if (ray.intersectsTriangle(triangle)) {
                        console.log("Yeah :)");
                    }
                }
            }
        });
    }

    dispatchEvent () {

    }

    addEventListener () {

    }

}

export default MouseInteractions;