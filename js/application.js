

function test() {	
	$("#wraper").hide();
	$("#footer").hide();
	if(isSupportedBrowser()) {
	 $("#wraper").show();
	 $("#footer").show();	
	} else {
		browserNotSupported();
	}
}

function isSupportedBrowser() {

	return $.browser.webkit || 
		   $.browser.safari ||
		   $.browser.opera  ||
		   $.browser.mozilla
}

function browserNotSupported() {
	$("#wraper").remove();
	
	var div = "<div id='incorrect_browser'>" +
		"<p>本博客暂不支持您使用的浏览器,因为您使用的是非标准浏览器即所有基于IE内核的浏览器. 出于安全,性能和用户体验考虑，建议您使用如下标准浏览器！</p>"　+
		"<p> Currently your browser is not supported by this blog. Please use one of the following browser and try again!</p>"　+
		"<div><a href='http://www.google.com/chrome' class='chrome'　alt='Chrome' title='Google Chrome'>Google Chrome</a>"+
			  "<a href='http://www.mozilla.com/' class='firefox' alt='Firefox' title='Firefox'>Firefox</a>"+
			  "<a href='http://www.apple.com/safari/download/' class='safari' alt='Safari' title='Safari'>Safari</a>"+
			  "<a href='http://www.opera.com' class='opera' alt='Opera' title='Opera'>Opera</a>"+
		"</div></div>";
	
	$("body").append(div);
	
}


$(document).ready(

	function(){
	$('div.google-buzz').googleBuzz({
		username:'donnior'
		,n:5
		,show_n:0
		,info:''
		,show_source:0
	});
}

);
