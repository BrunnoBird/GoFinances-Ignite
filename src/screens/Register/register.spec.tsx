import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { Register } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  // <NavigationContainer>
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  // </NavigationContainer>
);

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn()
  }
})

describe('Register Screen', () => {
  
  it('should be open category modal when user click on the category button', async () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    );

    const categoryModal = getByTestId('modal-category');
    const buttonCategory = getByTestId('button-category');

    //Disparar cliques do usuário
    fireEvent.press(buttonCategory);

    //Aguarde a chamada assincrona
    await waitFor(() => {
      expect(categoryModal.props.visible).toBeTruthy();
    }, { timeout: 2000 });
  });
});
