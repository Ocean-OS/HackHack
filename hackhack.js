/*
Hack².js
Made by ComputerGuy (github.com/Ocean-OS)
CC-BY-NC-SA 4.0 License
Documentation
- This script will scan for servers with a depth between 1 and 21. It then writes scripts for each server that hacks, weakens, grows, and/or nukes the server. 
- This script will automatically exclude any purchased servers and home from having the script being run on them. 
- This script by itself will not use much RAM, but the scripts it create will. ~1TB of my RAM was taken running this script to run double-threaded scripts for 58 servers. 
- This script uses arguments to have more configuration. The arguments are below, in the format of the command: 
hackhack.js -d -t -c
D: D is a Number that can be between 1 and 20. D is the depth of the scan performed. Higher D = More Servers
T: T is a Number greater than or equal to 1 that determines how many threads of each server script are run. Higher T = More threads, more RAM usage, more money
C: C contains configuration formatted in JSON to simplify the syntax. Here's the full configuration options: 
{
  exempt: string[],
  kill: boolean
}
Exempt is a String Array of any servers you want to exclude from the servers that will have scripts run on them. 
Kill is a Boolean that determines if you want to kill any scripts that were started by a previous instance of Hack². This is turned OFF by default, as it is unstable and can cause Bitburner to crash. 
Here's some example commands you could run to:
- Run Hack² with a depth of 12, and to create double-threaded scripts that run on servers other than darkweb and n00dles
hackhack.js 12 2 {exempt:["darkweb","n00dles"]}
- Run Hack² with a depth of 5, and to create single-threaded scripts that run on servers other than iron-gym and kills any previous scripts from any previous Hack² instances
hackhack.js 5 1 {exempt:["iron-gym"],kill:true}
- Run Hack² with a depth of 8, and to create quadruple-threaded scripts, and to kill any scripts from any previous Hack² instances
hackhack.js 8 1 {kill:true}
 */
