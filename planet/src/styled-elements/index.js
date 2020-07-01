import { border, space, layout, typography, color, position, flexbox, shadow } from 'styled-system';
import style from 'styled-theming';
import styled, { createGlobalStyle, css } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from '../theme';
/**
 * BASE STYLES
 */

export const getBackground = style('mode', {
  light: '#fff',
  dark: '#111',
});

export const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE',
});

export const getFontSize = style('textZoom', {
  normal: '1em',
  magnify: '1.2em',
});

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
  font-size: ${getFontSize}
}
`;

/**
 * ELEMENTS
 */

export const Heading = styled.h1`
	${typography}
    ${color}
    ${space}
    font-weight: ${props => `${props.theme.fontWeights[5]}`};
`;

export const Div = styled.div`
    ${border}
    ${space}
    ${layout}
    ${typography}
    ${color}
    ${position}
    ${shadow}
    ${flexbox}
`;

export const SVG = styled.svg`
  ${space}
  ${layout}
`;

export const Flex = styled.div`
    display: flex;
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${space}
    ${position}
`;

export const Anchor = styled.a`
  ${position}
`;

export const Img = styled.img`
  ${layout}
  ${space}
`;

/**
 * BUTTON & LINKS
 */

const getButtonVariant = style.variants('mode', 'variant', {
  normal: {
    light: '#EEE',
    dark: '#EEE',
  },
  primary: {
    light: '#111',
    dark: '#fff',
  },
});

export const Button = styled.button`
  background-color: ${getBackground};
  border-color:${getButtonVariant};
  border-width:1px;
  color:${getButtonVariant};
  ${border}
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${position}
  ${shadow}
  ${flexbox}
  cursor:pointer;
  outline:none;
`;

export const StyledLink = styled.button`
    ${space}
    font-size: ${props => `${props.theme.fontSizes[2]}px`};
    font-weight: ${props => `${props.theme.fontWeights[5]}`};
    color: ${props => `${props.theme.colors.blue}`};
`;

export const IconButton = styled.button`
    ${border}
    ${position}
    ${space}
    ${color}
    cursor:pointer;
`;
