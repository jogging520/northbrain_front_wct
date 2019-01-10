import {CacheService} from 'shared/services/general/cache-service';
import * as GeneralConstants from "shared/constants/general/general-constants";

export class TokenService {
  static get(): Token {
    return CacheService.get(GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_TOKEN);
  }

  static set(token: Token) {
    if (token) {
      CacheService.set(GeneralConstants.CONSTANT_COMMON_HTTP_PARAM_PUBLIC_TOKEN, token)
    }
  }
}
