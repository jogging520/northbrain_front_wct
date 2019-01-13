import wepy from 'wepy'
let GeneralConstants = require('@/shared/constants/general/general.constants')

const set = (key, value) => {
  wepy.setStorageSync(GeneralConstants.CONSTANT_COMMON_APPLICATION_NAME + key, value)
}

const get = (key) => {
  return wepy.getStorageSync(GeneralConstants.CONSTANT_COMMON_APPLICATION_NAME + key)
}

module.exports = {
  set,
  get
}
