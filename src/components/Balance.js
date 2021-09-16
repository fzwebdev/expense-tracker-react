import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    // console.log(transactions);
    const amount = transactions.map(transaction => transaction.amount);
    // console.log(amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    // console.log(total);
    const income = (amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    // console.log(income);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}
