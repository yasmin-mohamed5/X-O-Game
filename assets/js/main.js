console.log("test");


import { Player } from "./Player.js"
import { Board } from "./Board.js"
import { Game } from "./Game.js"
var turn = 0;
var board = new Board();

var player1;
var player2;
var game;
var current_player;

function play() {
    // هنا يتم تبديل اللاعب بناءً على قيمة "turn" العالمية
    if (turn % 2 === 0) {
        current_player = player1;
    } else {
        current_player = player2;
    }
    turn++;
}


document.getElementById("start_game_button").addEventListener("click", () => {
    alert("test the click code");
    let name1 = document.getElementById("input_X_name").value;
    let name2 = document.getElementById("input_O_name").value;

    player1 = new Player("X", name1, board);
    player2 = new Player("O", name2, board);
    turn = 0;

    console.log(player1, player2, game);
    game = new Game(board, player1, player2);
    if (player1) {
        current_player = player1;
        // document.getElementById("player_turn").innerHTML=current_player.getName();
    }
});



// الحصول على جميع أزرار اللعبة (الخانات)
const positionButtons = document.querySelectorAll(".get_position");

// ربط كل زر بـ "مستمع حدث" (event listener)
positionButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        play();
        // document.getElementById("player_turn").innerHTML=current_player.getName();
        // الآن قم بتنفيذ منطق الحركة باستخدام اللاعب الحالي
        const row = parseInt(event.target.getAttribute("data-row"));
        const col = parseInt(event.target.getAttribute("data-col"));
        game.board.input(row, col, current_player.ch);
        event.target.value = current_player.ch;

        button.value = current_player.ch;   // يحط X
        button.disabled = true;   // يمنع الضغط عليه مرة تانية
        // إذا كانت اللعبة منتهية أو الخانة مأخوذة، تجاهل النقرة
        game.check_winner(current_player, turn);
        if (game.is_winner || event.target.value !== "") {
            return;
        }


    });
});

let reset_buton = document.getElementById("reset_button");
reset_buton.addEventListener("click", (Event) => {
    document.getElementById("input_X_name").value = "";
    document.getElementById("input_O_name").value = "";
    document.getElementById("X_score").innerHTML = 0;
    document.getElementById("O_score").innerHTML = 0;
    positionButtons.forEach(button => {
        button.value = "";
        button.disabled = false;
    });
    turn = 0;
    game.is_winner = false;
    player1.reset_replay();
    player2.reset_replay();
    board.replay_func();
    positionButtons.forEach(button => {
        button.value = "";
    });
    let name_x = document.getElementById("input_X_name").value;
    let name_O = document.getElementById("input_O_name").value;
    player1 = new Player("X", name_x, board);
    player2 = new Player("O", name_O, board);
    // document.getElementById("player_turn").innerHTML="" ;
});

let replay_butn = document.getElementById("replay_button");
replay_butn.addEventListener("click", () => {
    turn = 0;
    game.is_winner = false;
    board.replay_func();
    positionButtons.forEach(button => {
        button.value = "";
        button.disabled = false;
        // document.getElementById("player_turn").innerHTML=current_player.getName();
    });
});


