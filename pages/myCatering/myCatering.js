// pages/myCatering/myCatering.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  deleteCatering: function(event){
    console.log(event)
    const id = event.currentTarget.dataset.id
    wx.showModal({
      title: 'Delete',
      content: 'Are you sure?',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: `http://jiubar.herokuapp.com/api/v1/caterings/${id}/`,
            method: 'DELETE',
            success(res){
              console.log(res)
              wx.navigateTo({
                url: '/pages/myCatering/myCatering',
              })
      
            }
          })
        } else if (res.cancel) {
          console.log('"Cancel" is tapped')
        }
      }
    })
//// modal ends    
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    const id = getApp().globalData.user.id
    console.log(id)
    let page = this
    wx.request({
      url: `http://jiubar.herokuapp.com/api/v1/users/${id}/caterings`,
      method: 'GET',
      success(res) {
        console.log(res)
        const caterings = res.data.caterings
        page.setData({caterings})

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