//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    setTimeoutArray: [],
    interval: undefined, // 动画定时器
    imgList: [{
      content: "愿你做自己并坦然欢喜",
      img_url: "../../images/20120607232.jpg"
    }, {
        content: "硕果累累",
        img_url: "../../images/20120617247.jpg"
      }, {
        content: "美丽",
        img_url: "../../images/20120829429.jpg"
      }, {
        content: "愿你做自己并坦然欢喜",
        img_url: "../../images/20130223579.jpg"
      }, {
        content: "一朵小花花送给你",
        img_url: "../../images/20130303596.jpg"
      }, {
        content: "",
        img_url: "../../images/20130303597.jpg"
      }, {
        content: "做最美的自己",
        img_url: "../../images/20130303598.jpg"
      }, {
        content: "",
        img_url: "../../images/20130428671.jpg"
      }, {
        content: "",
        img_url: "../../images/20130505684.jpg"
      }],
    currentImgUrl: '',
    currentText: '',
    pageIndex: 0,
    onReady: false
  },
  onLoad: function() {
    var that = this
    // 清楚定时器
    clearInterval(that.data.interval)
    that.data.setTimeoutArray.forEach(function (t) {
      clearTimeout(t)
    })

    // 执行播放
    that.animationFun()
    that.data.interval = setInterval(that.animationFun, that.data.imgList.length * 5000)
  },
  animationFun: function () {
    const that = this;
    let list = that.data.imgList;
    for (let i = 0, len = list.length; i < len; i++) {
      that.data.setTimeoutArray.push(setTimeout(() => {
        that.setData({
          currentText: list[i].content,
          onReady: true,
          currentImgUrl: list[i].img_url,
          pageIndex: i % 9
        })
      }, i * 5000))
    }
  }
})