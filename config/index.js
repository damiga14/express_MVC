require('dotenv').config()

var dbData = {
    DB_User: process.env.DB_User,
    DB_Pass: process.env.DB_Pass,
    DB_Name: process.env.DB_Name,
    DB_Host: process.env.DB_Host
}

var config = {
    // NODE_ENV = process.env.NODE_ENV,

    port: process.env.port,

    db: {
        PRODUCTION: `mongodb+srv://${dbData.DB_User}:${dbData.DB_Pass}@${dbData.DB_Host}/${dbData.DB_Name}?retryWrites=true&w=majority`,
        STAGING: `mongodb+srv://${dbData.DB_User}:${dbData.DB_Pass}@${dbData.DB_Host}/${dbData.DB_Name}?retryWrites=true&w=majority`,
        TEST: `mongodb+srv://${dbData.DB_User}:${dbData.DB_Pass}@${dbData.DB_Host}/${dbData.DB_Name}?retryWrites=true&w=majority`
    }
}

module.exports = { config }