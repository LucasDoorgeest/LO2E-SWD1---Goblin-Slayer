const appDetails = "https://store.steampowered.com/api/appdetails?appids=";
var currentAppid = "";
import fetch from "node-fetch";
import * as fs from "fs";


// Request short description from steam api

// Request short description from steam api

async function getShortDesc(gamenumber) {
  const path = `./GameData/${gamenumber}.json`;
  console.log(path);

  let fileExists;
  try {
    fileExists = fs.existsSync(path);
  } catch (error) {
    console.error(error);
    return;
  }

  if (fileExists) {
    console.log('exists!');
    try {
      const content = await fs.promises.readFile(path, 'utf8');
      const data = JSON.parse(content);
      console.log(
        'Intended target for following requests: ',
        data.applist.apps[gamenumber]
      );
      const currentAppid = data.applist.apps[gamenumber].appid;
      const newLink = `${appDetails}${JSON.stringify(currentAppid)}`;
      console.log(newLink, '\n');

      try {
        const res = await fetch(newLink, { method: 'GET' });
        const json = await res.json();
        Object.entries(json).forEach(([key, value]) => {
          console.log(value, '\n');
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error('Error happened here!');
      console.error(error);
    }
 
 } else {
    try {
      const content = await fs.promises.readFile('./project.json', 'utf8');
      const data = JSON.parse(content);
      console.log(
        'Intended target for following requests: ',
        data.applist.apps[gamenumber]
      );
      const currentAppid = data.applist.apps[gamenumber].appid;
      const newLink = `${appDetails}${JSON.stringify(currentAppid)}`;
      console.log(newLink, '\n');

      try {
        const res = await fetch(newLink, { method: 'GET' });
        const json = await res.json();
        Object.entries(json).forEach(([key, value]) => {
          let data = JSON.stringify(value)
          console.log(value, '\n');
          fs.writeFileSync(`gamedata/${gamenumber}.json`, data)
        });
      
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error('Error happened here!');
      console.error(error);
    }
  }
}

getShortDesc(1259);
getShortDesc(777);
getShortDesc(212);
getShortDesc(6969);
getShortDesc(696969);
getShortDesc(3522);