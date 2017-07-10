/*
 * @Author: mingming
 * @Date:   2017-05-16 12:43:38
 * @Last Modified by:   mingming
 * @Last Modified time: 2017-05-19 10:56:07
 */

'use strict';
hljs.initHighlightingOnLoad();
// 可编辑div
$("#editor").emoji({
    button: "#btn",
    showTab: false,
    animation: 'slide',
    icons: [{
        name: "QQ表情",
        path: "lib/jQuery-emoji-master/dist/img/qq/",
        maxNum: 91,
        excludeNums: [41, 45, 54],
        file: ".gif"
    }]
});

// ajax-留言区（点击实现评论、实现评论翻页）
// 1.点击实现评论
$(function() {
    $('#toTalk').click(tosendTalk);

    function tosendTalk(event, type) {
        var comment = $("#editor").html();
        var time = new Date().toLocaleString();
        if (window.sessionStorage.coursePlatform_login != 'success') {
            alert('请登录后评论！');
        } else {
            $.ajax({
                type: "post",
                url: "data/login.json",
                data: {
                    comment: comment,
                    time: time,
                    username: window.sessionStorage.coursePlatform_name
                },
                dataType: "text",
                success: function(data) {
                    var data = JSON.parse(data);
                    if (data.login == 1) {
                        var tag = ' <div class="kcwItem clearfix"><i class="glyphicon glyphicon-user"></i><p class="name">' + window.sessionStorage.coursePlatform_name + '</p><p class="userTalk">' + comment + '</p><p class="time">' + time + '</p></div>';
                        $('.oldTallk h3').after(tag);
                        alert('评论成功！');
                    } else {
                        console.log('评论失败！请与管理员联系！');
                    }
                },
                error: function(jqXHR) {
                    console.log('评论失败！请与管理员联系！');
                }
            });
        }

    }
});
// 2.实现评论翻页
// 记录需要翻到那一页
// var pageNum = 1;

// 记录总页数
// var pageSort = 9999;
// $('.pagination li').click(function() {
//     if ($(this).find('a').html() > 0) {
//         pageNum = $(this).find('a').html();
//     } else if ($(this).find('a').html() == '»') {
//         if (pageNum < pageSort) {
//             pageNum++;
//         }

//     } else {
//         if (pageNum > 1) {
//             pageNum--;
//         }
//     }
//     $.ajax({
//         type: "post",
//         url: "data/talk.json",
//         data: {
//             pageNum: pageNum
//         },
//         dataType: "text",
//         success: function(data) {
//             // 需要返回中总一页数
//             var data = JSON.parse(data);
//             pageSort=data.pageSort;
//             if (data.login == 1) {

//             } else {
//                 console.log('评论翻页失败！请与管理员联系！');
//             }
//         },
//         error: function(jqXHR) {
//             console.log('评论翻页失败！请与管理员联系！');
//         }
//     });
//     // 取消a链接的默认行为
//     return false;
// });