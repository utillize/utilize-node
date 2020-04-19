import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import jwt from 'jsonwebtoken';

import { User } from '../../models/User';

const login = async (req: Request, res: Response) => {
  console.log("in login")
  const { email, password }: { email: string, password: string } = req.body;
  if (!(email && password)) {
    res.sendStatus(400);
  }

  const userObject = getRepository(User)
  let user: User;

  try {
    user = await userObject.findOneOrFail({ where: { email } });
    if (!user.checkUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }
    const privateKey: string = JSON.stringify(process.env.NODE_JWT_SECRET_KEY);
    const token = jwt.sign({ userId: user.id, email: user.email }, privateKey,
      { expiresIn: "1h" });
    res.send(token);
  } catch (error) {
    res.status(401).send();
  }
}

export default login