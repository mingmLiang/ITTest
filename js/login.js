/*
 * @Author: mingming
 * @Date:   2017-03-18 00:12:32
 * @Last Modified by:   mingming
 * @Last Modified time: 2017-05-14 14:56:47
 */
'use strict';
$(function() {
	//	会话sessionStorage
		$('#toLogin').click(function() {
			//验证用户名密码
			var username = $('#username').val();
			var userPassword = $('#userPassword').val();
			$.ajax({
				type: "POST",
				url: "data/login.json",
				data: {
					username: username,
					userPassword: userPassword
				},
				dataType: "text",
				success: function(data) {
					var data = JSON.parse(data);
					// 用户名、密码验证正确
					if (data.login == 1) {
						// 记录用户名以及标志登录成功
						window.sessionStorage.coursePlatform_login = 'success';
						window.sessionStorage.coursePlatform_name = username;
						// 登陆成功，回退到之前页面
						history.go(-1);

					}
					// 用户名、密码验证不正确
					else {
						alert('用户名或密码不正确！');
					}
				},
				error: function(jqXHR) {
					alert('失败');
					console.log("发生错误：" + jqXHR.status);
				}
			});
		});
});