import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import "./Profile.css";

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <h3 className="profile-title">Ekki</h3>
                    <h3 className="profile-logout" >Sair</h3>
                </div>
                <div className="profile-info">
                    <h1>{`Bem-vindo ${this.props.user.name}`}</h1>
                    <h2>{`R$ ${!!this.props.account.balance ? this.props.account.balance.toLocaleString('pt-BR') : '0,00'}`}</h2>
                </div>
                <div className="profile-action">
                    <Link to="/account">
                        <button className="profile-button">Transferências</button>
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
    user: state.user,
    account: state.account
})

export default connect(mapStateToProps)(Profile);