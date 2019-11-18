import Point from '../src/components/Point';

describe('Point entity', () => {
    let point: Point;

    it('Create new', () => {
        const x = 100;
        const y = 200;
        const color = 'red';
        const radius = 10;

        point = new Point(x, y, color, radius);

        expect(point.XAxis).toBe(x);
        expect(point.YAxis).toBe(y);
        expect(point.Color).toBe(color);
        expect(point.Radius).toBe(radius);
    });

    it('Reset values', () => {
        const nextX = 50;
        const nextY = 75;
        const nextColor = 'blue';
        const radius = 15;

        point.XAxis = nextX;
        point.YAxis = nextY;
        point.Color = nextColor;
        point.Radius = radius;

        expect(point.XAxis).toBe(nextX);
        expect(point.YAxis).toBe(nextY);
        expect(point.Color).toBe(nextColor);
        expect(point.Radius).toBe(radius);
    })
});
