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
    console.log(event)
  }
  ,
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