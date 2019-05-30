import React from 'react';
import './Transfer.css';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { saveTransaction } from '../../store/actions/transaction';
import { loadContacts } from '../../store/actions/contact';
import { Select, InputNumber, Popconfirm } from 'antd';


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
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                await this.props.saveTransaction(this.state.amount, this.state.selectedContactId)
                if (!this.props.transactionError)
                    this.props.history.goBack()
                else
                    message.error(this.props.transactionError)
            }
        });
    };

    componentDidMount() {
        this.props.loadContacts()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h3 className="add-contact-title">Destinatário</h3>
                <Form onSubmit={this.handleSubmit} className="transfer-form">
                    <Form.Item className="transfer-form-item">
                        {getFieldDecorator('cpf', {
                            rules: [{ required: true, message: 'Selecione um contato.' }]
                        })(
                            <Select
                                className="transfer-form-item"
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
                            rules: [{ required: true, message: 'Digite um valor' }],
                        })(
                            <InputNumber
                                placeholder="Valor"
                                precision={2}
                                className="transfer-form-item"
                                decimalSeparator=","
                                formatter={value => value}
                                parser={value => value}
                                onChange={this.handleAmountChange}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {
                            this.state.amount > this.props.account.balance
                                ?
                                <Popconfirm title={`Utilizar limite e confirmar a transação? `} okText="Sim" cancelText="Não" onConfirm={this.handleSubmit}>

                                    <Button htmlType="submit" className="transfer-form-item">
                                        Transferir
                                    </Button>
                                </Popconfirm>
                                :
                                <Button htmlType="submit" className="transfer-form-item">
                                    Transferir
                                </Button>
                        }

                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    account: state.account.account,
    contacts: state.contact.contacts,
    transactionError: state.transaction.transactionError
})

export default connect(mapStateToProps, { saveTransaction, loadContacts })(Form.create({})(Transfer));