/// <reference types="react" />

declare global {
    interface Window {
      grecaptcha: {
        ready: (callback: () => void) => void;
        execute: () => void;
        reset: () => void;
        render: (container: HTMLElement | string, parameters: {
          sitekey: string;
          theme?: string;
          size?: string;
          callback?: (token: string) => void;
        }) => number;
      };
    }
  }
  
  export {};