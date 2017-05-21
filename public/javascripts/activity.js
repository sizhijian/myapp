//var script_ = '<script src="https://unpkg.com/vue@2.2.6/dist/vue.js"></script>';
//		$("head").before(script_)
$(function(){
	document.body.addEventListener("touchstart",function(){});
	FastClick.attach(document.body);
	//分享弹窗
	$("#share_trigger div").on("click", function() {
		$("#share_area").show();
	});
	$("#share_area .mask").on("click", function(e) {
		$("#share_area").hide();
	});
	// var footDom = '<footer class="footer"><nav class="fa"><a class="f1" id="index_home" href="index.html"><i class="icon-home"></i><p>首页</p></a> <a class="f1" id="index_cha" href="valuationIndex.html"><i class="justfont">估</i><p>查估价</p></a><a class="f1" id="index_bi" href="comporeIndex.html"><i class="justfont">比</i><p>比车价</p></a><a class="f1" id="index_bi" href="maintenance.html"><i class="justfont">维</i><p>查维保</p></a><a class="f1" id="index_mine" href="mine.html"><i class="icon-mine"></i><p>我</p></a></nav></footer>';
	// $("body").after(footDom);
	//1.133rem		
	var rem = $("html").css("font-size");
	rem = +(rem.substring(0,rem.indexOf("px")))*1.133;
	//通过侧边的字母定位品牌
	$("#getBrandByWord li").click(function(){
		var word_dom = $(this).attr("data-id"),
		scroll_dom = $(".brand .sub-title[data-scroll='" + word_dom + "']").offset()?$(".brand .sub-title[data-scroll='" + word_dom + "']").offset():null;
		if (!!scroll_dom) {
			$("body").animate({scrollTop:scroll_dom.top - rem},200);
			$(".hover-wrod").show().text(word_dom).fadeOut(300);
		}
		
		//
	});
	//选择品牌显示车系层
	$(".brand .hot-brand a , .brand a.item").click(function(){
		$(".series .sub-title").css("position","static");
		$(".series").show(300,function(){
			$(".series .sub-title").attr("data-mfx-top-position",rem).makeFixed();
		});
		$(".brand").hide(300);
	});
	//选择品牌显示车系层
	$(".series .item").click(function(){
		$(".series").hide(300);
		$(".yearmodel").show(300);
	});
	//返回到品牌层层
	$(".series .back").click(function(){
		$(".brand").show(3);
		$(".series").hide(300);
	});
	//返回到车系层
	$(".yearmodel .back").click(function(){
		$(".yearmodel").hide(300);
		$(".series").show(300);
	});
	//关闭选择车型所有层
	$(".brand .close, .wrap-select-car .mask").click(function(){
		$(".brand , .series , .yearmodel ,.mask ,.title").css({left:"100%"});
		setTimeout(function(){
			$(".wrap-select-car").hide()
		},300);
	});
	//打开选择车型所有层
	$("#carTypeChoose").click(function(){
		$(".wrap").css({"position": "fixed","height": "100%"});
		$(".wrap-select-car").show(function(){
			$(".mask").css({left:"0"});
			$(".brand, .series, .yearmodel ,.title").css({left:"18%"});
		});
	});
});
(function(a){function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(d.isDefaultPrevented())return;return b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.active),i.addClass(e.active),f},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getactivePane:function(){return i.eq(j)},getactiveTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){return h.unbind(e.event).removeClass(e.active),i.find("a[href^=#]").unbind("click.T"),f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){return b&&a(f).bind(c,b),f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){return f.click(b,a),a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.tools=a.tools||{version:"@VERSION"},a.tools.tabs={conf:{tabs:"a",active:"active",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(c)return;var f=this.getPanes().eq(b),g=this.getactivePane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}),a.fn.tabs=function(b,c){var d=this.data("tabs");return d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)}),c.api?d:this}})(jQuery)
