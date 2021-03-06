const mongoose = require('mongoose')

const configureDB = () => {
    let url = 'mongodb://localhost:27017/connect-db'
    if (process.env.NODE_ENV === 'production'){
        url ='mongodb+srv://giggleApp:giggleDbServer@development.kxlvf.mongodb.net/giggle-db?retryWrites=true&w=majority' 
    }
    mongoose.connect(url,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(()=>{console.log('connected to connect-db...')})
        .catch((err) => console.log(err))
}

module.exports = configureDB