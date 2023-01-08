
$(document).ready(() => {

  var saveBtn = $('.saveBtn');
  var timeContainer = $('.timeContainer');

  $(function () {
   //event listener that listens to all buttons with the class .saveBtn
   //whenever button is clicked it takes the value of whatever is in the textarea and stores the val into into local storage
   //corresponding to the ID of that task which is the hour of the time.
    saveBtn.on("click", function(){
      localStorage.setItem($(this).parent().attr('id'),$(this).parent().children().eq(1).val())
    });
    displayTime();
    displayTask();
    displayDate();

    // displaytime function that uses jquery to get all the children nodes of parent with class timecontainer
    // uses a forloop to loop through all the children. within the forloop it gets the id of each children.
    // the id of each children represent the time in the planner. then uses dayjs with the method diff to see if
    // the hour difference is positive or negative. negative means its over due, 0 means its current and positive means there's still time. 
    // then it gives each children the appropriate present, past, future class. 
    function displayTime(){ 
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
  
    //displayText function that also cycle through the amount of children in the container with class timeContainer
    //it takes the id of each children and looks for a localstorage data. it then use that data to display in the textarea of that children node
    function displayTask(){
      for(var i = 0; i < timeContainer.children().length; i++){
        var idText = timeContainer.children().eq(i).attr('id');
        var getTask = localStorage.getItem(idText);
        timeContainer.children().eq(i).children().eq(1).text(getTask);
      }

    }

    //grab the node with the id currentDay
    //uses dayjs to format and display the current day at the top.
    //using jquery method text to change the text in the html
    function displayDate(){
      var dayText = $('#currentDay');
      dayText.text(dayjs().format('MMM DD, YYYY - dddd'));

    }

  });
});
