import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
} from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'http://github.com/brunnoBird.png'}} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Brunno</UserName>
                        </User>
                    </UserInfo>
                <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas"
                    amount="R$ 1.300,00" 
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard
                    type="total" 
                    title="Total"
                    amount="R$ 14.141,00" 
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>
        </Container>
    )
}