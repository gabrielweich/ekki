import React from 'react'
import { Form, Icon, Input, Button, Typography } from 'antd';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { signin } from '../../store/actions/user';

import './SignIn.css'

class SignIn extends React.Component {
    state = {
        loading: false
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true })
                this.props.signin(values.cpf, values.password)
                    .then(_ => this.setState({ loading: false }))
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="signin-form">
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
                {this.props.signinError && !this.state.loading && <Typography.Text className="sign-in-error-message" type="danger">{this.props.signinError}</Typography.Text>}
                <Form.Item>

                    <Button type="primary" htmlType="submit" className="signin-form-button">
                        Log in
                    </Button>
                    Ainda não tem uma conta? <Link to="/signup">Cadastre-se agora!</Link>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    signinError: state.user.signinError
})


export default connect(mapStateToProps, { signin })(Form.create({})(SignIn));