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
	var buttons="", i;	
	for (i=0; i<rooms.main_facilities.length; i++) {
		var cur_room = "\"window.location.href='/"+rooms.main_facilities[i].id+"'\"";
		console.log(cur_room);
		buttons = buttons + "<button type='button' class='btn btn-lg btn-info' onclick="+cur_room+">"+rooms.main_facilities[i].name+"</button><br>";
		/**var newbutton = document.createElement('button');
		
		var buttonIdName = room[i].id;
		
		newbutton.setAttribute('id',buttonIdName);
		newbutton.setAttribute('type', "button");
		newbutton.setAttribute('class', "btn btn-lg btn-info");
		newbutton.setAttribute('onclick', "window.location.href='/"+room[i].id);
		
		newbutton.innerHTML = room[i].id;
		
		div.appendChild(newbutton);**/
	}
	document.getElementById('main_facilities').innerHTML=buttons;
}
