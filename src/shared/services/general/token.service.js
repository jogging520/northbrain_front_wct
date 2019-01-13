import CacheService from '@/shared/services/general/cache.service'
let GeneralConstants = require('@/shared/constants/general/general.constants')

const get = () => {
  return CacheService.get(GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_TOKEN)
}

const set = (token) => {
  if (token) {
    return CacheService.set(GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_TOKEN, token)
  }

  return null
}

module.exports = {
  get,
  set
}
