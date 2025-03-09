import React from 'react'
import './style.css'

interface Transaction {
    date: string;
    txHash: string;
    sender: string;
    receiver: string;
    amount: string;
    fee: string;
}

interface TransactionsHistoryProps {
    transactions: Transaction[];
}

const TransactionsHistory: React.FC<TransactionsHistoryProps> = ({ transactions }) => {
    const headings = ['Date', 'TX Hash', 'Sender', 'Receiver', 'Amount', 'Fee']
    
    return (
        <div className='container-TransactionsHistory'>
        <table >
            <thead>
                <tr>
                    {headings.map((item, i) => (<th key={i}>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, i) => (
                    <tr key={i}>
                        <td>{transaction.date}</td>
                        <td className='gradientTxHash-TransactionsHistory' >{transaction.txHash}</td>
                        <td>{transaction.sender}</td>
                        <td>{transaction.receiver}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.fee}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default TransactionsHistory
