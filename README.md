# web-app-template-1
A minimal starter template for ES6 javascript web application with knockoutjs, gulp and jspm.
This template should work equally well wether you develop on Windows, Mac and Linux.

##Computer wide setup
You need to do this once on your dev-machine. (Safe to do multiple times)
- Install node.js from https://nodejs.org/
- Install the git command line from https://git-scm.com/downloads
  - Select the option "Use Windows command prompt" (on Windows), use defaults for everything else.
- Install a good code editor. (I used Visual Studio Code for this template.)
- Open command prompt
  - run `npm install -g jspm`

##Setup a new web project
Dowload or clone this project template, and remove the `.git` folder

- Open command prompt in the web project folder in the filesystem
  - run `npm update` (You can use the default answers)
  - run `jspm update` (You can use the default answers)

##Update an existing web project
Do this if after you cloned/checked out a project, or if there are missing script references. (Safe to do multiple times)
- Open command prompt in the web project folder in the filesystem
  - run `npm update`
  - run `jspm update`

##Adding a new library to a project
This is how you add a new JavaScript library to a project.
- Open command prompt in the web project folder in the filesystem
  - For npm run `npm install npm_lib_to_inst --save` (Replace npm_lib_to_inst with the name of the new reference)
  - For jspm run `jspm install jspm_lib_to_inst --save` (Replace jspm_lib_to_inst with the name of the new reference)

##Running the website on your dev-computer
- Open command prompt in the web project folder in the filesystem
  - run `gulp watch`
- Open a browser and navigate to `http://localhost:9000/`

##Building the project
- Open command prompt in the web project folder in the filesystem
  - run `gulp build`
The outputs can be found in the dist folder

