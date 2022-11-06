export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_STRIPE_KEY: string;
    }
  }
}
