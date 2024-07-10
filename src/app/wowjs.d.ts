declare module 'wow.js' {
    export class WOW {
      constructor(options?: WOW.WOWOptions);
      init(): void;
    }
    
    namespace WOW {
      interface WOWOptions {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
        callback?: (box: HTMLElement) => void;
        scrollContainer?: string | null;
        resetAnimation?: boolean;
      }
    }
  }
  