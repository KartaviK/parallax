import Point from "../components/Point.js";

export default interface IFigure {
    isInside(point: Point): boolean;

    isUnder(point: Point): boolean;
    isUpper(point: Point): boolean;
    isOnRight(point: Point): boolean;
    isOnLeft(point: Point): boolean;
}
