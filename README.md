# My PostCSS, JS and Grunticon Build Workflow
Set up of my personal PostCSS workflow to make sure I can do all the fallbacks and functionality I use frequently from Sass and Compass.

## Setup & Install

1. I did node, grunt and each plugin one at a time, you'll have to do the same. It was a good learning process.

### Dependencies

1. npm
2. grunt 
3. grunt-postcss
4. grunticon
5. A lot of plugins - you can find them in package.json and the Gruntfile.js

### Installation

I started by looking at other peoples gruntifiles, reading docs and (admittedly) had a lot of trouble getting PostCSS to run in the first place. After a ton of troubleshooting, a relatively steep learning curve, starting from scratch and installing each plugin one by one 
(building and viewing results after each install) I finally got it to just about where I "think" I can use this on a production project.


## What PostCSS and other plugins I'm using

* //-------------------------------
* CSS Build
* require('postcss-import')(),                       // Partials imports
* require('postcss-simple-vars')(),                  // Variables, a must
* require('pixrem')(),                               // User rem measurements and it writes fallback/current/future compliant sizes
* require('postcss-color-function')(),               // Replicates sass's lighten() and darken() plus more
* require('postcss-color-rgba-fallback')(),          // For IE8
* require('postcss-simple-extend')(),                // sass extend
* require('postcss-nested')(),                       // sass nesting style
* require('postcss-merge-rules')(),                  // Duplicate selector styles are combined
* require('autoprefixer-core')('last 1 version'),    // Kinda awesome
* require('postcss-discard-comments')({removeAll: true}),
* require('cssnano')()                               // Minify

* //-------------------------------
* JS Build
* "grunt-contrib-concat": "^0.5.1",
* "grunt-contrib-jshint": "^0.11.2",
* "grunt-contrib-uglify": "^0.9.1",

* //-------------------------------
* Grunticon Build
* http://www.grunticon.com/
* http://pixelbuddha.net/ballicons2/index.html
* To test I downloaded the Ballicons package, deleted everything but the svg's and put them in a unique directory to insure they were being built from scratch.


## Demo

The "css/*.css" files have CSS rules that trigger the different plugins.