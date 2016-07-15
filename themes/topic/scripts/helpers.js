'use strict';

var pathFn = require('path');
var _ = require('lodash');
var url = require('url');
var cheerio = require('cheerio');
var lunr = require('lunr');

// 文章页导航
hexo.extend.helper.register('top_menu', function(category){
  var menu = this.theme.menu[category];
  var pathname = '/' + pathFn.basename(this.path);
  var result = '';
  var self = this;

  _.each(menu, function(path, title){
    //path -> guide/css.html
    //pathname -> /css.html
    if (path.indexOf(pathname) !== -1) {
      result += '<li class="active" role="presentation"><a href="' + self.url_for(path) + '">' + self.__('menu.' + category +'.' + title) + '</a></li>';
    } else {
      result += '<li role="presentation"><a href="' + self.url_for(path) + '">' + self.__('menu.' + category +'.' + title) + '</a></li>';
    }      
  });

  return result;
});