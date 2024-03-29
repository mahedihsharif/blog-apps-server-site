const router = require("express").Router();
const Category = require("../BlogSchemas/Category");

//CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CATEGORY
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find({});
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
