import chaos from "../../functions/chaos.js";
export const Chaos = (point, params) => {
    let { nextX, nextY, figure } = params;
    chaos(nextX(), nextY(), point, figure());
};
//# sourceMappingURL=Chaos.js.map