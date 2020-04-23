/* eslint-disable @typescript-eslint/no-empty-interface */
// import original module declarations
import 'styled-components';
import { Theme } from '@sinoui/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
