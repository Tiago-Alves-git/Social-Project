const serviceLogin = require('../service/login-service');
const { generateToken } = require('../utils/auth'); 

const login = async (req, res, next) => {
  const data = req.body;
  try {                               
    const result = await serviceLogin.login(data);
    console.log(result);
    const { displayName, id, image } = result;
    const geraToken = await generateToken({ id, displayName });
    return res.status(200).json({ token: geraToken, result: { displayName, image, id } });
  } catch (error) {                                         
    next(error);
  }        
};

module.exports = {
  login,
};