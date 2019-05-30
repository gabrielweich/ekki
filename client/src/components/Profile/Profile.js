import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../store/actions/user';

import "./Profile.css";

class Profile extends React.Component {
    render() {

        return (
            <div className="profile-container">
                <div className="profile-header">
                    <h3 className="profile-title">Ekki</h3>
                    <h3 className="profile-logout" onClick={this.props.logout} >Sair</h3>
                </div>
                <div className="profile-info">
                    <h1 className="profile-welcome" >{`Bem-vindo ${this.props.user.name}`}</h1>
                    <h2 className="profile-balance">{`${!!this.props.account.balance ? this.props.account.balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}`}</h2>
                    <h4 className="profile-limit">{`Limite: ${!!this.props.account.limit ? this.props.account.limit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}`}</h4>
                </div>
                <div className="profile-action">
                    <Link to="/account">
                        <button className="profile-button">Transações</button>
                    </Link>
                    <Link to="/account/contact">
                        <button className="profile-button">Contatos</button>
                    </Link>
                </div>
            </div>
        )

    }
}


const mapStateToProps = state => ({
    user: state.user.user,
    account: state.account.account
})

export default connect(mapStateToProps, { logout })(Profile);