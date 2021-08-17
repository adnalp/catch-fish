class Fish {
    constructor(img, point, text) {
        this.img = img;
        this.point = point;
        this.text = text;
    }
}

let plate = new Fish("plate.svg", 0, wait_text);
let normal_fish = new Fish("normal_fish.svg", 1, good_text);
let purple_fish = new Fish("purple_fish.svg", 2, good_text);
let smelly_fish = new Fish("smelly_fish.svg", -1, bad_text);
let trash_fish = new Fish("trash_fish.svg", -2, bad_text);

var fishes = [normal_fish, purple_fish, smelly_fish, trash_fish];
var fish_amount = fishes.length;

function play_again() {
    add_controls();
    empty_data();
    change_display();
    start_fish_loop();
}

function end_game() {
    remove_controls();
    empty_data_again();
    change_display();
    end_fish_loop();
    player.win();
    win_audio.play();
}

var fish_interval;
function change_fish() {
    fish_interval = setInterval(fish_loop, 3000);
}

var random_fish;

function start_fish_loop() {
    place_plate();
    change_fish();
}

function fish_loop() {
    place_plate();
    setTimeout(function () {
        random_fish = fishes[Math.floor(Math.random() * fish_amount)];
        fish.src = "img/" + random_fish.img;
    }, 2200);
}

function place_plate() {
    random_fish = plate;
    fish.src = "img/" + random_fish.img;
}

function end_fish_loop() {
    clearInterval(fish_interval);
}

/*
Player list olustur
Oyun bitince:
for i in player_list
if i == this
playerlist[i].text = win_text
else
playerlist[i].text = lose_text
*/
