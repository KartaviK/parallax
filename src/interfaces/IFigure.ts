import Point from "../components/Point";

export default interface IFigure {
    IsInside(point: Point): boolean;

    IsUnder(point: Point): boolean;

    IsUpper(point: Point): boolean;

    IsOnRight(point: Point): boolean;

    IsOnLeft(point: Point): boolean;
}
