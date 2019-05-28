import React from 'react';
import './Transfer.css';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { saveTransaction } from '../../store/actions/transaction';


class Transfer extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values.cpf)
                this.props.saveTransaction(100)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;


        return (
            <div>
                <h3 className="add-contact-title">Destinatário</h3>
                <Form onSubmit={this.handleSubmit} className="add-contact-login-form">
                    <Form.Item>
                        {getFieldDecorator('cpf', {
                            rules: [{ required: true, message: 'Selecione um contato.' }],
                        })(
                            <Input
                                autoFocus
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
            </div>
        )
    }
}

export default connect(null, { saveTransaction })(Form.create({})(Transfer));