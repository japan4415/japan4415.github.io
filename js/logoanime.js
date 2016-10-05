$(function() {
    $(window).load(function() {
        var doc   = document.getElementById("logo").contentDocument;
        var $path = $(doc).find("path");

        // pathの長さをcssにセットする関数
        function setPathLengthToStyle($obj) {
            var len;
            var arr = [];
            Array.prototype.slice.call($obj).forEach(function(path, i) {
                arr.push(path);
                len = arr[i].getTotalLength() + 30 + 1 | 0; // +30は、Firefox対策。+1 | 0 は小数点切り上げ
                arr[i].style.strokeDasharray  = len;
                arr[i].style.strokeDashoffset = len;
            });
        }

        // CSSの設定
        $path.css({
            stroke      : "#4aa3df",
            fill        : "none",
            strokeWidth : 1
            // strokeDasharray, strokeDashoffsetは setPathLengthToStyle()で設定
        });
        setPathLengthToStyle($path);

        // アニメーション描画
        $path
             .velocity({ strokeDashoffset : 0 }, 3000 , "swing")
             .velocity({ fill: "#4aa3df" }, 1000 , "swing");
    });
});