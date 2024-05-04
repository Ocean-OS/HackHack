# Hack²
Hack² - A highly productive Bitburner script that can scan for servers with a depth up to 20, and run multi-threaded hacking scripts on each one. 
## Documentation
- This script will scan for servers with a depth between 1 and 21. It then writes scripts for each server that hacks, weakens, grows, and/or nukes the server. 
- This script will automatically exclude any purchased servers and home from having the script being run on them. 
- This script by itself will not use much RAM, but the scripts it creates and runs will. ~1TB of my RAM was taken running this script to run double-threaded scripts for 58 servers. 
- This script uses arguments to have more configuration. The arguments are below, in the format of the command:
```shell
hackhack.js -d -t -c
```
- D: D is a Number that can be between 1 and 20. D is the depth of the scan performed. **Higher D = More Servers**
- T: T is a Number greater than or equal to 1 that determines how many threads of each server script are run. **Higher T = More threads, more RAM usage, more money**
- C: C is JSON. C contains configuration formatted in JSON to simplify the syntax. Here's the full configuration options: 
```json
{
  "exempt": [],
  "kill": false
}
```
Exempt is a String Array of any servers you want to exclude from the servers that will have scripts run on them. 
Kill is a Boolean that determines if you want to kill any scripts that were started by a previous instance of Hack². This is turned OFF by default, as it is unstable and can cause Bitburner to crash. 
Here's some example commands you could run to:
- Run Hack² with a depth of 12, and to create double-threaded scripts that run on servers other than darkweb and n00dles<br>
```shell
hackhack.js 12 2 {exempt:["darkweb","n00dles"]}
```
- Run Hack² with a depth of 5, and to create single-threaded scripts that run on servers other than iron-gym and kills any previous scripts from any previous Hack² instances<br>
```shell
hackhack.js 5 1 {exempt:["iron-gym"],kill:true}
```
- Run Hack² with a depth of 8, and to create quadruple-threaded scripts, and to kill any scripts from any previous Hack² instances<br>
```shell
hackhack.js 8 1 {kill:true}
```
**Warning: This script can freeze Bitburner for anywhere from 2-10 minutes, depending on the depth and thread count chosen. Sometimes it can even cause Bitburner to crash.**
