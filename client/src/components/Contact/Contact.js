import React from 'react';
import { Button } from 'antd';

import { Link } from 'react-router-dom';

import { loadContacts, deleteContact } from '../../store/actions/contact';
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
                    <Link to="/account/add_contact">
                        <Button type="primary" shape="circle" icon="plus" size='large' />
                    </Link>
                </div>
                <div className="contact-list">
                    {
                        this.props.contact.contacts.length
                            ?
                            this.props.contact.contacts.map(contact => {
                                console.log(contact)
                                return <div className="contact-item"><h2 className="contact-title">{contact.contact.name}</h2><Button onClick={() => this.props.deleteContact(contact.contactId)} shape="circle" icon="delete" /></div>
                            })
                            :
                            <h4 className="contact-empty">Você ainda não tem contatos :(</h4>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contact: state.contact
})

export default connect(mapStateToProps, { loadContacts, deleteContact })(Contact);