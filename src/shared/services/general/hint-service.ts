import wepy from 'wepy';

export class HintService {
  constructor() {
  }

  static loading(title: string = '加载中') {
    wepy.showLoading({
      title: title,
      mask: true,
      duration: 1000
    });
  }

  static loaded() {
    wepy.hideLoading();
  }
}
