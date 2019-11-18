import Point from "../components/Point";

export default interface Figure {
    IsInside(point: Point): boolean;

    IsOnLeft(point: Point): boolean;

    IsOnRight(point: Point): boolean;

    IsUnder(point: Point): boolean;

    IsUpper(point: Point): boolean;
}
