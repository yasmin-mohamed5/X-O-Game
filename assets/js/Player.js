export class Player {
    constructor(ch, name, board) {
        this.board = board;
        this.name = name;
        this.ch = ch;
        this.score = 0;
    }
    getName() {
        return this.name;
    }
    reset_replay() {
        this.name = null;
        this.score = 0;
    }
}

