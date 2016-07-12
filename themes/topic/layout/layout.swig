<!DOCTYPE html>
<html lang="{{ page.lang }}">
  {{ partial('partial/head') }}
  <body data-spy="scroll" data-target=".sidebar">
    <!-- banner -->
    <div class="container-fluid" id="#top">
      <div class="row">
        <div class="col-md-12 banner-full">
          <h1>{{ page.title }}</h1>
        </div>
      </div>
    </div>
    <!-- /banner -->
    <!-- tab nav -->
    {{ top_menu() }}
    <!-- {% for link in theme.menu.guide %}
      <a href="{{ link }}">{{ __(loop.key) }}</a>
    {% endfor %} -->

<!--     {% for cate in page.categories.toArray() %}
      {{ cate.name }}
      
    {% endfor %} -->

    <!-- {% if site.posts.length > 0 %}
      {% for postItem in site.posts.toArray() %}
      <a href="{{ postItem.path }}">{{ postItem.title }}</a>
      {% endfor %}
    {% endif %}  -->
    <!-- tab nav -->
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="docs-section">{{ body }}</div>
        </div>
        <div class="col-md-3 hidden-print hidden-xs hidden-sm sidebar-box">
          <div class="sidebar" data-spy="affix" data-offset-top="300">
            {{ partial('partial/sidebar') }}
          </div>
        </div>
      </div>
    </div>
    {{ partial('partial/after_footer') }}
  </body>
</html>
