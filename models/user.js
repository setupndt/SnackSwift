const sequelize = require('./db');
const { DataTypes, Model } = require('sequelize');

class User extends Model { }

User.init(
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.NUMBER(120),
            unique: true,
        },
        email: {
            type: DataTypes.STRING(120),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        job_title: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        otp:{
            type: DataTypes.STRING(120),
            allowNull: true,
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user', // We need to choose the model name,
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
);

module.exports = User;