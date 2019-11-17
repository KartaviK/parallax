import * as Component from '../';

export interface IChaosParams extends Component.IListenerParams {
    nextX: () => number;
    nextY: () => number;
    figure: () => Component.Figure;
}

export const Chaos: Component.IListener = (point: Component.Point, params: IChaosParams): void => {
    let {nextX, nextY, figure: entity} = params;

    let x = nextX();
    let y = nextY();
    let figure = entity();

    if (figure.isInside(point)) {
        point.yAxis += figure.isUpper(point) ? y : -y;
        point.xAxis += figure.isOnLeft(point) ? -x : x;
    } else {
        point.yAxis += figure.isUnder(point) ? y : -y;
        point.xAxis += figure.isOnRight(point) ? -x : x;
    }
    point.gravitationTime = 1;
};