/** @param {NS} ns */
export async function main(ns) {
  ns.tprint(`
  |¯|    |¯|     /¯/\\¯\\      /¯¯¯¯¯¯¯\\  |¯|  /¯/ 2
  | |    | |    / /  \\ \\    / /¯¯¯¯¯|_| | | / /
  | |____| |   / /____\\ \\   | |         | |/ /
  | |====| |  / /======\\ \\  | |         | |\\ \\
  | |    | | / /        \\ \\ \\ \\_____|_| | | \\ \\
  |_|    |_|/_/          \\_\\ \\_______/  |_|  \\_\\
  `); //took about 20 minutes longer than it should've to make this
  if (21 > (Number(ns.args[0]))) {
    var depth = ns.args[0];
  } else {
    var depth = 1;
  }
  if (ns.args.length >= 2) {
    var threads = Number(ns.args[1]);
  } else {
    var threads = 1;
  }
  if (ns.args.length >= 3) {
    var configuration = ns.args.filter((f) => {
      return ns.args.indexOf(f) >= 2
    });
    try {
      var config = JSON.parse(configuration.join(" "));
    } catch (err) {
      var config = eval(configuration.join(" "));
    }
    if (typeof config.exempt == "object") {
      var exempt = config.exempt;
    }
    if (typeof config.kill == "boolean") {
      var killScripts = config.kill;
    }
  } else {
    var exempt = [];
    var killScripts = false;
  }
  ns.tprint(`Starting scan with depth set to ${depth}...`);
  var servers = ns.scan(ns.getHostname());
  var fullServers = servers;
  servers.forEach((server) => {
    if (depth >= 2) {
      ns.scan(server).forEach((hostname) => {
        fullServers.push(hostname);
        if (depth >= 3) {
          ns.scan(hostname).forEach((host) => {
            fullServers.push(host);
            if (depth >= 4) {
              ns.scan(host).forEach((h) => {
                fullServers.push(h);
                if (depth >= 5) {
                  ns.scan(h).forEach((hs) => {
                    fullServers.push(hs);
                    if (depth >= 6) {
                      ns.scan(hs).forEach((hos) => {
                        fullServers.push(hos);
                        if (depth >= 7) {
                          ns.scan(hos).forEach((hosts) => {
                            fullServers.push(hosts);
                            if (depth >= 8) {
                              ns.scan(hosts).forEach((hostnames) => {
                                fullServers.push(hostnames);
                                if (depth >= 9) {
                                  ns.scan(hostnames).forEach((names) => {
                                    fullServers.push(names);
                                    if (depth >= 10) {
                                      ns.scan(names).forEach((nameshosts) => {
                                        fullServers.push(nameshosts);
                                        if (depth >= 11) {
                                          ns.scan(nameshosts).forEach((hostsOfNames) => {
                                            fullServers.push(hostsOfNames);
                                            if (depth >= 12) {
                                              ns.scan(hostsOfNames).forEach((namesOfHosts) => {
                                                fullServers.push(namesOfHosts);
                                                if (depth >= 13) {
                                                  ns.scan(namesOfHosts).forEach((namesOfNames) => {
                                                    fullServers.push(namesOfNames);
                                                    if (depth >= 14) {
                                                      ns.scan(namesOfNames).forEach((hostsOfHosts) => {
                                                        fullServers.push(hostsOfHosts);
                                                        if (depth >= 15) {
                                                          ns.scan(hostsOfHosts).forEach((namesOfHostsOfNames) => {
                                                            fullServers.push(namesOfHostsOfNames);
                                                            if (depth >= 16) {
                                                              ns.scan(namesOfHostsOfNames).forEach((hostsOfNamesOfHosts) => {
                                                                fullServers.push(hostsOfNamesOfHosts);
                                                                if (depth >= 17) {
                                                                  ns.scan(hostsOfNamesOfHosts).forEach((namesOfHostsOfNamesOfHosts) => {
                                                                    fullServers.push(namesOfHostsOfNamesOfHosts);
                                                                    if (depth >= 18) {
                                                                      ns.scan(namesOfHostsOfNamesOfHosts).forEach((hostnamesSillyGuy) => {
                                                                        fullServers.push(hostnamesSillyGuy);
                                                                        if (depth >= 19) {
                                                                          ns.scan(hostnamesSillyGuy).forEach((namesOfHostsSillyGuy) => {
                                                                            fullServers.push(namesOfHostsSillyGuy);
                                                                            if (depth >= 20) {
                                                                              ns.scan(namesOfHostsSillyGuy).forEach((hostsOfNamesSillyGuy) => {
                                                                                fullServers.push(hostsOfNamesSillyGuy);
                                                                              })
                                                                            }
                                                                          })
                                                                        }
                                                                      })
                                                                    }
                                                                  })
                                                                }
                                                              })
                                                            }
                                                          })
                                                        }
                                                      })
                                                    }
                                                  })
                                                }
                                              })
                                            }
                                          })
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
  fullServers = fullServers.filter((f) => {
    return (f !== 'home' && !ns.getPurchasedServers().includes(f) && !exempt.includes(f))
  });
  var doneServers = [];
  fullServers.forEach((f) => {
    if (!doneServers.includes(f)) {
      doneServers.push(f);
    }
  });
  fullServers = doneServers;
  ns.tprint(fullServers);
  var failed = 0;
  ns.tprint(`Writing scripts for ${fullServers.length} servers...`);
  for (var serverName of fullServers) {
    var script = `/** @param {NS} ns */
export async function main(ns){
  while(true){
    try{
      Math.random() > 0.5 ? await ns.hack("${serverName}") : await ns.grow("${serverName}");
    }catch(err){
      try{
        await ns.weaken("${serverName}");
      }catch(err){
        try{
          ns.brutessh("${serverName}");
          ns.ftpcrack("${serverName}");
          ns.httpworm("${serverName}");
          ns.sqlinject("${serverName}");
          ns.relaysmtp("${serverName}");
          ns.nuke("${serverName}");
        }catch(err){}
      }
    }
  }
}`;
    if (ns.fileExists(`deep-${serverName}.js`)) {
      ns.clear(`deep-${serverName}.js`);
    }
    ns.write(`deep-${serverName}.js`, script);
    if (killScripts == true)
      if (ns.getRunningScript(`deep-${serverName}.js`, ns.getHostname())) ns.scriptKill(`deep-${serverName}.js`, ns.getHostname());
    if (ns.getScriptRam(`deep-${serverName}.js`, ns.getHostname()) * threads < ns.getServerMaxRam(ns.getHostname()) - ns.getServerUsedRam(ns.getHostname())) {
      ns.run(`deep-${serverName}.js`, threads);
    } else {
      ns.tprint(`Failed to run script for the '${serverName}' server, you do not have enough RAM.`);
      failed++;
    }
  }
  if (fullServers.length - failed !== 0) {
    ns.tprint(`Successfully started ${fullServers.length - failed} ${threads}-threaded scripts on ${fullServers.length - failed} servers!`);
  } else {
    ns.tprint(`Failed to run any scripts, you do not have enough RAM.`);
  }
}
