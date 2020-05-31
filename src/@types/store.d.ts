import { AnyAction } from 'redux';
import { RootState } from 'store';

declare global {
  type StoreState = RootState;
  type EntitySchema = {
    request: {
      (...args: any[]): AnyAction<Type>;
      type: Type;
    };
    success: {
      (...args: any[]): AnyAction<Type>;
      type: Type;
    };
    failure: {
      (...args: any[]): AnyAction<Type>;
      type: Type;
    };
    api: (...args: any[]) => any;
  };
}
