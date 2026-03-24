// 对 Next 主题进行定制

// 函数: html 中去掉 某 tag 最后那一次出现
var rmLastElm = function(text, selector) {
    var wrapped = $("<div>" + text + "</div>");
    wrapped.find(selector).last().remove();
    return wrapped.html();
}
// 弹出 tip 显示 脚注
var $fRef = $(".footnoteRef");
for(let i=0; i<$fRef.length; i++) {
	var sup = $fRef.children("sup")[i];		//work reliably as long as there's exactly one sup per footnotRef
//	var sup = $fRef[i].children("sup");		//a classic Dom Element, so it doesn't have any children method
	sup.onmouseover = function(event) {
		$('.footnoteTip').remove();
		var pTip = document.createElement('div');
		pTip.className = 'footnoteTip';		// CSS
		pTip.innerHTML = rmLastElm(document.getElementById($fRef[i].getAttribute("href").substring(1)).innerHTML,"a");
		document.body.appendChild(pTip);

		var posLeft = event.pageX - 180;
		if (posLeft<0) posLeft = 20;
		var posTop = event.pageY + 20;
		var od = $('.footnoteTip');
		var oH = od.outerHeight();
		var oW = od.outerWidth();
		if(posTop + oH - window.pageYOffset > $(window).height()) 	posTop = posTop - oH -40;
		if (posLeft + oW > $(window).width()) posLeft = $(window).width() - oW -20;	//NexT.Mist pageXOffset=0
		pTip.style.left = posLeft + 'px';
		pTip.style.top = posTop + 'px';

	};

	sup.onmouseout = function(event) {
		$('.footnoteTip').remove();
	};
}



