export interface BaseUseCase<T> {
  validateParams?: (event: object | undefined, data: object | undefined) => any;
  execute: (...args: any[]) => T;
}
