import { ErrorCode } from './codes.js'

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.USR_VAL_MISSING_FIELDS]: "缺少必要字段",
  [ErrorCode.USR_VAL_INVALID_INPUT]: "用户输入不合法",
  [ErrorCode.USR_DATA_NOT_FOUND]: "用户不存在",
  [ErrorCode.USR_DATA_DUPLICATE]: "用户数据重复",

  [ErrorCode.AUTH_VAL_SIGNATURE_INVALID]: "签名不合法",
  [ErrorCode.AUTH_VAL_TOKEN_EXPIRED]: "令牌已过期",
  [ErrorCode.AUTH_VAL_TOKEN_INVALID]: "令牌无效",
  [ErrorCode.AUTH_AUTH_UNAUTHORIZED]: "未授权访问",

  [ErrorCode.DB_CONN_FAILED]: "数据库连接失败",
  [ErrorCode.DB_QUERY_FAILED]: "数据库查询失败",
  [ErrorCode.DB_DATA_CONFLICT]: "数据冲突",

  [ErrorCode.SYS_UNKNOWN]: "未知错误",
  [ErrorCode.SYS_INTERNAL_ERROR]: "内部错误",
  [ErrorCode.SYS_TIMEOUT]: "请求超时",

  [ErrorCode.API_VAL_RESPONSE_INVALID]: "外部接口响应无效",
  [ErrorCode.API_CONN_FAILED]: "外部接口连接失败",
  [ErrorCode.API_RATE_LIMIT_EXCEEDED]: "API 调用频率超出限制",
}
