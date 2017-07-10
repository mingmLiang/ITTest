/*
 * @Author: mingming
 * @Date:   2017-05-10 16:51:43
 * @Last Modified by:   mingming
 * @Last Modified time: 2017-05-19 11:09:39
 */

'use strict';
// 轮播图
//2.轮播图-轮播项-移动端手指左右滑动
$(function() {
	//1)获取手指在轮播图元素上的滑动方向（左右）
	//	手指触摸开始记录一下手指所在坐标的x坐标
	//	结束触摸一瞬间记录最后的手指所在x坐标
	//	获取界面上的轮播图组件
	var $carousels = $('.carousel');
	var startX;
	var endX;
	//偏移量超过30像素时,才确定为移动了
	var offset = 30;
	//注册滑动事件
	$carousels.on('touchstart', function(e) {
		startX = e.originalEvent.touches[0].clientX;
	});

	$carousels.on('touchmove', function(e) {
		//	无法获取,因为刚结束触摸的瞬间,对clientX已经没有记录,所以无法用touchend获取到clientX
		//最后得到的是离开瞬间的值
		endX = e.originalEvent.touches[0].clientX;
	});

	$carousels.on('touchend', function(e) {
		var distance = Math.abs(startX - endX);
		if (distance > offset) {
			//2)根据获得到的方向选择上一张或者下一张
			//	方案一:模拟用户点击事件
			//	方案二:使用bt（通过的原生的carousel的方法实现）
			//http://v3.bootcss.com/javascript/#carousel中的Methods
			$(this).carousel(startX > endX ? 'next' : 'prev');
		}
	});


// 模糊查找
	$('#searchBt').click(function() {
		$('#searchContent').html;
		$.ajax({
			type: "post",
			url: "data/login.json",
			data: {
				
			},
			dataType: "text",
			success: function(data) {
				
			},
			error: function(jqXHR) {
				console.log('搜索失败！请与管理员联系！');
			}
		});
	});
});