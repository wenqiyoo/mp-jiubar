// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
    console.log(this.data.userInfo)
    const userData = this.data.userInfo
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.user.id}`,
      data:{name:userData.nickName, avatar: userData.avatarUrl},
      method: 'PUT',
      success(res){
        console.log(res)
      }
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})