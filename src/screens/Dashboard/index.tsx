import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { 
    TransactionCard,
    TransactionCardProps,
} from '../../components/TransactionCard';

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
    Transactions, 
    Title,
    TransactionList,
    LogoutButton
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de App",
        amount: "R$ 20.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "13/04/2021",
    },
    {
        id: '2',
        type: 'negative',
        title: "Mercado",
        amount: "R$ 2.000,00",
        category: {
            name: 'Alimentacao',
            icon: 'coffee'
        },
        date: "10/04/2021",
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel Apartamento",
        amount: "R$ 3.000,00",
        category: {
            name: 'Casa',
            icon: 'shopping-bag'
        },
        date: "10/04/2021",
    },
];

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
                    
                <LogoutButton onPress={() => {}}>
                    <Icon name="power"/>
                </LogoutButton>
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

            <Transactions>
                <Title>Listagem</Title>
                
                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}