(function() {
    var hm = document.createElement("script");
    hm.type = 'text/javascript';
    hm.onload = callback;
    hm.src = "https://tj.xunyou.com/tj-new-sdk/dist/tj.min.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);

    function $G(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        };
        return null;
    }

    function callback() {
        _xytj && _xytj.init();
        _xytj && _xytj.track_event("vs_sem_page", {
            x_feature: $G('salesid') || '',
            x_content: document.getElementsByTagName('meta')['description']['content']
        })
    }
})()