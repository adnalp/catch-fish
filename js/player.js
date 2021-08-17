class Player {
    constructor(img, score, info) {
        this.img = img;
        this.score = score;
        this.info = info;
        this.player_score = 0;
    }

    take_fish(taken_fish, player) {
        swing_audio.play();

        this.img.src = "img/long_cat.svg";
        this.img.style.zIndex = 2;

        this.player_score += taken_fish.point;
        this.score.innerHTML = this.player_score;
        this.info.innerHTML = taken_fish.text;
        setTimeout(function () {
            player.img.src = "img/cat.svg";
            player.img.style.zIndex = 0;
        }, 150);
    }
    win() {
        this.info.innerHTML = win_text;
    }
}

let redPlayer = new Player(red_player, red_player_score, red_player_info);
let bluePlayer = new Player(blue_player, blue_player_score, blue_player_info);

var players = [redPlayer, bluePlayer];
var player_amount = players.length;
