# My PostCSS, JS and Grunticon Build Workflow Boilerplate
Set up of a PostCSS workflow that has all the functionality and fallbacks I use frequently from Sass and Compass.

## Setup & Install

1. I used node and grunt and installed each plugin one at a time. You'll have to do the same and your needs will certainly vary from mine.
2. https://nodejs.org/download/
3. http://gruntjs.com/getting-started
4. https://github.com/nDmitry/grunt-postcss

### Dependencies

1. npm
2. grunt 
3. grunt-postcss
4. grunticon
5. Plugin names can be found in package.json and the Gruntfile.js

### Installation

I started by looking at other peoples gruntifiles, reading docs and (admittedly) had trouble getting PostCSS to run in the first place. After a ton of troubleshooting, I finally got it to just about where I "think" I can use this on a production project. Now it is here for you to use as a reference and starting point.


## What PostCSS and other plugins I'm using

```
//-------------------------------
CSS Build
require('postcss-font-magician')({ hosted: '../fonts'}), // Font face builder
require('postcss-import')(),                    // Partials imports
require('postcss-simple-vars')(),               // Variables, a must
require('pixrem')(),                            // User rem measurements and it writes fallback/current/future compliant sizes
require('postcss-color-function')(),            // Replicates sass's lighten() and darken() plus more
require('postcss-color-rgba-fallback')(),       // For IE8
require('postcss-simple-extend')(),             // sass extend
require('postcss-nested')(),                    // sass nesting style
require('postcss-merge-rules')(),               // Duplicate selector styles are combined
require('autoprefixer-core')('last 1 version'), // Kinda awesome
require('postcss-discard-comments')({removeAll: true}), // Remove comments
require('cssnano')()                            // Minify

//-------------------------------
JS Build
"grunt-contrib-concat": "^0.5.1",   // Put them all together now
"grunt-contrib-jshint": "^0.11.2",  // Learn better coding practices
"grunt-contrib-uglify": "^0.9.1",   // Compress and rebuild

//-------------------------------
Grunticon Build
http://www.grunticon.com/
http://pixelbuddha.net/ballicons2/index.html
To test I downloaded the Ballicons package, deleted everything 
but the svg's and put them in a unique directory to insure they 
were being built from scratch.

//-------------------------------
Server
grunt-serve
serve: {
        options: {
            port: 9000,
            output: 'index.htm'
      },
    }
```
Is grunt-serve able to load the index automatically?

## Demo

The "css/*.css" files have some comments and CSS rules that trigger the different plugins.