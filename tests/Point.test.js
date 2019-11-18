import Point from '../src/components/Point';

describe('Point entity', () => {
    let point;

    it('Create new', () => {
        const x = 100;
        const y = 200;
        const color = 'red';
        const radius = 10;

        point = new Point(x, y, color, radius);

        expect(point.xAxis).toBe(x);
        expect(point.yAxis).toBe(y);
        expect(point.color).toBe(color);
        expect(point.radius).toBe(radius);
    });

    it('Reset values', () => {
        const nextX = 50;
        const nextY = 75;
        const nextColor = 'blue';
        const radius = 15;

        point.xAxis = nextX;
        point.yAxis = nextY;
        point.color = nextColor;
        point.radius = radius;

        expect(point.xAxis).toBe(nextX);
        expect(point.yAxis).toBe(nextY);
        expect(point.color).toBe(nextColor);
        expect(point.radius).toBe(radius);
    })
});
