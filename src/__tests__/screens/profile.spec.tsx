import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

//Switch de testes (Categorias para separar)
describe('Profile Screen', () => {

  //Estrutura de um teste: test('nomeDoTeste', () => { executa algo })
  it('should have placeholder correctly in input user name input', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName).toBeTruthy();

    // Podemos acessar as propriedades de um elemento dessa forma
    // expect(inputName.props.placeholder).toBeTruthy();
  });

  it('should be loaded user data', () => {
    //Consigo pegar exatamente um deteminado elemento em tela
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Rodrigo');
    expect(inputSurname.props.value).toEqual('Gonzalez');
  });

  it('should exist title correctly', () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId('text-title');

    //Acessando o valor entre o componente <Text> Children <Text/>
    expect(textTitle.props.children).toContain('Perfil');
  });

});