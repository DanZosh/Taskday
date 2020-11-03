// Assemble: Create/select DOM elements
var currentDayEl = $('#currentDay');
    console.log(currentDayEl)
var currentTimeEl = $('#currentTime');
    console.log(currentTimeEl)
var timeblockEl = $('.timeblock')
    console.log(timeblockEl)
// Assemble: Create/select global variables 
var timeArray=[
    hour1={
        time:9,
        hour:9},
    hour2={
        time:10,
        hour:10},
    hour3={
        time:11,
        hour:11},
    hour4={
        time:12,
        hour:12},
    hour5={
        time:1,
        hour:13},
    hour6={
        time:2,
        hour:14},
    hour7={
        time:3,
        hour:15},
    hour8={
        time:4,
        hour:16},
    hour9={
        time:5,
        hour:17},
        ]
    console.log(timeArray)
// var currentHour = moment().format("H")
//     console.log(currentHour)
var currentHour = moment().hour()
console.log(currentHour)

//DISPLAY the current Day and Time
setInterval(function(){
    var time=moment();
    var dayFormatted= time.format("dddd, MMMM do")
    var timeFormatted = time.format("hh:mm:ss")
    // hourFormatted = time.format("H");
    currentDayEl.text(dayFormatted);
    currentTimeEl.text(timeFormatted);
    return    
    },1000);





