export default class ResponseBase {
  static formatCountResponse<T>(data: T, perPage: number, total: number) {
    return {
      content: data,
      totalElements: perPage,
      totalPages: total,
    };
  }

  static formatBaseResponse<T>(statusCode: number, data: T, message: string) {
    return {
      statusCode: statusCode,
      data: data,
      message: message,
    };
  }

  static formatBaseResponseWithTotal<T>(statusCode: number, data: T, total: number, message: string) {
    return {
      statusCode: statusCode,
      data: data,
      total: total,
      message: message,
    };
  }
}
