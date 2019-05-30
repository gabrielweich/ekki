import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { signup } from '../../store/actions/user';

import './SignUp.css'

class SignUp extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.signup(values)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="signup-form">
                <Form.Item>
                    {getFieldDecorator('cpf', {
                        rules: [{ required: true, message: 'Digite seu CPF.' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="CPF"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Digite seu nome.' }],
                    })(
                        <Input
                            prefix={<Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Nome"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Digite seu telefone.' }],
                    })(
                        <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Telefone"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Digite sua senha.' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Senha"
                        />,
                    )}
                </Form.Item>
                <Form.Item>

                    <Button type="primary" htmlType="submit" className="signin-form-button">
                        Cadastre-se
                    </Button>
                    Já tem uma conta? <Link to="/">Faça login!</Link>
                </Form.Item>
            </Form>
        );
    }
}


export default connect(null, { signup })(Form.create({})(SignUp));