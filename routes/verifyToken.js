const jwt = require('jsonwebtoken');
const sessionStorage = require('sessionstorage');

module.exports = function (req,res,next) {

  const token = sessionStorage.getItem('jwt');
  if(!token) return res.status(401).send("Access Denied, please log in");

  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified; // this returns users id
    next();
  }catch(err){
    res.status(400).send('Invalid token');
  }
};
