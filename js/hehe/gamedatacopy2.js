import games from '../../gamedata/5.json' assert {type: 'json'}
var gameinfo = games;

var gameinfo = games;
var gamename = gameinfo.data.name;
var short_description = gameinfo.data.short_description;
var genre = gameinfo.data.genres[0].description
var gamedev = gameinfo.data.developers
var release = gameinfo.data.release_date.date
var gameimg = gameinfo.data.screenshots[0].path_thumbnail;
var gameimg2 = gameinfo.data.screenshots[1].path_thumbnail;
var link = "game1.html";
document.getElementById("gamenaam").innerHTML = `<p id="gamenaam" class="informatie">Game naam: ${gamename} <br> <br></p>`;
document.getElementById("developer").innerHTML = `<p id="gamenaam" class="informatie">Game Developer(s): ${gamedev}<br> <br></p>`;
document.getElementById("genre").innerHTML = `<p id="gamenaam" class="informatie">Genre(s): ${genre}<br> <br></p>`;
document.getElementById("release").innerHTML = `<p id="gamenaam" class="informatie">Release data: ${release}<br> <br></p>`;
document.getElementById("desc").innerHTML = `<p id="gamenaam" class="informatie">${short_description}<br> <br></p>`;
document.getElementById("gameimg").innerHTML = `<img class="imgdescription" src=\"${gameimg}\" width=\"400px\" height=\"150px\">`;
document.getElementById("gameimg2").innerHTML = `<img class="imgdemo" src=\"${gameimg2}\" width=\"400px\" height=\"150px\">`;