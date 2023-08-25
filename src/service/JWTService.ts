import jwt from 'jsonwebtoken';
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const JWTService = {
  generate: (obj: any) => {
    const payload = {
      userId: obj.userId,
      name: obj.name,
      email: obj.email,
    };
    const token = jwt.sign(payload, JWT_SECRET!, { expiresIn: '1y' });
    return token;
  },
};

export default JWTService;
