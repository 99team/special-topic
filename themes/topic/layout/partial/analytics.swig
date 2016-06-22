{% if theme.analytics.baidu %}
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + "//hm.baidu.com/hm.js?{{ theme.analytics.baidu }}";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
{% endif %}