$(function(){
	try {
		if (window.console && window.console.log) {
			console.log("\n\n");
			console.log("这里有一群追逐梦想的人,他们都有一颗公益的心，我在php中文网，等你来！\n\n");
			console.log("如何让我遇见你，在你最美的时候\n加入php中文网，让我们一起探讨技术的更高点！\n");
			console.log("请将简历发送至 %c admin@php.cn（邮件标题请以姓吿-应聘XX职位-来自console命名）", "color:#0b8");
			console.log("有梦想，才能改变世界！\n")
		}
	} catch(e) {}
	layui.use(["layer", "form", "element", "util"],function() {
		$(document).on("api.loginpopbox", function (e, callback) {
			layer.open({
				type: 2,
				title: false,
				shadeClose: false,
				closeBtn: true,
				shade: 0.5,
				area: ["430px", "510px"],
				content: "/account/login.html",
				cancel: function (i, l) {
					parent.window.location.reload();
				}
			});
		});
		$("#login,#reg").click(function () {
			$(document).trigger("api.loginpopbox")
		});
	});
});
// 搜索
function searchs(that){
  var key_words = $.trim($(that).prev('#key_words').val());
  if(key_words==''){
    layer.msg('请输入关键词',{icon:2,offset:'t',anim:6});
    return false;
  } 
  window.location.href="/xiazai/search/?k="+key_words;
}
// 回车搜索
function keyup(that){
  if(event.keyCode==13){
      var key_words = $.trim($(that).val());
	  if(key_words==''){
	    layer.msg('请输入关键词',{icon:2,offset:'t',anim:6});
	    return false;
	  } 
	  window.location.href="/xiazai/search/?k="+key_words;
      return false;                               
  }
}

function reply_second_content(obj){
	if($('#login').length > 0){
		layer.msg('请先登录');
		return false;
	}
	var ele = $(obj).parent('span').next('.reply_second_content');
	if(ele.is('.on')){
		ele.removeClass('on');
		ele.hide();
	}else{
		ele.addClass('on');
		ele.show();
	}	
}
function comment_public_praise(obj){
	var id = $(obj).data('id');
	$.post('/xiazai/comment_public_praise/',{id:id},function(result){
		if(result.code == 1){
			layer.msg(result.msg,{icon:1,time:1000},function(){
				$(obj).find('.comment-praise-count').html('+'+result.count);
			});
		}else{
			layer.msg(result.msg,{icon:2});
		}
	},'json');
}
function DownLoadData(url){
	if(!url){
		layer.msg('下载已失效');return;
	}
	if(is_weixin()){
		layer.msg('微信内无法下载，请在普通浏览器打开');return;
	}
	window.location.href = url;
}
function LoginTips(){
  layer.alert('请先登录',{icon: 2,skin: 'layui-layer-molv',closeBtn: 0,anim: 4},function(){
  	window.location.href = '/login.html?backurl='+window.location.href;
  });
}
function CoursesTips(){
  layer.alert('下载失败，内部课件暂不对外开放',{
	icon: 2,
	skin: 'layui-layer-molv'
	,closeBtn: 0
	,anim: 4 //动画类型
  })
}
function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}