/*
 * @Author: mingming
 * @Date:   2017-05-14 14:42:51
 * @Last Modified by:   mingming
 * @Last Modified time: 2017-05-18 16:30:21
 */

'use strict';



$(function() {
	// 4.用户登录-判断是否是登录状态（获取用户名等信息）
	if (window.sessionStorage.coursePlatform_login == 'success') {
		var tag='<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+window.sessionStorage.coursePlatform_name+' <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="userInformation.html">个人中心</a></li><li id="toCloseUser"><a href="#">注销</a></li></ul></li>';
		$('#kcwNav').html(tag);
		// 留言中心
       $('.userName').html(window.sessionStorage.coursePlatform_name);
	}
	// 3.用户登录-注销
	$('#toCloseUser').click(function() {
		window.sessionStorage.coursePlatform_login = 'false';
		window.sessionStorage.coursePlatform_name = '';
		var tag=' <li><a href="login.html">登录</a></li><li><a href="login.html">注册</a></li>';
		$('#kcwNav').html(tag);
		$('.userName').html('<span class="tips">请登录后评论</span>');
	});
});