import React from 'react';
import './AddContact.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';

import { loadUser, saveContact } from '../../store/actions/contact';

class AddContact extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values.cpf)
                this.props.loadUser(values.cpf)
            }
        });
    };

    saveContact = () => {
        this.props.saveContact(this.props.userContact.id)
        this.props.history.push('/account/contacts')
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h3 className="add-contact-title">Adicionar contato</h3>
                <Form onSubmit={this.handleSubmit} className="add-contact-login-form">
                    <Form.Item>
                        {getFieldDecorator('cpf', {
                            rules: [{ required: true, message: 'Digite o CPF de quem você deseja adicionar!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="CPF"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="add-contact-button">
                            Buscar
                        </Button>
                    </Form.Item>
                </Form>
                {
                    this.props.userContact.id
                    &&
                    <div>
                        <h4>{`Nome: ${this.props.userContact.name}`}</h4>
                        <Button onClick={this.saveContact}>Adicionar</Button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userContact: state.contact.userContact,
    contacts: state.contact.contacts
})

export default connect(mapStateToProps, {loadUser, saveContact})(Form.create({})(AddContact));