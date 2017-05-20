# Gulp

- Open source JavaScript toolkit and task runner
- Front-end build system
- Used for time consuming & repetitive tasks

# Common Tasks

- Minification of scripts and styles
- Concatenation
- Dev Servers
- Cache busing (informing a browser that there is a new version of a cached file) 
- Testing, linting & optimisation

# How it works

- Built on top of node-streams (a continous flow of data that can be manipulated asynchronously)
- Use of pipeline (**pipe()** operator), where the output of one element is the input of another
	- e.g. one plugin could be used to minify JS files and then piped to the next plugin that compiles Sass files into CSS.
- Files are not affected until all plugins are processed

# How to install

Using npm, run the following command to install Gulp globally on your machine:
	
	npm install -g gulp

Additionally, to install this project, run **npm install** which will also add Gulp as dev dependancy

# How to run a task

Given a task has been defined, for example a task called "message", the following command on a terminal/CMD will execute said task: 

	gulp message

N.B. if a default task has been defined, simply type **"gulp"** on the command line to execute it 
