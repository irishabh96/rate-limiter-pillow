import { Request, Response } from 'express';

const store = <[{ name: string; email: string; id: number }]>[
  {
    id: 1,
    name: 'Rishabh Bhatia',
    email: 'irishabh96@gmail.com',
  },
];

const users = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ data: store });
  } catch (error: any) {
    return res.status(500).json({ data: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = <{ name: string; email: string }>req.body;

    if (!email || !name) return res.status(400).json({ message: 'Invalid payload' });

    const id = store.length + 1;

    store.push({ email, name, id });

    return res.status(201).json({ data: store });
  } catch (error: any) {
    return res.status(500).json({ data: error.message });
  }
};

export { users, createUser };
