interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: () => void;
      reset: () => void;
      render: (container: string | HTMLElement, parameters: ReCaptchaParams) => void;
    };
  }