// type이 있는 ActionCreator 만들기
export const createAction = <P, Type extends string = string>(type: Type) => {
  function fn(payload?: P): { type: Type };
  function fn(payload: P): { type: Type; payload: P };
  function fn(payload: any): any {
    return {
      type,
      payload,
    };
  }
  fn.type = type;
  return fn;
};

// entity 만들기 - 비동기일 때 사용
export const createEntity = <Params extends any[], Res>(
  prefix: string,
  api: APIEndpoint<Params, Res>,
) => ({
  request: createAction<Params>(`${prefix}_REQUEST`),
  success: createAction<Res>(`${prefix}_SUCCESS`),
  failure: createAction<string>(`${prefix}_FAILURE`),
  api,
});
