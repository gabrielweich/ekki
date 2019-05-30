import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { loadTransactions } from '../../store/actions/transaction';
import { Link } from 'react-router-dom';
import TransferItem from '../TransferItem/TransferItem';
import moment from 'moment';
import './History.css';

class History extends React.Component {
    componentDidMount() {
        this.props.loadTransactions()
    }
    render() {
        return (
            <div className="history-container">
                <div className="history-header">
                    <h3 className="history-header-title">Últimas transações</h3>
                    <Link to="/account/transfer">
                        <Button type="primary" shape="circle" icon="plus" size='large' />
                    </Link>
                </div>
                <div className="history-list">
                    {
                        this.props.transactions.length
                            ?
                            this.props.transactions.sort((a, b) => moment(b.createdAt) - moment(a.createdAt)).map(transaction => {
                                return <TransferItem transaction={transaction} user={this.props.user} />
                            })
                            :
                            <h4 className="history-empty">Você ainda não tem uma transação :(</h4>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    transactions: state.transaction.transactions
})


export default connect(mapStateToProps, { loadTransactions })(History);