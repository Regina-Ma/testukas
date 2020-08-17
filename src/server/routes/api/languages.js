const router = require("express").Router();
// const addLanguage = require("../../controllers/language");
const getLanguages = require("../../controllers/language").getLanguages;
const addLanguage = require("../../controllers/language").addLanguage;

// get all the data from the database
// router.get("/languages", getLanguages);
router.get("/api/languages", function (req, res) {
  res.send({ type: "GET" });
});

// create a new endpoint to post data to the database
// router.post("/languages", addLanguage);
router.get("/", function (req, res) {
  res.send({ type: "POST" });
  console.log("test");
});

// setup an endpoint to update a particular item in the database
// router.put("/:id", (req, res) => {
//   Language.findById(req.params.id).then((language) => {
//     language
//       .update()
//       .then(() => res.json({ success: true }))
//       // return 404 if not found
//       .catch((err) => res.status(404).json({ success: false }));
//   });
// });

// // endpoint to delete a particular language in the database
// router.delete("/:id", (req, res) => {
//   Language.findById(req.params.id).then((language) => {
//     language
//       .remove()
//       .then(() =>
//         res.json({
//           success: true,
//         })
//       )
//       // return 404 if not found
//       .catch((err) => res.status(404).json({ success: false }));
//   });
// });

module.exports = router;
