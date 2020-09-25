const express = require("express");
const router = express.Router();

const { addPatient, getAllPatients } = require("../../database/query");
const { v4: uuidv4 } = require("uuid");
const { response } = require("express");

router.get("/", (req, res) => {
  getAllPatients()
    .then((data) => {
      console.log(data.rows);
      res.status(200).json(data.rows);
    })
    .catch((e) => res.status(401).json({ msg: e }));
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

  addPatient(newPatient)
    .then(() => res.status(201).json())
    .catch(() => res.status(401).json());
});

router.get("/choices", (req, res) => {
  res.status(200).json({
    "text": "Please select category to answer",
    "choices": [
      {
        "title": "Healthcare",
        "value": "healthcare"
      },
      {
        "title": "Contact",
        "value": "contact"
      },
    ],
    "typing": true
  })
});

module.exports = router;
