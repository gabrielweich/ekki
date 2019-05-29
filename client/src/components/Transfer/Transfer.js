import React from 'react';
import './Transfer.css';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { saveTransaction } from '../../store/actions/transaction';
import { loadContacts } from '../../store/actions/contact';
import { Select, InputNumber } from 'antd';


class Transfer extends React.Component {
    state = {
        selectedContactId: undefined,
        amount: undefined,
    };

    handleAmountChange = value => {
        this.setState({ amount: value })
    }

    handleChange = value => {
        this.setState({ selectedContactId: value.key[0] })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(this.props)
                this.props.history.push('/account/add_contact')
                console.log(this.props)
                console.log(values)
                this.props.saveTransaction(this.state.amount, this.state.selectedContactId)
            }
        });
    };

    componentDidMount() {
        this.props.loadContacts()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log()
        return (
            <div>
                <h3 className="add-contact-title">Destinatário</h3>
                <Form onSubmit={this.handleSubmit} className="transfer-form">
                    <Form.Item>
                        {getFieldDecorator('cpf', {
                            rules: [{ required: true, message: 'Selecione um contato.' }]
                        })(
                            <Select
                                showSearch
                                labelInValue
                                placeholder='Selecione o destinatário'
                                showArrow={false}
                                onSearch={this.handleSearch}
                                onChange={this.handleChange}
                                notFoundContent="Contato não encontrado"
                            >
                                {this.props.contacts.map(contact => <Select.Option key={contact.contactId} value={[contact.contactId, contact.contact.name]}>{contact.contact.name}</Select.Option>)}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('amount', {
                            rules: [{ required: true, message: 'Selecione um contato.' }],
                        })(
                            <InputNumber
                                decimalSeparator="."
                                formatter={value => `R$ ${value}`}
                                parser={value => value.replace(/R\$\s?|[^\d.-]|(\.*)/g, '')}
                                onChange={this.handleAmountChange}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="transfer-button">
                            Transferir
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contact.contacts
})

export default connect(mapStateToProps, { saveTransaction, loadContacts })(Form.create({})(Transfer));