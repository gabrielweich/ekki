module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    })

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.Account, { foreignKey: 'originId', as: 'origin' })
        Transaction.belongsTo(models.Account, { foreignKey: 'destinyId', as: 'destiny' })
    }

    return Transaction;
}