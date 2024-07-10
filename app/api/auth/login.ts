// src/pages/api/auth/[...nextauth].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface IUser {
  username: string;
  password: string;
  displayName?: string;
}

interface IResponseData {
  username: string;
  token: string;
  displayName?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseData>
) {
  const body = req.body

  // const user = await User.findOne({username: body.username})
  const user: IUser = { username: "testuser", password: "test" }
  body.displayName ??= user.username

  const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.password)

  if (!(user && passwordCorrect)) {
    const e = new Error('Invalid username or password')
    e.name = 'Unauthorized'
    throw e
  }

  const u = {
    username: user.username,

  }

  const token = jwt.sign(u, process.env.JWT_SECRET ?? "Is this a risk?")

  res.status(200).send({ token, username: user.username, displayName: user.displayName })
}
