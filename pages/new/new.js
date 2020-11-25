// pages/new/new.js
Page({

  /**
   * Page initial data
   */
  data: {
    btnText: "Create",
    pickerHidden: true,
    chosen: ''
  },
  formSubmit: function(event) {
    console.log('form发生了submit事件，携带数据为：', event.detail.value)
    console.log(event)
    console.log("+++++")

    let title = event.detail.value.title;
    console.log(title)
    let description = event.detail.value.description;
    let price = event.detail.value.price;
    let address = event.detail.value.address;
    let user_id = getApp().globalData.user.id;

    let catering = {
      title: title,
      description: description,
      price: price,
      address: address,
      user_id: user_id
    }

    console.log("------")

    console.log(catering)

    console.log("------")


    wx.request({
      url: `http://localhost:3000/api/v1/caterings`,
      method: 'POST',
      data: catering,
      success(res) {
        // redirect to index page when done
        console.log(res);
        wx.showToast({
          title: 'Testt',
        })
        wx.reLaunch({
          url: '/pages/index/index'
        });
      }
    });
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
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
  },

  btnclick: function() {
  this.setData()
  },

  switchToIndex: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
})
