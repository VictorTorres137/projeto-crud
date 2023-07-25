const bcrypt = require('bcrypt')

async function crypto(pwd){
    const salt = await bcrypt.genSalt()
    // console.log(`salt  = ${salt}`)
    const password = await bcrypt.hash(pwd, salt)
    // console.log(`senha = ${senhaCript}`)

    return password
}

module.exports = {
    crypto,
}