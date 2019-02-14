// script.js

$(document).ready(function() {
    
    function resetDisplay(){
        $('#reset').hide();
        $('#raceInfoContainer').hide();
        $('#racetrack').show(500);
        $('#go').show(500);
        $('#betgreen').css({"visibility":"visible"});
        $('#betred').css({"visibility":"visible"});
        $('#result').hide();
    }        

    function resultDisplay(){
        $('#reset').show();
        $('#racetrack').hide();
        $('#go').hide();
        $('#betgreen').css({"visibility":"hidden"});
        $('#betred').css({"visibility":"hidden"});
        $('#raceInfoContainer').fadeIn(700);
        $('#result').fadeIn();
    }

    var bet="no bet";

    //click the green button
    $('#betgreen').click(function() {
        bet="green";
        $('#betred').css({"background-color":"white","color":"#B22222"})
        $('#betgreen').css({"background-color":"#77b72f","color":"white"})
    });
    
    //Click the red button
    $('#betred').click(function() {
        bet="red";
        $('#betgreen').css({"background-color":"white","color":"#77b72f"})
        $('#betred').css({"background-color":"#B22222","color":"white"})
    });

    // Click the GO button
    $('#go').click(function() {
        
        function displayMessage() {
            var win= raceTime1<raceTime2?'green':'red';
                if(bet=='no bet'){
                    $('#result').text("No Bets Placed!!");
                }else if(bet!=win){
                    $('#result').text("You lost!!\nBetter Luck Next Time!");
                } else{
                    $('#result').text("Congrats!!\nYou Won!");
                }            
        }

        //function that checks to see if a car has won the race
        function checkIfComplete() {
            
            if(place=='second'){
                resultDisplay();
                displayMessage();
            }
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }
            
        }

        
        // get the width of the cars
        var carWidth = $('#car1').width();
        
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        // generate a random # between 1 and 5000
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
        
        // set a flag variable to FALSE by default
        var isComplete = false;
        
        // set a flag variable to FIRST by default
        var place = 'first';
        
        // animate car 1
        $('#car1').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            // run function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
            
        });
        
        // animate car 2
        $('#car2').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
            
        });
        checkIfComplete();   
    });
    
    // reset the race
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
        bet= 'no bet';
        $('#betgreen').css({"background-color":"white","color":"#77b72f"})
        $('#betred').css({"background-color":"white","color":"#B22222"})
        resetDisplay();
    });
    
    
    
});
    








