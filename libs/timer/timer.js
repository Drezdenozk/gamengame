function timeToEventFull(eventDate, now) {
	  
	var now = new Date();
	
      // количество дней до события
	var daystoED = eventDate.diff(now, 'days');
	daystoED = (daystoED < 1) ? 0 : daystoED;
     // количество часов до события
	var hourstoED = eventDate.diff(now, 'hours') - (24*eventDate.diff(now, 'days'));
	hourstoED = (hourstoED < 10) ? "0"+hourstoED : hourstoED;
     // количество минут до события
	var minutestoED = eventDate.diff(now, 'minutes') - (60*eventDate.diff(now, 'hours'));
         minutestoED = (minutestoED < 10) ? "0"+minutestoED : minutestoED;
     // количество секунд до события
	var secondstoED = eventDate.diff(now, 'seconds') - (60*eventDate.diff(now, 'minutes'));
	secondstoED = (secondstoED < 10) ? "0"+secondstoED : secondstoED;       
     //сообщение
	 
	var answer = daystoED+" : "+hourstoED+" : "+minutestoED+" : "+secondstoED;
	var output = answer;
	
	return output;
}

function taigaFullClock(id){
	var now = new Date();
	
	var wrapper = document.getElementById(id);
	var element = wrapper.getElementsByClassName("counter-prime");
	//var dayswrapper = wrapper.getElementsByClassName("days");
	
	var eventDate = moment(element[0].getAttribute("data-date"), "YYYY.MM.DD HH:mm:ss");
	
	if(now < eventDate){
       window.setInterval(function(){ 
			var answer = timeToEventFull(eventDate, now);
			element[0].innerHTML = answer; 
        },1000);           
    }  
	else {
		element[0].innerHTML = "Турнир начался!"; 
	}
	setTimeout(function() {wrapper.className = wrapper.className + " event-active"}, 1);
}