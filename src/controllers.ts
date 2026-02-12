import { Request, Response } from "express";
import { UserModel } from "./model/userModel";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: "Ошибка при получении списка пользователей",
      error,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user)
      return res
        .status(404)
        .send({ message: `Пользователь с ${id} id не найден` });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      message: "Ошибка при получении пользователя",
      error,
    });
  }
};

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;

    const newUser = {
      name,
      age,
    };

    const user = await UserModel.create(newUser);

    if (!user) return res.status(404).send("Ошибка при создании пользователя");

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({
      message: "Ошибка при создании пользователя",
      error,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({
        message: `Пользователь с id ${id} не найден`,
      });
    }

    Object.assign(user, body);

    const updateUser = await user.save();

    res.status(200).send({
      message: `Пользователь с ${id} ID обновлен`,
      user: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Ошибка при обновлении пользователя",
      error,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user)
      return res
        .status(404)
        .send({ message: `Пользователь с ${id} id не найден` });

    res.status(200).send({
      message: `Пользователь с ${id} ID успешно удален`,
      deletedUser: user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Ошибка при удалении пользователя",
      error,
    });
  }
};
