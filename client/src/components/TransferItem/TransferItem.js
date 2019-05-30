import React from 'react';
import moment from 'moment';
import { Icon } from 'antd'
import './TransferItem.css';

const TransferItem = ({ user, transaction }) => {
    console.log({ user })
    console.log({ transaction })
    let name, icon, amountClass;
    if (user.id === transaction.originId) {
        name = user.name;
        icon = <Icon type="arrow-down" />
        amountClass = 'amount-negative'
    }
    else {
        name = transaction.origin.user.name;
        icon = <Icon type="arrow-up" />
        amountClass = 'amount-positive'
    }
    return (
        <div className="transfer-item-container">
            <h2 className="transfer-user-name">{moment(transaction.createdAt).format('DD/MM/YYYY HH:mm:ss')}</h2>
            <h2 className="transfer-user-name">{name}</h2>
            <h2 className={`transfer-user-name, ${amountClass}`}>{transaction.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}{icon}</h2>
        </div>
    )
}

export default TransferItem;