const POINTS = [
    -1.0,-1.0,-1.0, 
    -1.0,-1.0, 1.0,
    -1.0, 1.0, 1.0, 
    1.0, 1.0,-1.0, 
    -1.0,-1.0,-1.0,
    -1.0, 1.0,-1.0, 
    1.0,-1.0, 1.0,
    -1.0,-1.0,-1.0,
    1.0,-1.0,-1.0,
    1.0, 1.0,-1.0,
    1.0,-1.0,-1.0,
    -1.0,-1.0,-1.0,
    -1.0,-1.0,-1.0,
    -1.0, 1.0, 1.0,
    -1.0, 1.0,-1.0,
    1.0,-1.0, 1.0,
    -1.0,-1.0, 1.0,
    -1.0,-1.0,-1.0,
    -1.0, 1.0, 1.0,
    -1.0,-1.0, 1.0,
    1.0,-1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0,-1.0,-1.0,
    1.0, 1.0,-1.0,
    1.0,-1.0,-1.0,
    1.0, 1.0, 1.0,
    1.0,-1.0, 1.0,
    1.0, 1.0, 1.0,
    1.0, 1.0,-1.0,
    -1.0, 1.0,-1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0,-1.0,
    -1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,
    1.0,-1.0, 1.0
];

class Box {

    constructor (width, height, depth) {
        this.points = [];

        for (let i = 0; i < POINTS.length; i += 3) {
            this.points.push(
                POINTS[i] * width / 2,
                POINTS[i + 1] * height / 2,
                POINTS[i + 2] * height / 3,
            )
        }
    }

}