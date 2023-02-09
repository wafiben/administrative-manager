const express = require("express");
const {
  getAllPersons,
  getOnePerson,
  deletePerson,
  updatePerson,
  createPerson,
  searchByName,
  filterAge,
} = require("../controllers/personController");
const router = express.Router();
router.get("/person", getAllPersons);
router.get("/person/:id", getOnePerson);
router.post("/person", createPerson);
router.delete("/person/:id", deletePerson);
router.put("/person/:id", updatePerson);
router.get("/search", searchByName);
router.get("/filter", filterAge);

module.exports = router;
