//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe: function () {
    this.setData({ text: "" })
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },


  search: function(event) {
    console.log(event.detail.value)
    let page = this
    const query = event.detail.value
    if (query.length > 0) {
    wx.request({
      url: `http://jiubar.herokuapp.com/api/v1/caterings?query=${query}`,
      success(res) {
        console.log('success?', res)
        const caterings = res.data.caterings
        page.setData({caterings})
      }
    })} else {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  },

  switchToShow: function(event) {
    const id = event.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function () {
    const page = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
 // Here is where you do the api call for all the caterings
    wx.request({
      url: 'http://jiubar.herokuapp.com/api/v1/caterings',
      method: 'GET',
      success(res) {
        console.log(res)
        const caterings = res.data
        page.setData({caterings})

      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
