// Este arquivo ele é um arquivo para sobrescrever Tipos
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    //typeOf ele copia exatamente o Tipo de um Objeto
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {
        
    }
}