const date = new Date()
const years = []
const months = []
const days = []
const time = []

for (let i = 2020; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}

for (let i = 1 ; i <= 24; i++) {
  time.push(i)
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
  },
  bindChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },

  formSubmit: function(event) {
    const data = event.detail.value
    console.log(data, this.options.id)
    const user_id = getApp().globalData.user.id
    console.log(user_id)

    let date = data.date
    let time = data.startTime
    let endTime = data.endTime
    let comments = data.description
    let catering_id = Number.parseInt(this.options.id,10)
    let userInfo = user_id

    let reservation = {
      date: date,
      time: time,
      end_time: endTime,
      comments: comments,
      catering_id: catering_id,
      user_id: userInfo
    }
    console.log(reservation)
    wx.request({
      url: `http://jiubar.herokuapp.com/api/v1/caterings/${catering_id}/reservations/`,
      data: reservation,
      method: 'POST',
      success(res) {
        console.log(res)

        wx.switchTab({
          url: '/pages/profile/profile',
        })
      }

    })
  },
  bindTimeChange1: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      startTime: e.detail.value
    })
  },
  bindTimeChange2: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      endTime: e.detail.value
    })
  },
  bindDateChange: function(event) {
    console.log('pickerA selection change is sent, carrying the value ', event.detail.value)
    this.setData({
      date: event.detail.value
    })
  }
})