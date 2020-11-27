// pages/myReservation/myReservation.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const id = getApp().globalData.user.id
    console.log(id)
    let page = this
    wx.request({
      url: 'http://jiubar.herokuapp.com/api/v1/users/2/reservations',
      method: 'GET',
      success(res){
        console.log(res.data)
        const reservations = res.data
        for (let index = 0; index < reservations.length; index++) {
          let element = reservations[index];
          element.time = new Date(element.time).toLocaleTimeString('it-IT')
          element.end_time = new Date(element.end_time).toLocaleTimeString('it-IT')
        }
        page.setData({reservations})
      }
    })

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