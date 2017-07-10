/*
 * @Author: mingming
 * @Date:   2017-05-14 15:31:57
 * @Last Modified by:   mingming
 * @Last Modified time: 2017-05-14 15:45:15
 */

'use strict';
$(function() {
	var tag=getQueryStringArgs().tag;
	if(tag==undefined){
		tag=0;
	}
	$('.learnContent .nav li').removeClass('active');
	$($('.learnContent .nav li')[tag]).addClass('active');
	$('.learnContent .tab-content .tab-pane').removeClass('active');
	$($('.learnContent .tab-content .tab-pane')[tag]).addClass('active').addClass('in');

});


// 分析查询字符串learn.html?tag=**
function getQueryStringArgs() {
	// 取得查询字符串并去掉开头问号
	var qs = (location.search.length > 0 ? location.search.substring(1) : " "),

		// 保存数据的对象
		args = {},

		// 取得每一项
		items = qs.length ? qs.split('&') : [],
		item = null,
		name = null,
		value = null,

		i = 0,
		len = items.length;

	// 逐个将每一项添加到args对象中
	for (i = 0; i < len; i++) {
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
}

