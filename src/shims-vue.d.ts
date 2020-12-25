declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { VueConstructor } from 'vue';
  const d: VueConstructor;
  export default d;
}