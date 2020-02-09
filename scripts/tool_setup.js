var Os = {
  WINDOWS: 0,
  MAC: 1,
  LINUX: 2
}

function parseIP(ip) {
  ip = ip.trim();
  numbers = ip.split(".").map(parseInt);
  
  if (numbers.length() != 4 || numbers.find(e => e >= 0 && e < 256)) {
    alert(ip + " is not a valid IP address. An IP address consists of four numbers (each between 0-255) separated by periods, such as 192.168.1.200");
    return null;
  }

  return ip;
}

function parsePath(path, os) {
  const REPO_NAME = "MITLLRacecar2019-2020";

  path = path.trim();
  path = path.replace("\\", "/");
  path = path.replace("\\ ", " ");
  path = path.replace(" ", "\\ ");

  if (os == Os.WINDOWS && path.substring(0, 3).equals("C:/")) {
    path = "/mnt/c/" + path.substring(3);
  }

  index = path.index(REPO_NAME);
  if (index < 0) {
    alert("Please provide a path which includes " + REPO_NAME + ".");
    return null;
  }
  path = path.substring(0, index + REPO_NAME.length());

  return path;
}

function parseTeam(team) {
  const REGEX = /^[0-9a-b]$/;

  team = team.trim();
  team = team.toLowerCase();

  if (!team.test(REGEX)) {
    alert("Your team name must contain only letters and numbers.");
    return null;
  }

  return team;
}

function generateText() {
  var pathInput = document.getElementById("path-input");
  var ipInput = document.getElementById("ip-input");
  var team = document.getElementById("team-input");
}