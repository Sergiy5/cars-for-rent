import 'modern-normalize'
import { createGlobalStyle } from 'styled-components'
import InterMedium from './fonts/Inter/Inter-Medium.ttf'
import ManropeRegular from './fonts/Manrope/Manrope-Regular.ttf'
import ManropeMedium from './fonts/Manrope/Manrope-Medium.ttf' 
import ManropeSemiBold from './fonts/Manrope/Manrope-SemiBold.ttf'
import MontserratRegular from './fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratSemiBold from './fonts/Montserrat/Montserrat-SemiBold.ttf';


const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'InterMedium';
  src: local('InterMedium'),
   url(${InterMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
}


@font-face {
  font-family: 'ManropeRegular';
  src: local('ManropeRegular'),
   url(${ManropeRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;

}

@font-face {
  font-family: 'ManropeMedium';
 src: local('ManropeMedium'),
   url(${ManropeMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;

}

@font-face {
  font-family: 'ManropeSemiBold';
   src: local('ManropeSemiBold'),
   url(${ManropeSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'MontserratRegular';
   src: local('MontserratRegular'),
   url(${MontserratRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'MontserratSemiBold';
   src: local('MontserratSemiBold'),
   url(${MontserratSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
}

body{
  margin: 0;
  font-family: 'ManropeMedium', 'InterMedium', 'ManropeRegular', 'MontserratRegular', 'MontserratSemiBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  list-style: none;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button, a {
  cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
}
`;

export default GlobalStyle;