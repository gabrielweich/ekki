const { Account, Transaction, Sequelize, User } = require('../models')
const Op = Sequelize.Op;


exports.post = async (req, res) => {
    try {
        const { userId } = req.session;

        const { contactId, amount } = req.body;

        await sequelize.transaction(async (t) => {
            const userAccount = await Account.findOne({ where: { userId } })
            if (userAccount.balance > amount) {
                if (amount > userAccount.limit)
                    return res.status(400).send({ error: 'Saldo insuficiente' })
                else
                    await Account.decrement('limit', { by: amount - userAccount.balance, where: { userId }, transaction: t })
            }
            await Account.decrement('balance', { by: amount, where: { userId }, transaction: t })
            await Account.increment('balance', { by: amount, where: { userId: contactId }, transaction: t })
            await Transaction.create({ originId: userId, destinyId: contactId, amount }, { transaction: t })
        })



        res.status(201).send({ data: { userId, contactId, amount } })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}


exports.getAll = async (req, res) => {
    try {
        const { userId } = req.session;

        const transactions = await Transaction.findAll({ where: { [Op.or]: [{ originId: userId }, { destinyId: userId }] }, include: [{ model: Account, as: 'origin', include: [{ model: User, as: 'user', attributes: ['name'] }] }, { model: Account, as: 'destiny', include: [{ model: User, as: 'user', attributes: ['name'] }] }] })

        res.status(200).send({ data: transactions })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Erro desconhecido no servidor' })
    }
}