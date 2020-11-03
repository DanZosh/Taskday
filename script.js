// Assemble: Create/select DOM elements
var currentDayEl = $('#currentDay');
    console.log(currentDayEl)
var currentTimeEl = $('#currentTime');
    console.log(currentTimeEl)

// Assemble: Create/select global variables 
var hoursArray=[9,10,11,12,13,14,15,16,17]
    console.log(hoursArray)

//DISPLAY the current Day and Time
setInterval(function(){
    var time=moment();
    var dayFormatted= time.format("dddd, MMMM do")
    var timeFormatted = time.format("hh:mm:ss")
    // hourFormatted = time.format("H");
    currentDayEl.text(dayFormatted);
    currentTimeEl.text(timeFormatted);
    return    
    })

// // These are various attempts to get the current hour that are broken rn:
// var currentHour = setInterval(function(){
//     moment().format("H");
//     return
//     })
// console.log(currentHour)

// currenthour = moment().format("H")
// console.log(currenthour)

// hour = setInterval(function(hour){
//     hour = moment().format("H")
//     return
// })
// console.log(hour)
