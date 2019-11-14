import spin from "../../functions/spin.js";
export const Spin = (point, params) => {
    let { spin: spinData, nextX, nextY, figure } = params;
    spinData().enable && spin(nextX(), nextY(), point, figure(), spinData().clockwise);
};
//# sourceMappingURL=Spin.js.map