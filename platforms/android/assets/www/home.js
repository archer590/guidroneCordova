//var jsonfile = require('jsonfile');
//var util = require('util');

	function readJSON (path){	
		var request = new XMLHttpRequest();
	    request.open("GET", path, false);
	    request.send(null);
	    var returnValue = request.responseText;
		console.log(returnValue);
		var rooms = JSON.parse(returnValue);
		console.log(rooms);
		return rooms;
	}

	function addButton(rooms) {
		console.log("Start creation of button...");
		console.log(rooms.main_facilities.length);
		//var div = document.getElementById('main_facilities');
		var buttons = "", i;
		for (i=0; i<rooms.main_facilities.length; i++) {
			buttons = buttons + "<button type='button' class='btn btn-lg btn-info' onclick='callAnotherPage(\"" + rooms.main_facilities[i].id + "\")'>" + rooms.main_facilities[i].name + "</button><br>";
			/**var newbutton = document.createElement('button');
			
			var buttonIdName = room[i].id;
			
			newbutton.setAttribute('id',buttonIdName);
			newbutton.setAttribute('type', "button");
			newbutton.setAttribute('class', "btn btn-lg btn-info");
			newbutton.setAttribute('onclick', "window.location.href='/"+room[i].id);
			
			newbutton.innerHTML = room[i].id;
			
			div.appendChild(newbutton);**/
		}
		console.log("buttons: " + buttons);
		console.log("Button div:");
		document.getElementById('main_facilities').innerHTML = buttons;
	}

	function callAnotherPage(cur_room){
		console.log(cur_room);	
		localStorage.setItem("room", cur_room);
		var room = localStorage.getItem("room");	
		console.log(room);	
        
        var bebop = require('node-bebop');

        var drone = bebop.createClient();

        drone.connect(function() {
        drone.takeOff();

        setTimeout(function() {
            drone.land();
        }, 5000);
        });       
        
		window.location = "tour.html";
	}