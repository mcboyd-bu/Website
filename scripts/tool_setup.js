let Os = {
  WINDOWS: 0,
  MAC: 1,
  LINUX: 2
}

const REPO_NAME = "MITLLRacecar2019-2020";
const REPO_LINK = "https://github.com/MatthewCalligaro/MITLLRacecar2019-2020.git"
const MAX_TEAM_NAME_LENGTH = 12;

let txtPath;
let txtIp;
let txtTeam;
let pOutput;
let pPathError;
let pIpError;
let pTeamError;
let selOs;

function parsePath(path, os) {
  path = path.trim();
  if (!path) {
    pPathError.innerHTML = "Please provide a path."
    return null;
  }

  // If the user is on Windows, switch \ to / and use /mnt/c/ for WSL
  if (os == Os.WINDOWS) {
    if (path.substring(0, 3) == "C:\\") {
      path = "/mnt/c/" + path.substring(3);
    }
    path = path.replace(/\\/g, "/");
  }

  // Escape spaces (ex: replace "bad dir" with "bad\ dir")
  path = path.replace(/\\ /g, " ");
  path = path.replace(/ /, "\\ ");

  // Check that the path starts from root
  if (path[0] != "/") {
    pPathError.innerHTML = "This does not appear to be an absolute path."
    return null;
  }

  // Remove the trailing "/" if it exists
  if (path.substring(path.length - 1) == "/") {
    path = path.substring(0, path.length - 1);
  }

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

  if (team.length > MAX_TEAM_NAME_LENGTH) {
    pTeamError.innerHTML = `Your team name must be ${MAX_TEAM_NAME_LENGTH} characters or less.`
    return null;
  }

  return team;
}

function generateGitCommand(clonePath) {
  return `cd ${clonePath}<br>
    git clone ${REPO_LINK}<br>
    cd ${REPO_NAME}<br>
    git checkout develop` // TODO: Remove this in May
}

function generateBashRacecarHeader(repoPath, ip, team) {
  return `RACECAR_ABSOLUTE_PATH="${repoPath}"<br>
  RACECAR_IP="${ip}"<br>
  RACECAR_TEAM="${team}"`;
}

function generateSourceFileCommand(repoPath) {
  const SOURCE_FILES = ["~/.bashrc", "~/.bash_profile", "~/.zshrc"]
  let output = "";

  for (let i = 0; i < SOURCE_FILES.length; ++i) {
    output += `if [ -f ${SOURCE_FILES[i]} ]; then<br>
        sed '/# RACECAR_ALIASES$/d' -i ${SOURCE_FILES[i]}<br>
        echo "if [ -f ${repoPath}/scripts/.bash_racecar ]; then # RACECAR_ALIASES<br>
          . ${repoPath}/scripts/.bash_racecar # RACECAR_ALIASES<br>
        fi # RACECAR_ALIASES<br>" >> ${SOURCE_FILES[i]}<br>
      fi<br>
      `;
  }

  return output;
}

function generateRacecarTest(path, ip, team) {
  return `racecar tool set up successfully!<br>
    RACECAR_ABSOLUTE_PATH: ${path}<br>
    RACECAR_IP: ${ip}<br>
    RACECAR_TEAM: ${team}<br>`
}

function generateOutput() {
  pPathError.innerHTML = "";
  pIpError.innerHTML = "";
  pTeamError.innerHTML = "";

  let path = parsePath(txtPath.value, selOs.value);
  let repoPath = `${path}/${REPO_NAME}`;
  let ip = parseIp(txtIp.value);
  let team = parseTeam(txtTeam.value);
  
  if (path != null && ip != null && team != null) {
    pOutput.innerHTML = `1. Open a new bash (Windows/Linux) or terminal (Mac) window, copy in the following command, and press enter:<br>
    <br>
    <b>${generateGitCommand(path)}</b><br>
    <br>
    You will be asked to enter your GitHub credentials.  This will create a new directory called ${REPO_NAME} at the location you provided.<br>
    <br>
    <br>
    2. Open this new ${REPO_NAME} directory in Visual Studio Code.  Open .bash_racecar (in the "scripts" folder) and add the following lines.<br>
    <br>
    <b>${generateBashRacecarHeader(repoPath, ip, team)}</b><br>
    <br>
    Save your changes to .bash_racecar.<br>
    <br>
    <br>
    3. Enter the following command in your terminal:<br>
    <br>
    <b>${generateSourceFileCommand(repoPath)}</b><br>
    <br>
    <br>
    4. Close any bash/terminal windows and open a brand new bash/terminal window.  To test that the racecar tool installed correctly, run the following command:<br>
    <br>
    <b>racecar test</b><br>
    <br>
    If you see the following output, installation was successful:<br>
    <br>
    <b>${generateRacecarTest(repoPath, ip, team)}</b><br>
    <br>
    <br>
    5. Turn on your RACECAR and make sure that your computer is connected to the RACECAR Wi-Fi.  Run the following command in a terminal:<br>
    <br>
    <b>racecar setup</b><br>
    <br>
    This will set up your team's directory on your RACECAR.<br>
    <br>
    <br>
    Your racecar is now ready to use!  You can run "racecar help" in any bash/terminal window to learn about the commands provided by the racecar tool.<br>`
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
