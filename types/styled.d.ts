import { theme } from '../src/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: {
//       primaryColor: string;
//       secondaryColor: string;
//       white: string;
//       mediumGray: string;
//     };
//     font: {
//       family: {
//         default: string;
//         secondary: string;
//       };
//       sizes: {
//         xsmall: string;
//         small: string;
//         medium: string;
//         large: string;
//         xlarge: string;
//         xxlarge: string;
//         huge: string;
//         xhuge: string;
//       };
//     };
//     media: {
//       lteMedium: string;
//     };
//     spacings: {
//       xsmall: string;
//       small: string;
//       medium: string;
//       large: string;
//       xlarge: string;
//       xxlarge: string;
//       huge: string;
//       xhuge: string;
//     };
//   }
// }
