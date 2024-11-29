import User from '../model/userModel.js';

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'user already exists' });
    }

    const saveData = await newUser.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (userData.length === 0) {
      return res.status(404).json({ message: 'user data not found' });
    }
    res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserByID = async (req, res) => {
  try {

    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: 'user not found' });
    }
    
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
