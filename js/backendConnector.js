import games from '../GameData/69.json' assert {type: 'json'}
var gameinfo = games;

var gameinfo = games;
var gamename = gameinfo.data.name;
var kortesamenvating = gameinfo.data.short_description;
console.log(gamename);
console.log(kortesamenvating);

document.getElementById("gamenaam").innerHTML = gamename;
document.getElementById("desc").innerHTML = kortesamenvating;