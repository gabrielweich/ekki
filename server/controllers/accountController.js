const { Account } = require('../models');


exports.get = async (req, res) => {
    try {
        const { userId } = req.session;
        const account = await Account.findOne({ where: { userId } })

        if (!account)
            return res.status(400).send({ error: 'Conta não encontrada.' });

        res.status(200).send({ data: account });

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}