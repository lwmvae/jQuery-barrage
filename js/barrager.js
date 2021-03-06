(function($) {

    $.fn.barrager = function(barrage) {

        var colorArr = ['#d00021', '#dc5400', '#fff', '#33bc00', '#9bd100', '#e83a55', '#e8687c'];
        var num = Math.floor(Math.random() * colorArr.length);
        // 字体颜色随机
        var textColor = colorArr[num];
        // 字体大小随机
        var fontSize = 14 + 3 * num;
        // 弹幕移动速度随机
        var speed = 1 + num;

        var time = new Date().getTime();
        var barrager_id = 'barrage_' + time;
        var id = '#' + barrager_id;

        var div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));

        var window_height = $(window).height() - 100;
        var bottom = Math.floor(Math.random() * window_height + 40);
        div_barrager.css("bottom", bottom + "px");

        div_barrager_box = $("<div class='barrage_box cl'></div>").appendTo(div_barrager);
        div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");
        var img = $("<img src='" + barrage.img + "' >").appendTo(id + " .barrage_box .portrait");

        var infoHtml = barrage.info.trim().replace(/\n/g, '<br/>');
        var info = jEmoji.unifiedToHTML(infoHtml);

        div_barrager_box.append(" <div class='z p'></div>");
        var content = $("<span>" + info + "</span>").appendTo(id + " .barrage_box .p");
        content.css({
            'color': textColor,
            'fontSize': fontSize + 'px'
        });


        var i = 0;
        div_barrager.css('margin-right', i);


        var looper = setInterval(barrager, speed);

        function barrager() {
            var window_width = $(window).width() + 500;
            if (i < window_width) {
                i += 1;
                $(id).css('margin-right', i);
            } else {
                $(id).remove();
                return false;
            }
        }

        

    }

})(jQuery);