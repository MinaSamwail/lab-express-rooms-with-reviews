require("dotenv").config();
require("../app");
const UserModel = require("./../models/User");

const users = [
  {
    fullName: "JCVD",
    email: "jcvd@mail.com",
    password: "1234",
  },
];

async function insertUser() {
  try {
    await UserModel.deleteMany();
    const inserted = await UserModel.insertMany(users);
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (error) {
    console.log(error);
  }
}

insertUser();
