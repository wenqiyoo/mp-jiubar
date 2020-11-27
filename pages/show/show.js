// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  makeCall: function(){
    wx.makePhoneCall({
      phoneNumber: '13818432014'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    const id = options.id
    let page = this
    wx.request({
      url: `http://jiubar.herokuapp.com/api/v1/caterings/${id}`,
      method: 'GET',
      success(res){
        console.log(res)
        const content = res.data
        console.log(content)
        page.setData(content)
      }
    })

  },
gotobooking: function(event){
  console.log(event)
  const id = event.currentTarget.dataset.id
  wx.navigateTo({
    url: `/pages/booking/booking?id=${id}`,
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