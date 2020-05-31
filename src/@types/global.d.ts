type APIEndpoint<P extends any[], R> = (...p: P) => Promise<R>;
