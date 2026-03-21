export class Game {
    constructor(board, player1, player2) {
        this.is_winner = false;
        this.board = board;
        this.player1 = player1;
        this.player2 = player2;
    }

    check_winner(current_player, count) {
        if (this.board.b[0][0] != null && this.board.b[0][0] == this.board.b[0][1] && this.board.b[0][0] == this.board.b[0][2]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (this.board.b[1][0] != null && this.board.b[1][0] == this.board.b[1][1] && this.board.b[1][0] == this.board.b[1][2]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (this.board.b[2][0] != null && this.board.b[2][0] == this.board.b[2][1] && this.board.b[2][0] == this.board.b[2][2]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (this.board.b[0][0] != null && this.board.b[0][0] == this.board.b[1][0] && this.board.b[0][0] == this.board.b[2][0]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (this.board.b[0][1] != null && this.board.b[0][1] == this.board.b[1][1] && this.board.b[0][1] == this.board.b[2][1]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (this.board.b[0][2] != null && this.board.b[0][2] == this.board.b[1][2] && this.board.b[0][2] == this.board.b[2][2]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (this.board.b[0][0] != null && this.board.b[0][0] == this.board.b[1][1] && this.board.b[0][0] == this.board.b[2][2]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;
            this.is_winner = true;
        } else if (this.board.b[0][2] != null && this.board.b[0][2] == this.board.b[1][1] && this.board.b[0][2] == this.board.b[2][0]) {
            current_player.score += 1;
            document.getElementById("X_score").innerHTML = this.player1.score;
            document.getElementById("O_score").innerHTML = this.player2.score;
            alert(current_player.name + " is the winner");
            count = 0;

            this.is_winner = true;
        } else if (count == 9) {
            count = 0;
            alert("draw");
            this.is_winner = true;
        }
    }
}