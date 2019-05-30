const { User, Account } = require('../models');

DEFAULT_BALANCE = 1000
DEFAULT_LIMIT = 500

exports.post = async (req, res) => {

    try {
        const { cpf, name, password, phone } = req.body;

        if (await User.findOne({ where: { cpf } }))
            return res.status(400).send({ error: 'Usuário já existe.' });

        const user = await User.create({ cpf, name, password, phone });
        const account = await Account.create({ userId: user.id, balance: DEFAULT_BALANCE, limit: DEFAULT_LIMIT })
        req.session.userId = user.id
        res.status(201).send({ data: user });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor.' })
    }

}

exports.login = async (req, res) => {
    try {
        const { cpf, password } = req.body;
        const user = await User.findOne({ where: { cpf } })
        if (!user || !(await user.validPassword(password)))
            return res.status(401).send({ error: 'Credenciais inválidas.' })

        req.session.userId = user.id
        res.status(201).send({ data: user });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor.' })
    }
}

exports.get = async (req, res) => {
    try {
        const { cpf } = req.params;
        const user = await User.findOne({ where: { cpf } })
        if (!user || user.id === req.session.userId)
            res.status(400).send({ error: 'Nenhum usuário com esse CPF foi encontrado.' })
        res.status(200).send({ data: { name: user.name, id: user.id } })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor.' })
    }
}

exports.logout = async (req, res) => {
    try {
        const { userId } = req.session;
        req.session = null
        res.status(201).send({ data: { userId } })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}