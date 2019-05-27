const {Account, Transaction, Sequelize} = require('../models')
const Op = Sequelize.Op;


exports.post = async (req, res) => {
    try {
        const { userId } = req.session;
        
        const { contactId, amount } = req.body;

        Account.decrement('amount', {by: amount, where: { userId }})
        Account.increment('amount', {by: amount, where: { userId: contactId }})
        
        await Transaction.create({originId: userId, destinyId: contactId, amount})

        res.status(201).send({data: {userId, contactId, amount}})
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}


exports.getAll = async (req, res) => {
    try {
        const { userId } = req.session;

        const transactions = await Transaction.findAll({where: {[Op.or]: [{originId: userId}, {destinyId: userId}]} })

        res.status(200).send({data: transactions})
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}