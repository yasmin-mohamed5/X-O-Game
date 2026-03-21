export class Board {
    constructor() {
        this.b = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
    input(i, j, chr) {
        this.b[i][j] = chr;
        this.output(i, j);
    }
    output(i, j) {
        console.log(this.b[i][j]);
    }
    replay_func() {
        this.b = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
}