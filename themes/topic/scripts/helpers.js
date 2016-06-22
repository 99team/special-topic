'use strict';

var pathFn = require('path');
var _ = require('lodash');
var url = require('url');
var cheerio = require('cheerio');
var lunr = require('lunr');

hexo.extend.helper.register('top_menu', function(){
  var menu = this.theme.menu;
  var pathname = '/' + pathFn.basename(this.path);
  var result = '';
  var self = this;

  _.each(menu, function(path, title){
      if (pathname === path) {
        result += '<li class="active" role="presentation"><a href="' + self.url_for(path) + '">' + self.__('menu.' + title) + '</a></li>';
      } else {
        result += '<li role="presentation"><a href="' + self.url_for(path) + '">' + self.__('menu.' + title) + '</a></li>';
      }      
  });

  return result;
});