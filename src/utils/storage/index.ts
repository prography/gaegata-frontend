type LocalStorage = {
  [key: string]: any;
};

const st: LocalStorage = typeof localStorage === 'object' ? localStorage : {};

type Storage = {
  set(key: string, value: any): void;
  get(key: string): any;
  remove(key: string): void;
  clear(): void;
};

const storage: Storage = {
  set(key, value) {
    st[key] = JSON.stringify(value);
  },
  get(key) {
    if (!st[key]) return null;
    const value = st[key];
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
  remove(key) {
    delete st[key];
  },
  clear() {
    if (st.clear) {
      st.clear();
    }
  },
};

export default storage;
