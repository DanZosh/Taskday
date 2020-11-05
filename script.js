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
        hour:9,
        content:"",
    },
    hour2={
        time:10,
        hour:10,
        content:"",
    },
    hour3={
        time:11,
        hour:11,
        content:"",
    },
    hour4={
        time:12,
        hour:12,
        content:"",
    },
    hour5={
        time:1,
        hour:13,
        content:"",
    },
    hour6={
        time:2,
        hour:14,
        content:"",
    },
    hour7={
        time:3,
        hour:15,
        content:"",
    },
    hour8={
        time:4,
        hour:16,
        content:"",
    },
    hour9={
        time:5,
        hour:17,
        content:"",
    },
        ]
    console.log(timeArray)

var currentHour = moment().hour()
    console.log(currentHour)

//DISPLAY the current Day and Time
setInterval(function(){
    var time=moment();
    var dayFormatted= time.format("dddd, MMMM do")
    var timeFormatted = time.format("hh:mm:ss")
    // hourFormatted = time.format("H");
    currentDayEl.text("Today is " + dayFormatted);
    currentTimeEl.text("Current Time: " + timeFormatted);
    return    
    },1000);

// renderTimeArray()
init();
//CHECK if there are already items stored in local storage.
function init(){
    //DAN NOTE: I DONT QUITE UNDERSTAND THE SYNTAX BELOW, WHEN I RAN localStorage.getItem(localStorage.timeArray), i got null.
    var storedTimeArray = localStorage.getItem(localStorage.key(timeArray));
    // var storedTest= storedTimeArray.val();
    //     console.log(storedTest);
        console.log(storedTimeArray);
    if (storedTimeArray !== "[]"){
    //if true, then, replace timeArray with storedTimeArray
        timeArray=JSON.parse(storedTimeArray);
        
    }
    renderTimeArray();
}
//CREATE the line items and add them to the page:
//LOOP over the `timeArray` to create a line for each time object
function renderTimeArray(){
for (let i = 0; i < timeArray.length; i++) {
        //this gets the ith object in my timeArray
    var hourX = timeArray[i];
        // console.log(hourX)
    var hourXTime = hourX.time
        console.log(hourXTime)
    var hourXhour = hourX.hour
        console.log(hourXhour)
    var hourXContent = hourX.content
        // console.log(hourXContent)
    var amPM = ""
    if (hourXTime < 5 || hourXTime == 12){
        amPM = " PM";
    } else{
        amPM = " AM";
    }

//FOR each time object CREATE the components of the line items, ADD attributes 
    var trEl = $("<tr>")
        trEl.prop('id', "trEl").data("hour",`${hourXhour}`).prop("data-hour",`${hourXhour}`).addClass(`${hourXhour}`)
//in the above, only class appears to be appending to the element.
    var thEldiv = $("<div>")
        thEldiv.prop('id', "thEldiv")
    var thEl = $("<th>")
        thEl.addClass("hour").prop('id', `${hourXhour}`).prop("scope", "row").text(hourXTime + amPM)
    var tdEl1 =  $("<td>")
        tdEl1.prop('id', "tdEl1")
    var textarea =  $("<textarea>")
        textarea.addClass("form-control").prop("id", "textArea").prop("rows", "1")
        textarea.append(`${hourXContent}`)
//COMPARE the current hour to the time object `textarea` and ADD the color coding class based on that comparison
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
// APPEND to each other and the page
    thEldiv.append(thEl)
    tdEl1.append(textarea)
    tdEl2.append(button)
    trEl.append(thEldiv)
    trEl.append(tdEl1)
    trEl.append(tdEl2)
    timeblockEl.append(trEl)

//TEST your assignment are what you expect. Comment out but keep them when you're done just in case.
    // console.log(trEl)
    // console.log(thEl)
    // console.log(tdEl1)
    // console.log(textarea)
    // console.log(tdEl2)
    // console.log(button)
}
}

//ADD a click event to the button that can be heard by the parent element

// SAVE the textArea objects:
function storeTimeArray(event){
    event.preventDefault();
    console.log(this)
//starting from the click event, traverse up to the parent element, the trEl
    var lineItem = this.closest("tr")
        console.log(lineItem)
//from the trEl, get the content of the textArea:
    var taskItem = lineItem.childNodes[1].childNodes[0].value
        console.log(taskItem)
//get the index in he div class to be used as the item key, this is basically the hour number of the line item clicked
    var psuedoIndex = parseInt(lineItem.childNodes[0].childNodes[0].getAttribute('id'))
        console.log(psuedoIndex)
        // console.log(typeof psuedoIndex)
//SET the content of the textArea to the value of key `content`in `timeArray` for that hour
    for (let i = 0; i < timeArray.length; i++) {
        var element = timeArray[i];
            console.log(element)
        var elementHour=element.hour
            console.log(elementHour)
            console.log(psuedoIndex)

    // CREATE an if statement that IF lines 166 and 167 are equal, set the content of hour time object to the textArea
        if (elementHour == psuedoIndex){
        // if (1 == 1){
            // console.log("hello");
            // console.log(element.content);
            // console.log(taskItem);
            element.content = taskItem;
            console.log(element.content);
        }


    }
    //SET timeArray to local storage
    localStorage.setItem("timeArray", JSON.stringify(timeArray)); 
    // renderTimeArray();  

}
//ADD click event to the container holding the class:timeblock element and TARGET the element clicked for which the id = `button`.
timeblockEl.on("click","#button", storeTimeArray);


var clearButtonEl = $("#clearButton")
console.log(clearButtonEl)
clearButtonEl.on("click", function(event) {
    localStorage.setItem("timeArray", JSON.stringify([]));
    window.location.reload();
});

