const secretKey = 'Digiteltechnolgi';
const jwt = require('jsonwebtoken');

const createToken=(userId)=>{
    const token =  jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    return token;
}

export default createToken;

