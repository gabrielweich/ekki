import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { loadTransactions } from '../../store/actions/transaction';
import { Link } from 'react-router-dom';


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
                            this.props.transactions.map(transaction => {
                                console.log(transaction)
                                return <div>Gesiel</div>
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
    transactions: state.transaction.transactions
})


export default connect(mapStateToProps, { loadTransactions })(History);