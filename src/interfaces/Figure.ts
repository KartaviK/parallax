import Point from "../components/Point";

export interface Figure {
    isInside(point: Point): boolean;

    isUnder(point: Point): boolean;
    isUpper(point: Point): boolean;
    isOnRight(point: Point): boolean;
    isOnLeft(point: Point): boolean;
}
