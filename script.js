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
// toggle between the two lines below to test
var currentHour = moment().hour()
// var currentHour = 17
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

//the guts of my for loop are here:
for (let i = 0; i < timeArray.length; i++) {
    var hourX = timeArray[i];
        console.log(hourX)
    var hourXTime = hourX.time
        console.log(hourXTime)
    var hourXhour = hourX.hour
        console.log(hourXhour)




    var trEl = $("<tr>")
        trEl.prop('id', "trEl")
    var thEldiv = $("<div>")
        thEldiv.prop('id', "thEldiv")
    var thEl = $("<th>")
        thEl.addClass("hour").prop('id', `${hourXhour}`).prop("scope", "row").text(hourXTime)
    var tdEl1 =  $("<td>")
        tdEl1.prop('id', "tdEl1")
    var textarea =  $("<textarea>")
        textarea.addClass("form-control").prop("id", "textArea").prop("rows", "1")
        if(hourXhour===currentHour){
            textarea.addClass("present");
        }else if (hourXhour < currentHour){
            textarea.addClass("past");
        }else{
            textarea.addClass("future");
        }

    var tdEl2 =  $("<td>")
        tdEl2.prop('id', "tdEl2")
    var button =  $("<button>")
        button.addClass("btn btn-info saveBtn fas fa-save").prop("type", "submit").prop("id", "button")

    thEldiv.append(thEl)
    tdEl1.append(textarea)
    tdEl2.append(button)
    trEl.append(thEldiv)
    trEl.append(tdEl1)
    trEl.append(tdEl2)
    timeblockEl.append(trEl)

    // timeblockEl.append(trEl)
    // timeblockEl.append(thEl)
    // tdEl1.append(textarea)
    // timeblockEl.append(tdEl1)
    // tdEl2.append(button)
    // timeblockEl.append(tdEl2)

    // console.log(trEl)
    // console.log(thEl)
    // console.log(tdEl1)
    // console.log(textarea)
    // console.log(tdEl2)
    // console.log(button)
}