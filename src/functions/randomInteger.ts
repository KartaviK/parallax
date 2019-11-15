export default function randomInteger(min: number, max: number, int: boolean = true): number {
    return int
        ? Math.floor(min + Math.random() * (max + 1 - min))
        : min + Math.random() * (max - min);
};