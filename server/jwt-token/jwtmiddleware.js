const jwt = require("jsonwebtoken");
const config = require("../jwt-token/jwt-token");

const verifyToken = (req, res, next) => {

  const token = req.headers['authorization'];
  console.log('token',token);
 
 

  
  console.log(token);
  
  if(!token){
    return res
      .status(401)
      .json({ message: " there is no token for authorization" });
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    console.log(decoded);
    next();
  } catch {
    return res.status(401).json({ message: "invalid token" });
  }
};

module.exports = verifyToken;
