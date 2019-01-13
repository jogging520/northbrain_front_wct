import TokenService from '@/shared/services/general/token.service'
import CacheService from '@/shared/services/general/cache.service'
let GeneralConstants = require('@/shared/constants/general/general.constants')

export default class CommonService {
  static setHeader(url) {
    if (url == null || url === '') {
      return null
    }

    let headers = {}

    if (url.indexOf(GeneralConstants.CONSTANT_COMMON_ROUTE_PATH_STORAGE) === -1) {
      headers[GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_CONTENT_TYPE] =
        GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_CONTENT_TYPE_VALUE
    } else {
      headers[GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_CONTENT_TYPE] =
        GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_CONTENT_TYPE_FILE_VALUE
    }

    headers[GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_ACCEPT] = GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_ACCEPT_VALUE

    headers[GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_API_KEY] = GeneralConstants.CONSTANT_COMMON_HTTP_HEADER_API_KEY_VALUE

    let token = TokenService.get()

    if (token) {
      headers[GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_TOKEN] = token.jwt
    }

    return headers
  }

  static setParams(params) {
    let parameters = {}
    let serialNo = CommonService.getSerialNo()

    if (serialNo) {
      parameters[GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_SERIAL_NO] = serialNo
    }

    parameters[GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_APP_TYPE] =
      GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_APP_TYPE_VALUE

    parameters[GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_CATEGORY] =
      GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_CATEGORY_VALUE

    let token = TokenService.getToken()

    if (token && token.session) {
      parameters[GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_SESSION] = token.session
    }

    if (token && token.user) {
      parameters[GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_USER] = token.user
    }

    return CommonService.encodeURI(parameters)
  }

  static getSerialNo() {
    return CacheService.get(GeneralConstants.CONSTANT_COMMON_CACHE_SERIAL_NO)
  }

  static encodeURI(params) {
    let ret = []
    for (let p in params) {
      ret.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]))
    }

    return ret.join('&')
  }
}
