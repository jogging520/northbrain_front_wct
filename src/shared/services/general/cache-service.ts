import wepy from 'wepy';
import * as GeneralConstants from "shared/constants/general/general-constants";

export class CacheService {
  static set(key, value) {
    wepy.setStorageSync(GeneralConstants.CONSTANT_COMMON_APPLICATION_NAME + key, value);
  }

  static get(key): any {
    return wepy.getStorageSync(GeneralConstants.CONSTANT_COMMON_APPLICATION_NAME + key);
  }
}
