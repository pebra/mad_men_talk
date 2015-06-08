// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  simpleSlide = require('bespoke-theme-simple-slide'),
  mozillaSandstone = require('bespoke-theme-mozilla-sandstone');

// Bespoke.js
bespoke.from('article', [
  // mozillaSandstone(),
  // cube(),
  simpleSlide(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
]);
