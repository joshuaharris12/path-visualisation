export function constructGrid(width, height) {
    let grid = [];
    for (let r = 0; r < height; r++) {
        let row = [];
        for (let c = 0; c < width; c++) {
            row.push({ x: c, y: r, isStart: false, isTarget: false, isWall: false });
        }
        grid.push(row);
    }
    grid[Math.floor(height/2)][Math.floor(width/2)].isStart = true
    grid[height-2][width-2].isTarget = true

    return grid;
}