import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';


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
    const [ data, setData ] = useState<DataListProps[]>([]);

    async function loadTransactions() {
        const dataKey = '@gofinance:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];

        const transactionsFormated: DataListProps[] = transactions
        .map((item: DataListProps) => {
            const amount = Number(item.amount)
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                }).format(new Date(item.date));

                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    category: item.category,
                    date
                }

        });

        setData(transactionsFormated);
    }

    useEffect(() => {
        loadTransactions();
    },[])

    useFocusEffect(useCallback(
        () => {
            loadTransactions();
        },[]));

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