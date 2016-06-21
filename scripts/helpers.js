'use strict';

var pathFn = require('path');
var _ = require('lodash');
var url = require('url');
var cheerio = require('cheerio');
var lunr = require('lunr');

var localizedPath = ['docs', 'api'];

function startsWith(str, start){
  return str.substring(0, start.length) === start;
}

hexo.extend.helper.register('page_nav', function(){
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var list = {};
  var prefix = 'sidebar.' + type + '.';

  for (var i in sidebar){
    for (var j in sidebar[i]){
      list[sidebar[i][j]] = j;
    }
  }

  var keys = Object.keys(list);
  var index = keys.indexOf(path);
  var result = '';

  if (index > 0){
    result += '<a href="' + keys[index - 1] + '" class="article-footer-prev" title="' + this.__(prefix + list[keys[index - 1]]) + '">' +
      '<i class="fa fa-chevron-left"></i><span>' + this.__('page.prev') + '</span></a>';
  }

  if (index < keys.length - 1){
    result += '<a href="' + keys[index + 1] + '" class="article-footer-next" title="' + this.__(prefix + list[keys[index + 1]]) + '">' +
      '<span>' + this.__('page.next') + '</span><i class="fa fa-chevron-right"></i></a>';
  }

  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className){
  var type = this.page.canonical_path.split('/')[0];
  var sidebar = this.site.data.sidebar[type];
  var path = pathFn.basename(this.path);
  var result = '';
  var self = this;
  var prefix = 'sidebar.' + type + '.';

  _.each(sidebar, function(menu, title){
    result += '<strong class="' + className + '-title">' + self.__(prefix + title) + '</strong>';

    _.each(menu, function(link, text){
      var itemClass = className + '-link';
      if (link === path) itemClass += ' current';

      result += '<a href="' + link + '" class="' + itemClass + '">' + self.__(prefix + text) + '</a>';
    })
  });

  return result;
});

hexo.extend.helper.register('top_menu', function(){
  var menu = this.config.menu;
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

hexo.extend.helper.register('canonical_url', function(lang){
  var path = this.page.canonical_path;
  if (lang && lang !== 'zh-cn') path = lang + '/' + path;

  return this.config.url + '/' + path;
});

hexo.extend.helper.register('canonical_path_for_nav', function(){
  var path = this.page.canonical_path;

  if (startsWith(path, 'docs/') || startsWith(path, 'api/')){
    return path;
  } else {
    return '';
  }
});

hexo.extend.helper.register('lang_name', function(lang){
  var data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('disqus_lang', function(){
  var lang = this.page.lang;
  var data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});