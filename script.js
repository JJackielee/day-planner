// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(() => {

  var saveBtn = $('.saveBtn');
  var cTime = dayjs().format('M/D/YYYY h:mm:ss');

  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    saveBtn.on("click", function(){
      console.log("does this work?");
      console.log($(this).parent().attr('id'));
    });
      console.log(cTime);
      displayTime();

    // 

    function displayTime(){ 
      var timeContainer = $('.timeContainer');
      for(var i = 0; i < timeContainer.children().length; i++){
        var idText = timeContainer.children().eq(i).attr('id').slice(5);
        dTime = dayjs().hour(idText).diff(dayjs(),"hours")
        if(dTime < 0){
          timeContainer.children().eq(i).addClass('past');
        } else if(dTime == 0) {
          timeContainer.children().eq(i).addClass('present');
        } else {
          timeContainer.children().eq(i).addClass('future');
        }

      }
    }
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?




    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?




    //
    // TODO: Add code to display the current date in the header of the page.



  });
});
