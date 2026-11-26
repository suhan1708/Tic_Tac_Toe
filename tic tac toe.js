let player = "O";
let GameActive = true;

function playClick(cellId) {

    if (GameActive === false) {
        return;
    }

    let cell = document.getElementById(cellId);

    if (cell.innerHTML !== "") {
        alert("Cell already occupied!");
        return;
    }

    cell.innerHTML = player;

    if (checkwinner()) {

        document.getElementById("result").innerHTML =
            "Player " + player + " is the winner!";

        GameActive = false;

        document.querySelectorAll(".cell").forEach(cell => {
            cell.style.pointerEvents = "none";
        });

        confetti({
            particleCount: 150,
            spread: 100
        });

        return;
    }

    player = (player === "O") ? "X" : "O";

    document.getElementById("result").innerHTML =
        player + "'s Turn";
}



function checkwinner() {

    let C1 = document.getElementById("c1").innerHTML;
    let C2 = document.getElementById("c2").innerHTML;
    let C3 = document.getElementById("c3").innerHTML;
    let C4 = document.getElementById("c4").innerHTML;
    let C5 = document.getElementById("c5").innerHTML;
    let C6 = document.getElementById("c6").innerHTML;
    let C7 = document.getElementById("c7").innerHTML;
    let C8 = document.getElementById("c8").innerHTML;
    let C9 = document.getElementById("c9").innerHTML;

    let winPatterns = [
        [C1, C2, C3],
        [C4, C5, C6],
        [C7, C8, C9],
        [C1, C4, C7],
        [C2, C5, C8],
        [C3, C6, C9],
        [C1, C5, C9],
        [C3, C5, C7]
    ];

    for (let pattern of winPatterns) {
        if (
            pattern[0] !== "" &&
            pattern[0] === pattern[1] &&
            pattern[1] === pattern[2]
        ) {
            return true;
        }
    }

    return false;

}