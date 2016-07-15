<div class="panel panel-info">
    <div class="panel-heading">
        <h3 class="panel-title">简单加了个入口，无视样式...</h3>
    </div>
    <div class="panel-body">
        {% for cate in site.categories.toArray() %}
        <ul class="nav nav-pills">
          <li role="presentation" class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              {{ cate.name }}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
                {{ top_menu(cate.name) }}
            </ul>
          </li>
        </ul>    
        {% endfor %}
    </div>    
</div>