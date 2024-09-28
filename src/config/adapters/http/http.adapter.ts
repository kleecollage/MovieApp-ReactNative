export abstract class HttpAdapter{
  abstract get<T>( url: string, options?: Record<string, unknown> ): Promise<T>;
  // abstact get(utl: string, options: any): Promise<any>;  // GET GENERICO
}