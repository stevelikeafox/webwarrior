# Web Warrior
A Web UI for text adventurers!

## Environment Setup
A Vagrantfile is included to help you setup a development environment. Make sure you have the following dependencies installed:
 * [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
 * [Vagrant](https://www.vagrantup.com/downloads.html)
Then navigate to your checkout folder and run:
```bash
vagrant up
```  
Followed by:
```bash
vagrant ssh
```
Now you have your own Web Warrior development VM all setup and ready to go!

## Tasks

### Build
To build a one-file minified version of the source:
```bash
grunt
```

### Run
```bash
node src/webwarrior/index.js
```

You can reach the application from your host machine at http://localhost:3000/index.html
