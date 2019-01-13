import wepy from 'wepy'

export default class HintService {
  constructor() {
    this.isLoading = false
  }

  static loading(title = '加载中') {
    if (HintService.isLoading) {
      return
    }

    HintService.isLoading = true

    wepy.showLoading({
      title: title,
      mask: true
    })
  }

  static loaded() {
    if (HintService.isLoading) {
      HintService.isLoading = false
      wepy.hideLoading()
    }
  }

  static alert(title) {
    wepy.showToast({
      title: title,
      image: '@/assets/images/alert.png',
      mask: true,
      duration: 1500
    })
  }
}

HintService.isLoading = false
