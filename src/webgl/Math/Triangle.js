import Vector3 from './Vector3';

class Triangle extends Array {

    get a () { return new Vector3(this[0], this[1], this[2]) }
    get b () { return new Vector3(this[3], this[4], this[5]) }
    get c () { return new Vector3(this[6], this[7], this[8]) }

}

export default Triangle;