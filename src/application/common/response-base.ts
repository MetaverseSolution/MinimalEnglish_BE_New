export default class ResponseBase {
  static formatPaginationResponse<T>(status_code: number, data: T, total: number, per_page: number, current_page: number, last_page: number, message: string) {
    return {
      status_code,
      data,
      total,
      per_page,
      current_page,
      last_page,
      message,
    };
  }

  static formatBaseResponse<T>(status_code: number, data: T, message: string) {
    return {
      status_code,
      data,
      message,
    };
  }

  static formatBaseResponseWithTotal<T>(status_code: number, data: T, total: number, message: string) {
    return {
      status_code,
      data,
      total,
      message,
    };
  }
}
