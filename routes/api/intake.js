const express = require("express");
const router = express.Router();

const { addPatient } = require("../../database/query");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello world" });
});

router.post("/", (req, res) => {
  const { firstName, middleName, lastName, gender } = req.body;
  const id = uuidv4();

  const newPatient = {
    id,
    firstName,
    middleName,
    lastName,
    gender,
  };
  console.log(firstName);

  addPatient(newPatient)
    .then(() => res.status(201).json())
    .catch(() => res.status(401).json());
});

module.exports = router;
