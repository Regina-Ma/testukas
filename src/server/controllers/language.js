const Language = require("../models/language");

exports.getLanguages = (req, res) => {
  Language.find().then((languages) => res.json(languages));
};

exports.addLanguage = (req, res) => {
  const languageToPost = new Language({
    languageName: req.body.languageName,
    // pages: req.body.pages,
  });
  languageToPost.save().then((languageName) => res.json(languageName));
};
