![](README.jpg)

These are a series of javascript exercises intended to be used alongside the Social Hackers Academy curriculum. 

## HOW TO USE THESE EXERCISES

Before you start you should have a few things installed on your machine:

1. NPM.  To check if you have NPM, type `npm --version` in a terminal. If you get back `Command 'npm' not found.` it means that NPM is not installed on your system. NPM comes bundled with **Node.JS** so you'll need to download and install the software from the [official website](https://nodejs.org/en/). Prefer downloading and installing the **LTS** (Long Term Support) version.

2. Jasmine.  Jasmine is a testing framework for Javascript.  Type `jasmine -v` or `jasmine --version` to check for it.  If you need to install it, type `npm install -g jasmine` or `npm i -g jasmine` to do so.

3. Fork and clone this repo (git clone [URL]) and get started.

Each exercise includes 3 files, a markdown file with a description of the task, an empty (or mostly empty) javascript file, and a set of tests.  

To complete the exercise go to the exercise directory with `cd helloWorld` in a terminal and run `jasmine filename.spec.js`.  This should find and run the test file and show you the output.  

Upon first running the tests you will find that the tests fail: this is by design!  Your task is to open up the javascript file and write the code needed to get all of the tests to pass. 

**IMPORTANT**: Some of the exercises have test conditions defined in the spec file that are defined as 'xit' compared to 'it'. This is purposeful, and as you test your solution against the first 'it', on success you will change the next 'xit' to an 'it' and test your code again, until all conditions are satisfied.

The first exercise, `helloWorld` will walk you through the process in more depth.

## SUBMITTING YOUR EXERCISES

Unless instructed otherwise, you should fork this repository, add your instructor(s) as collaborator(s) go through each exercise, commit and push the solutions and then submit the URL of the repository.

## CONTRIBUTORS

- [Patrick Chan](https://github.com/pchan2/)
- Photo by `Startup Stock Photos` from `Pexels`

