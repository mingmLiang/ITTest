/*
* @Author: mingming
* @Date:   2017-05-13 20:26:46
* @Last Modified by:   mingming
* @Last Modified time: 2017-05-13 21:01:49
*/

'use strict';
$(function(){
	var tag;
	//轮播项
	// 1.轮播图-轮播项-判断大小屏幕确定轮播项
	if($(window).width()>956){
		// 大屏幕
		tag='<div class="item active clearfix"><div class="kcw-left" style="background-image: url(./img/lnsf3.jpg);"><div class="cover"></div></div><img class="bigImg" src="img/lnsf1.jpg" alt="..."><div class="kcw-right"style="background-image: url(./img/lnsf2.jpg);"><div class="cover"></div></div></div><div class="item clearfix"><div class="kcw-left"style="background-image: url(./img/lnsf1.jpg);"><div class="cover"></div></div><img class="bigImg" src="img/lnsf2.jpg" alt="..."><div class="kcw-right"style="background-image: url(./img/lnsf3.jpg);"><div class="cover"></div></div></div><div class="item clearfix"><div class="kcw-left"style="background-image: url(./img/lnsf2.jpg);"><div class="cover"></div></div><img class="bigImg" src="img/lnsf3.jpg" alt="..."><div class="kcw-right"style="background-image: url(./img/lnsf1.jpg);"><div class="cover"></div></div></div>';// 大屏幕
	}else{
		// 小屏幕
		tag='<div class="carousel-inner" role="listbox"><div class="item active clearfix"><img src="img/lnsf1.jpg" alt="..."></div><div class="item clearfix"><img src="img/lnsf2.jpg" alt="..."></div><div class="item clearfix"><img src="img/lnsf3.jpg" alt="..."></div></div>';

	}
	$('.carousel-inner').html(tag);
});