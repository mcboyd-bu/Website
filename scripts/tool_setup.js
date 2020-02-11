var Os = {
  WINDOWS: 0,
  MAC: 1,
  LINUX: 2
}

var txtPath;
var txtIp;
var txtTeam;
var pOutput;
var pPathError;
var pIpError;
var pTeamError;
var selOs;

function parsePath(path, os) {
  const REPO_NAME = "MITLLRacecar2019-2020";

  path = path.trim();
  if (!path) {
    pPathError.innerHTML = "Please provide a path."
    return null;
  }

  if (os == Os.WINDOWS) {
    if (path.substring(0, 3) == "C:\\") {
      path = "/mnt/c/" + path.substring(3);
    }
    path = path.replace(/\\/g, "/");
  }

  // Escape spaces (ex: replace "bad dir" with "bad\ dir")
  path = path.replace("\\ ", " ");
  path = path.replace(" ", "\\ ");

  if (path[0] != "/") {
    pPathError.innerHTML = "This does not appear to be an absolute path."
    return null;
  }

  index = path.indexOf(REPO_NAME);
  if (index < 0) {
    pPathError.innerHTML = `Please provide a path which includes ${REPO_NAME}.`
    return null;
  }

  path = path.substring(0, index + REPO_NAME.length);
  return path;
}

function parseIp(ip) {
  ip = ip.trim();
  if (!ip) {
    pIpError.innerHTML = "Please provide an IP address."
    return null;
  }

  numbers = (ip.split(".")).map(n => parseInt(n, 10));
  if (numbers.length == 4 && 
      numbers.reduce((accum, elem) => accum && elem >= 0 && elem < 256, true)) {
    return ip;
  }

  pIpError.innerHTML = `"${ip}" is not a valid IP address. An IP address consists of four numbers (each between 0-255) separated by periods, such as 192.168.1.200`;
  return null;
}

function parseTeam(team) {  
  const REGEX = /^[0-9a-z]+$/;

  team = team.trim();
  if (!team) {
    pTeamError.innerHTML = "Please provide a team name."
    return null;
  }

  team = team.toLowerCase();
  
  if (!REGEX.test(team)) {
    pTeamError.innerHTML = "Your team name can only contain letters and numbers.";
    return null;
  }

  return team;
}

function generateBashRacecar(path, ip, team) {
  return `RACECAR_ABSOLUTE_PATH="${path}"<br>
  RACECAR_IP="${ip}"<br>
  RACECAR_TEAM="${team}"`;
}

function generateBashrc(path) {
  
}

function generateOutput() {
  pPathError.innerHTML = "";
  pIpError.innerHTML = "";
  pTeamError.innerHTML = "";

  path = parsePath(txtPath.value, selOs.value);
  ip = parseIp(txtIp.value);
  team = parseTeam(txtTeam.value);
  
  if (path != null && ip != null && team != null) {
    pOutput.innerHTML = generateBashRacecar(path, ip, team);
  }
}

window.onload = function init() {
  txtPath = document.getElementById("txtPath");
  txtIp = document.getElementById("txtIp");
  txtTeam = document.getElementById("txtTeam");
  pOutput = document.getElementById("pOutput");
  pPathError = document.getElementById("pPathError");
  pIpError = document.getElementById("pIpError");
  pTeamError = document.getElementById("pTeamError");
  selOs = document.getElementById("selOs");

  document.getElementById("btnGenerate").onclick = generateOutput;
}
