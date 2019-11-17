import * as Component from '../';

export interface ISpinParams extends Component.IListenerParams {
    spin: () => {enable: boolean, clockwise: boolean};
    nextX: () => number;
    nextY: () => number;
    figure: () => Component.Figure;
}

export const Spin: Component.IListener = (point: Component.Point, params: ISpinParams): void => {
    let {spin, nextX, nextY, figure} = params;

    let x = nextX();
    let y = nextY();
    let target = figure();
    let spinData = spin();

    if (!spinData.enable) {
        return;
    }

    if (target.isOnRight(point) && target.isUnder(point)) {
        point.yAxis += spinData.clockwise ? y : -y;
    }
    if (target.isOnRight(point) && target.isUpper(point)) {
        point.xAxis -= spinData.clockwise ? x : -x;
    }
    if (target.isOnLeft(point) && target.isUpper(point)) {
        point.yAxis -= spinData.clockwise ? y : -y;
    }
    if (target.isOnLeft(point) && target.isUnder(point)) {
        point.xAxis += spinData.clockwise ? x : -x;
    }
};
