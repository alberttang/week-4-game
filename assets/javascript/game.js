//declare starting variables

var wins = 0;
var loses = 0;
var counter = 0;

//declare starting random target number between 19-120 (per game rules)
var targetNumber = Math.floor(Math.random() * 120) + 19;

//append text to number-to-guess div
$("#number-to-guess").text(targetNumber);

//declare starting random attribute value for each cat between 1-12

$(".crystal1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
$(".crystal2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
$(".crystal3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
$(".crystal4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);


// ------------function------------------------

//reset function after win or lose to generate new random cat value
function reset() {
    $(".crystal1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $(".crystal2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $(".crystal3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $(".crystal4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

    //generate new random target number and append to page

    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").text(targetNumber);

    //set score counter to o
    counter = 0;
    $("#score").text(counter);
}
// ----------on clicks -------------------

//on click function to perform when cat is clicked

$(".crystal-image").on("click", function() {

    //create variable to capture the clicked image value and turn it into an integer

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    //add the cat value to the clicked counter value
    counter += crystalValue;

    //append counter value to the score div

    $("#score").text(counter);


    // if statement to determine if the player has won or lost

    //if the counter is equal to the target number
    if (counter === targetNumber) {
        //alert the user has won
        alert("You win!");
        // increase wins by 1
        wins++;
        // append the win value to the the win div 
        $("#wins").text(wins);
        // run the reset function to generate new target and cat values
        reset();


        // if the counter is creater than the the targetNumber the player loses
    } else if (counter >= targetNumber) {
        // alert the user they have lost
        alert("You lose!!");
    	// increase loses by 1
        loses++;
        // append the number of loses to the losses div
        $("#losses").text(loses);
        //run the reset function
        reset();
    }

});