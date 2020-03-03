let Os = {
  WINDOWS: 0,
  MAC: 1,
  LINUX: 2
}

// Constants
let MAIN_REPO_LINK = "https://github.com/MITLLRacecar/Student.git"
let MAIN_REPO_NAME = "Student"

// Input HTML objects
let txtGitHub;
let txtPath;
let txtIp;
let selOs;

// Output HTML objects
let pGitHubError;
let pPathError;
let pIpError;
let pOutputClone;
let pOutputSetup;
let pOutputTest;


function parseGitHub(gitHub) {
  const REGEX = /^https:\/\/github\.com\/MITLLRacecar\/racecar-.*\.git$/;
  const INSTRUCTOR_REGEX = /Instructor Override:[.]*/;
  const TEAM_REGEX = /^[0-9a-z]+$/;

  gitHub = gitHub.trim();

  if (!gitHub) {
    pGitHubError.innerHTML = "Please provide a link to your racecar repository";
    return [null, null, false];
  }

  if (INSTRUCTOR_REGEX.test(gitHub)) {
    let teamName = gitHub.replace("Instructor Override:", "")
    teamName = teamName.trim().toLowerCase();

    if (!TEAM_REGEX.test(teamName)) {
      pGitHubError.innerHTML = "Instructor: Your team name must be alphanumeric"
      return [null, null, false]
    }
    console.log(teamName)

    return [MAIN_REPO_LINK, teamName, true]
  }

  if (!REGEX.test(gitHub)) {
    pGitHubError.innerHTML =
      "That does not appear to be a valid clone link for a racecar repository";
    return [null, null, false];
  }

  let teamName = gitHub.replace(`https://github.com/MITLLRacecar/racecar-`, "")
  teamName = teamName.substring(0, teamName.length - 4);

  if (teamName.length <= 0) {
    pGitHubError.innerHTML =
      "Your team name must be at least one character long"
    return [null, null, false]
  }

  return [gitHub, teamName, false]
}

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
  path = path.replace(/ /g, "\\ ");

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

function generateGitCommand(clonePath, cloneLink, repoName) {
  return `cd ${clonePath}<br>
    git clone ${cloneLink}<br>
    cd ${repoName}<br>
    git checkout develop` // TODO: Remove this in May
}

function generateSourceFileCommand(repoPath, ip, teamName) {
  const SOURCE_FILES = ["~/.bashrc", "~/.bash_profile", "~/.zshrc"]
  let configPath = `${repoPath}/scripts/.config`
  let output = `echo "RACECAR_ABSOLUTE_PATH=\\"${repoPath}\\"<br>
    RACECAR_IP=\\"${ip}\\"<br>
    RACECAR_TEAM=\\"${teamName}\\"<br>
    RACECAR_CONFIG_LOADED=\\"TRUE\\"" > ${configPath}<br>
    <br>`

  for (let i = 0; i < SOURCE_FILES.length; ++i) {
    output += `if [ -f ${SOURCE_FILES[i]} ]; then<br>
        sed '/# RACECAR_ALIASES$/d' -i ${SOURCE_FILES[i]}<br>
        echo "if [ -f ${repoPath}/scripts/.config ]; then # RACECAR_ALIASES<br>
          . ${repoPath}/scripts/.config # RACECAR_ALIASES<br>
        fi # RACECAR_ALIASES<br>
        <br>
        if [ -f ${repoPath}/scripts/.bash_racecar ]; then # RACECAR_ALIASES<br>
          . ${repoPath}/scripts/.bash_racecar # RACECAR_ALIASES<br>
        fi # RACECAR_ALIASES" >> ${SOURCE_FILES[i]}<br>
      fi<br>
      <br>
      `;
  }

  output += `$SHELL<br>`

  return output;
}

function generateRacecarTest(path, ip, teamName) {
  return `racecar tool set up successfully!<br>
    RACECAR_ABSOLUTE_PATH: ${path}<br>
    RACECAR_IP: ${ip}<br>
    RACECAR_TEAM: ${teamName}<br>`
}

function generateOutput() {
  pGitHubError.innerHTML = "";
  pPathError.innerHTML = "";
  pIpError.innerHTML = "";

  let gitHubParseResult = parseGitHub(txtGitHub.value);
  let cloneLink = gitHubParseResult[0];
  let teamName = gitHubParseResult[1];
  let path = parsePath(txtPath.value, selOs.value);
  let ip = parseIp(txtIp.value);
  if (cloneLink != null &&
    teamName != null &&
    path != null &&
    ip != null) {
    let repoName = gitHubParseResult[2] ? MAIN_REPO_NAME : `racecar-${teamName}`;
    let repoPath = `${path}/${repoName}`;
    pOutputClone.innerHTML = generateGitCommand(path, cloneLink, repoName);
    pOutputSetup.innerHTML = generateSourceFileCommand(repoPath, ip, teamName);
    pOutputTest.innerHTML = generateRacecarTest(repoPath, ip, teamName);
  }
}

window.onload = function init() {
  txtGitHub = document.getElementById("txtGitHub")
  txtPath = document.getElementById("txtPath");
  txtIp = document.getElementById("txtIp");
  pGitHubError = this.document.getElementById("pGitHubError")
  pPathError = document.getElementById("pPathError");
  pIpError = document.getElementById("pIpError");
  selOs = document.getElementById("selOs");
  pOutputClone = document.getElementById("pOutputClone");
  pOutputSetup = document.getElementById("pOutputSetup");
  pOutputTest = document.getElementById("pOutputTest");

  document.getElementById("btnGenerate").onclick = generateOutput;
}
