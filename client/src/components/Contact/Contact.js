import React from 'react';
import { Button } from 'antd';

import { loadContacts } from '../../store/actions/contact';
import { connect } from 'react-redux';

import './Contact.css'

class Contact extends React.Component {
    componentDidMount() {
        this.props.loadContacts()
    }
    render() {
        return (
            <div className="contact-container">
                <div className="contact-header">
                    <h3 className="contact-header-title">Contatos</h3>
                    <Button type="primary" shape="circle" icon="plus" size='large' />
                </div>
                <div className="contact-list">
                    {
                        this.props.contact.length
                            ?
                            this.props.contact.map(contact => (
                                <h1>gesiel</h1>
                            ))
                            :
                            <h4>Você ainda não tem contatos :(</h4>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contact: state.contact
})

export default connect(mapStateToProps, { loadContacts })(Contact);