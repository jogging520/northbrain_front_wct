import wepy from 'wepy'
import HintService from '@/shared/services/general/hint-service'
import CommonService from '@/shared/services/general/common-service'
let GeneralConstants = require('@/shared/constants/general/general-constants')

export default class HttpMixin extends wepy.mixin {
  static async request(method, url, params = {}, body = {}) {
    if (!url) {
      return null
    }

    HintService.loading()

    let header = CommonService.setHeader(url)
    let parameters = CommonService.setParams(params)

    let requestUrl = url.contain('?') ? '&' : '?' + parameters

    let res = await wepy.request({
      url: requestUrl,
      method: method,
      data: body,
      header: header
    })

    HintService.loaded()

    const code = res.statusCode

    if (code === 200) {
      return res.data
    }

    HintService.alert('网络错误')
    throw res.data
  }

  get(url, params = {}) {
    return this.request(GeneralConstants.CONSTANT_COMMON_HTTP_METHOD_GET, url, params, {})
  }

  post(url, params = {}, body) {
    return this.request(GeneralConstants.CONSTANT_COMMON_HTTP_METHOD_POST, url, params, body)
  }

  put(url, params = {}, body) {
    return this.request(GeneralConstants.CONSTANT_COMMON_HTTP_METHOD_PUT, url, params, body)
  }

  delete(url, params = {}, body) {
    return this.request(GeneralConstants.CONSTANT_COMMON_HTTP_METHOD_DELETE, url, params, body)
  }
}
