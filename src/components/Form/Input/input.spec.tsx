import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

//React.FC -> Componente funcional
const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

describe('Input Component', () => {
  it('should have a specific border color when active', () => {
    const { getByTestId, debug } = render(
      <Input
        testID='input-email'
        placeholder='E-mail'
        keyboardType='email-address'
        autoCorrect={false}
        active={true}
      />,
      //Oque por volta do componente que vou testar (Contexts)
      {
        wrapper: Providers
      }
    );

    const inputComponent = getByTestId('input-email');

    expect(inputComponent.props.style[0].borderColor)
    .toEqual(theme.colors.attention);

    expect(inputComponent.props.style[0].borderWidth)
    .toEqual(3);
  });
});