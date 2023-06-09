const serviceUser = require('../service/user-service');
const { generateToken, decodeToken } = require('../utils/auth'); 

const signUp = async (req, res, next) => {
  const data = req.body;
  const { path } = req.file;
  const send = { data, path }
  try {
    const { dataValues } = await serviceUser.signUp(send);
    const { id } = dataValues;
    const { email, displayName } = data;
    const tkn = generateToken({ displayName, id, email });
    return res.status(201).json({ token: tkn });
  } catch (error) {
    next(error);
  }
};

const findAllUsers = async (_req, res, next) => {
  try {
    const result = await serviceUser.findAllUsers();
  return res.status(200).json(result);
} catch (error) {
  next(error);
}
};

const findUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await serviceUser.findUserById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteMe = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    await serviceUser.deleteMe(authorization);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  findAllUsers,
  findUserById,
  deleteMe,
};