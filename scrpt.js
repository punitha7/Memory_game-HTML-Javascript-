/*Global Variable*/
var picks = 0; //counts how many picks have been made in each turn
var firstchoice; //stores index of first card selected;
var secondchoice; //stores index of second card selected
var matches = 0; //counts number of matches made
var numAttempts = 0; //counts the number of attempts made
var backcard = "https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest"; //shows the back of the card when turned over
var tid;

var faces = [];
faces[0] = "http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png";
faces[1] = "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png";
faces[2] = "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png";
faces[3] = "http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png";
faces[4] = "http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png";
faces[5] = "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png";
faces[6] = "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png";
faces[7] = "http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png";
var numOfMatches = 0.5 * (faces.length);


function createTable(numOfCards) {
	var tables= document.getElementsByTagName('table');
	while (tables.length>0) {
		tables[0].parentNode.removeChild(tables[0]);
	}
	var tablearea = document.getElementById('gameboard'),
    table = document.createElement('table');
	var tempCnt = 0;
	for (var i = 0; i < 2; i++) {
		var tr = document.createElement('tr');
		for(var j = 0;j<numOfCards;j++){
			var td = document.createElement('td');
			var img = document.createElement('img');
			img.src=backcard;
			img.width=100;
			img.height=100;			
			var a = document.createElement('a');
			a.href="javascript:choose("+tempCnt+")";
			a.appendChild(img);
			td.appendChild(a);
			tr.appendChild( td );
			tempCnt++;
		}
		table.appendChild(tr);
	}

	tablearea.appendChild(table);
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function choose(cards) {
  if (picks === 2) {
    return;
  }
  if (picks === 0) {
    firstchoice = cards;
    document.images[cards].src = faces[cards];	
    picks = 1;
  } else {
    picks = 1;
    secondchoice = cards;
    document.images[cards].src = faces[cards];
    setTimeout(function () {
    check();}, 2000);
  }
}

function check() {
  
  numAttempts++;
  document.getElementById("attempts").innerHTML = numAttempts;
  if (faces[firstchoice] === faces[secondchoice]) {
    matches++;
    picks = 0;
    if (matches === numOfMatches) {
      alert("It took you " + numAttempts + " attempts to win the game");
      window.location.reload();
    } else {
		var tempFaces = [];
		var j = 0;
		for(var i = 0;i<faces.length;i++) {
			if(faces[firstchoice] !== faces[i] && faces[secondchoice] !== faces[i]) {
				tempFaces[j] = faces[i];
				j++;
			}
			
		}
		faces = [];
		faces = tempFaces;		
		createTable(numOfMatches-matches);
	} 
  } else {
      document.images[firstchoice].src = backcard;
      document.images[secondchoice].src = backcard;
      picks = 0;
  }
}

function shuffle() {
  var swaps;
  var i, j;
  var temp;
  faces = [];
faces[0] = "http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png";
faces[1] = "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png";
faces[2] = "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png";
faces[3] = "http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png";
faces[4] = "http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png";
faces[5] = "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png";
faces[6] = "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png";
faces[7] = "http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png";
  for (swaps = 0; swaps < 14; swaps++) {
    i = Math.floor(Math.random() * faces.length);
	j = Math.floor(Math.random() * faces.length);

	temp = faces[i];
	faces[i] = faces[j];	
	faces[j] = temp;
  }
  picks = 0;
  matches = 0;
  numAttempts = 0;
  createTable(faces.length/2);
numAttempts = 0;
document.getElementById("attempts").innerHTML = numAttempts;
}