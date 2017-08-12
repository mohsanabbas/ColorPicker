var colors = [
    "rgb(242, 133, 7)",
    "rgb(23, 191, 193)",
    "rgb(11, 185, 7)",
    "rgb(219, 17, 250)",
    "rgb(23, 23, 3)",
    "rgb(255, 10, 50)"
];

var message = document.querySelector("#message");
var colorPicked = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
colorDisplay.textContent = colorPicked;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    //add click events
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (clickedColor === colorPicked) {
            //alert("CORRECT");
            message.textContent = "COREECT";
            message.classList.add("colorCorrect");
            changeColor(clickedColor);
        } else {
            this.style.background = '#093365';
            message.textContent = "WRONG";
            message.classList.remove("colorCorrect");
        }



    });





}

function changeColor(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;

    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}