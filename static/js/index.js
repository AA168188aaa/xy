var downLoadUrl = "https://partnerdownload.xunyou.com/specver/SEM/XunYou307657423.exe";
$(function () {
  var s = $G("s");
  if (s != "") {
    if (s.indexOf("baidu") >= 0) {
      s = s.substring(5);
    } else {
      s = s.substring(2);
    }
    downLoadUrl =
      "https://partnerdownload.xunyou.com/specver/SEM/XunYou" + s + ".exe";
    $(".download a,.download-1 a").attr("href", downLoadUrl);
  }
  var full = $("#main").fullpage({
    sectionsColor: ["#000", "#000", "#000", "#121c25"],
    anchors: ["page1", "page2", "page3", "page4"],
    fitToSection: false,
    pageInfo: null,
    afterRender: function () {},
    onLeave: function (index, nextIndex, direction) {
      if (index == 2 || index == 3 || index == 4) {
        $(".download-tips").removeClass("active");
      }
    },
    afterLoad: function (anchorLink, index) {
      if (index == 2 || index == 3 || index == 4) {
        $(".download-tips").addClass("active");
      } else {
        $(".download-tips").removeClass("active");
      }
    },
  });
  layui.use(["carousel", "layer"], function () {
    var carousel = layui.carousel;
    var layer = layui.layer;
    // 	//建造实例
    carousel.render({
      elem: "#test1",
      interval: "2500",
      width: "1203px", //设置容器宽度
      height: "494px", //设置容器宽度
      arrow: "none", //始终显示箭头
      indicator: "outside", //切换动画方式
      // 	});
    });

    setTimeout(function () {
      layer.open({
        type: 1,
        area: ["809px", "528px"],
        title: false,
        closeBtn: 0,
        shadeClose: true,
        shade: [0.7],
        skin: "pop_skin",
        content:
          '<div class="pop_box">\n  <div class="closeBtn" onclick="closePop()"></div>\n  <a href="' +
          downLoadUrl +
          '" target="_blank">\n    <img src="https://image.xunyou.com/paletteTg/20220530/pop.png" >\n  </a>\n</div>',
      });
    }, 0);
  });
});

function closePop() {
  layui.layer.closeAll();
}

function $G() {
  var Url = window.location.href;
  var u,
    g,
    StrBack = "";
  if (arguments[arguments.length - 1] == "#") u = Url.split("#");
  else u = Url.split("?");
  if (u.length == 1) g = "";
  else g = u[1];

  if (g != "") {
    gg = g.split("&");
    var MaxI = gg.length;
    str = arguments[0] + "=";
    for (xm = 0; xm < MaxI; xm++) {
      if (gg[xm].indexOf(str) == 0) {
        StrBack = gg[xm].replace(str, "");
        break;
      }
    }
  }
  return StrBack;
}
