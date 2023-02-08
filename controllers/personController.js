const Person = require("../models/person.js");
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find(); //return an array from the database via odm
    if (persons.length === 0) {
      res.status(400).json({ msg: "your database is empty" });
    } else {
      res.status(200).json({ persons });
    }
  } catch (error) {
    res.status(500).json({ msg: "operationof gettAllPersons is failed" });
  }
};
const getOnePerson = async (req, res) => {
  const id = req.params.id;
  try {
    const foundPerson = await Person.findById(id);
    if (!foundPerson) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(200).json({ foundPerson });
    }
  } catch (error) {
    res.status(500).json({ msg: "operationof get one Person is failed" });
  }
};
const deletePerson = async (req, res) => {
  const id = req.params.id;
  try {
    await Person.findByIdAndDelete(id);
    const persons = await Person.find();
    res.status(200).json({ persons, msg: "delete is sucessfully done" });
  } catch (error) {
    res.status(500).json({ msg: "delete  is failed" });
  }
};

const updatePerson = async (req, res) => {
  const id = req.params.id;
  const person = req.body;
  try {
    await Person.findByIdAndUpdate(id, person);
    res.status(200).json({ msg: "updated sucessfully done" });
  } catch (error) {
    res.status(500).json({ msg: "update  is failed" });
  }
};
const createPerson = async (req, res) => {
  const person = req.body;
  const { userName, age } = person;
  //newPerson
  const newPerson = new Person({ userName: userName, age: age });
  console.log(newPerson);
  await newPerson.save();
  res.status(200).json({ msg: "sucessfully done" });

  try {
  } catch (error) {
    res.status(500).json({ msg: "operationof save one Person is failed" });
  }
};
const searchByName = async (req, res) => {
  const { letter } = req.query;
  try {
    const persons = await Person.find();
    const searchedPersons = persons.filter((elt) =>
      elt.userName.toLowerCase().includes(letter.toLowerCase())
    );
    if (searchedPersons.length === 0) {
      res.status(300).json({ msg: "no data with this informations" });
    } else {
      res.status(200).json({ searchedPersons: searchedPersons });
    }
  } catch (error) {
    res.status(500).json({ msg: "operation is failed" });
  }
};
const filterAge = async (req, res) => {
  const { max, min } = req.query;
  try {
    const persons = await Person.find();
    const searchedPersons = persons.filter(
      (elt) => elt.age >= Number(min) && elt.age <= Number(max)
    );
    if (searchedPersons.length === 0) {
      res.status(300).json({ msg: "no data with this informations" });
    } else {
      res.status(200).json({ searchedPersons: searchedPersons });
    }
  } catch (error) {
    res.status(500).json({ msg: "operation is failed" });
  }
};

module.exports = {
  getAllPersons,
  getOnePerson,
  deletePerson,
  updatePerson,
  createPerson,
  searchByName,
  filterAge,
};
