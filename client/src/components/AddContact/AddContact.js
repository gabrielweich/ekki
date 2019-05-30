import React from 'react';
import './AddContact.css';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { connect } from 'react-redux';

import { loadUser, saveContact, cleanContactUser } from '../../store/actions/contact';

class AddContact extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.loadUser(values.cpf)
            }
        });
    };

    componentDidMount() {
        this.props.cleanContactUser()
    }

    saveContact = async () => {
        await this.props.saveContact(this.props.userContact.id)
        if (!this.props.saveContactError)
            this.props.history.goBack()
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
                                autoFocus
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="CPF"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="add-contact-search-btn">
                            Buscar
                        </Button>
                    </Form.Item>
                </Form>

                {
                    this.props.userContact.id
                    &&
                    <div>
                        <h4 className="add-contact-name">{`Nome: ${this.props.userContact.name}`}</h4>
                        <div className="add-contact-add-btn">
                            <Button onClick={this.saveContact}>Adicionar</Button>
                        </div>

                    </div>
                }
                {
                    this.props.saveContactError
                    &&
                    <Typography.Text type="danger">{this.props.saveContactError}</Typography.Text>
                }
                {
                    this.props.loadContactError
                    &&
                    <Typography.Text type="danger">{this.props.loadContactUserError}</Typography.Text>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userContact: state.contact.userContact,
    contacts: state.contact.contacts,
    saveContactError: state.contact.saveContactError,
    loadContactError: state.contact.loadContactError
})

export default connect(mapStateToProps, { loadUser, saveContact, cleanContactUser })(Form.create({})(AddContact));