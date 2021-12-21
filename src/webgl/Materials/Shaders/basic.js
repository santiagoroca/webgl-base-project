const VERTEX = `

    uniform mat4 u_projection;
    uniform mat4 u_transformation;
    uniform vec4 u_color;

    attribute vec4 a_position;

    varying vec4 v_color;

    void main() {

        // Pass all uniforms
        v_color = u_color;

        gl_Position = u_projection * u_transformation * a_position;
    }

`;

const FRAGMENT = `

    precision mediump float;

    varying vec4 v_color;

    void main() {
        gl_FragColor = v_color;
    }    

`;

export default {
    VERTEX, FRAGMENT
};