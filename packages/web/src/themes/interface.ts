export type Breakpoints<T> = {
  sm: T;
  md: T;
  lg: T;
  xl: T;
  '2xl': T;
};

export const BREAKPOINTS: Breakpoints<string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
};
