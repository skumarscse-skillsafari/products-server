import { users } from "../data.js";

export const getAllUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    res
      .status(200)
      .json({ success: true, message: `No user with the id: ${id}` });
  } else {
    res.status(200).json({ success: true, data: findUser });
  }
};

export const createUser = (req, res) => {
  res.status(201).json({ success: true, message: "createUser" });
};

export const updateUser = (req, res) => {
  res.status(200).json({ success: true, message: "updateUser" });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    res
      .status(200)
      .json({ success: true, message: `No user with the id: ${id}` });
  } else {
    const newUsers = users.filter((user) => user.id !== Number(id));
    console.log(newUsers);
    res.status(200).json({
      success: true,
      message: `User with the id: ${id} deleted successfully`,
    });
  }
};
