import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
import { generateToken, invalidateToken } from '../utils/jwtHandler.js';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (e) {
    res.status(400).json({ error: 'Error creating user', stack: e.stack });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user._id);
    res.status(200).json({ message: 'Login successful', token });
  } catch (e) {
    res.status(400).json({ error: 'Error logging in', stack: e.stack });
  }
};

export const logout = (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token) {
    invalidateToken(token);
  }
  res.status(200).json({ message: 'Logout successful' });
};
