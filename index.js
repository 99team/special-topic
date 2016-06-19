'use strict';

var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

module.exports = function(content, file, conf){
  var postcssArr = [];
  if( conf.flexboxfixer ){
    postcssArr.push(require('postcss-flexboxfixer'))
  }
  if( conf.gradientfixer ){
    postcssArr.push(require('postcss-gradientfixer'))
  }
  postcssArr.push(autoprefixer(conf));

  return postcss(postcssArr).process(content).css;
};