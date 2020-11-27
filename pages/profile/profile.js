// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    loggedIn: false
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
    console.log(this.data.userInfo)
    const userData = this.data.userInfo
    const id = app.globalData.user.id
    console.log(id)
    console.log("------")
    let page = this
    wx.request({
      url: `http://jiubar.herokuapp.com/api/v1/users/${id}`,
      data:{name:userData.nickName, avatar: userData.avatarUrl},
      method: 'PUT',
      success(res){
        console.log(res.data)
        const userInfo = res.data
        page.setData(userInfo)
        console.log(getApp().globalData.user)
        console.log("-------------")
        getApp().globalData.user = userInfo.user
        console.log(getApp().globalData.user)
      }
    }),
    this.setData({
      loggedIn: true
    })
  },

switchToCaterings: function(event) {
  console.log(event)
  const id = event.currentTarget.dataset.id
  console.log(id)
  wx.redirectTo({
    url: `/pages/myCatering/myCatering?id=${id}`,
  })

},
switchToReservations: function(event) {
  console.log(event)
  const id = event.currentTarget.dataset.id
  wx.navigateTo({
    url: `/pages/myReservation/myReservation?id=${id}`,
  })
},


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('profile page', getApp().globalData.user)
    let page = this
    const user = getApp().globalData.user
    page.setData(user)
    // const id = app.globalData.user.id
    // wx.request({
    //   url: `http://jiubar.herokuapp.com/api/v1/users/${id}`,
    //   success(res){
    //     console.log(res.data)
    //     const userData = res.data
    //     console.log("-----")
    //     page.setData({userData})
    //   }
    // })
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