function tourl(obj) {
      var id = document.getElementById("id").value;
      var token = document.getElementById("token").value;
      var sub = document.getElementById("sub").value;
      var domain = document.getElementById("domain").value;
      var ip = document.getElementById("ip").value;
      var line = document.getElementById("line").value;
      var type = document.getElementById("type").value;
      login_token = '?id=' + id + '&secret=' + token;
      document.getElementById('url_0').value = login_token+isnull(sub,'&record=')+isnull(domain,'&domain=')+isnull(ip,'&ip=')+isnull(line,'&line=')+isnull(type,'&type=');
      document.getElementById('url_1').value = login_token+isnull(sub,'&record=')+isnull(domain,'&domain=')+isnull(line,'&line=')+isnull(type,'&type=');
      document.getElementById('url_2').value = 'https://api.masktt.com/aliddns/'+login_token+isnull(sub,'&record=')+isnull(domain,'&domain=')+isnull(ip,'&ip=')+isnull(line,'&line=')+isnull(type,'&type=');
      document.getElementById('url_3').value = 'https://api.masktt.com/aliddns/'+login_token+isnull(sub,'&record=')+isnull(domain,'&domain=')+isnull(line,'&line=')+isnull(type,'&type=');
    }
    function isnull(val,data) {
      var str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;
      if (str == '' || str == undefined || str == null) {
          return '';
      } else {
        return data + val;
      }
    }
    function copyUrl(id) {
        var Url=document.getElementById('url_'+id);
        Url.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("复制成功！");
    }
    function tolink(id) {
        var Url=document.getElementById('url_'+id);
        window.open(Url.value);
    }