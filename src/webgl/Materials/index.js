import BasicMaterial, { BASIC_MATERIAL } from "./BasicMaterial"

export default gl => ({
    [BASIC_MATERIAL]: new BasicMaterial(gl)
});