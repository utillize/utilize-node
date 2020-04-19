import { Request, Response } from 'express';
import { getRepository } from "typeorm";

import { User } from '../../models/User';
import { SignPrivateKeyInput } from 'crypto';
import { validate } from 'class-validator';

const signup = async (req: Request, res: Response) => {

  const userObject = getRepository(User);
  const { mobile, email, password, role = 'user' }: { mobile: number, email: string, password: string, role: string } = req.body;

  let user = new User();

  user.mobile = mobile;
  user.email = email;
  user.password = password;
  user.role = role;

  const errors = await validate(userObject);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }
  user.hashPassword();

  const userRepository = getRepository(User);
  try {
    await userRepository.save(user);
  } catch (e) {
    res.status(409).send("email already in use");
    return;
  }

  res.status(201).send({
    Response: {
      status: 'SUCCESS',
      data: {
        newUserCreated: true
      }
    }
  })
};


export default signup