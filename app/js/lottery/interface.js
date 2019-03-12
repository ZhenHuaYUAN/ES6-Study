import $ from 'jquery'

class Interface {
  // 获取遗漏号码数据  issue当前期号
  getOmit(issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOmit(res.data)
          resolve.call(self, res)
        },
        error: function (res) {
          reject.call(err)
        }
      })
    })
  }
  // 获得开奖号码数据
  getOpenCode(issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data)
          resolve.call(self, res)
        },
        error: function (res) {
          reject.call(err)
        }
      })
    })
  }
  // 获取当前状态
  getState(issue) {
    let self = this
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          resolve.call(self, res)
        },
        error: function (res) {
          reject.call(err)
        }
      })
    })
  }
}

export default Interface