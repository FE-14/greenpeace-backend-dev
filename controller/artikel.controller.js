const models = require("../models/index");

function createArtikel(req, res) {
  models.Artikels.create(req.body).then((artikel) => {
    if (!artikel) {
      console.log(error.message);
    } else {
      const newDate = convertDate(artikel.createdAt);
      models.Artikels.update(
        { createdAt: newDate },
        {
          where: {
            id: artikel.id,
          },
        }
      );
      res.status(200).json({ message: "Artikel Created" });
    }
  });
}

function getArtikel(req, res) {
  models.Artikels.findAll().then((artikel) => {
    if (artikel === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(200).json(artikel);
    }
  });
}

function getArtikelbyId(req, res) {
  models.Artikels.findOne({
    where: {
      id: req.params.id,
    },
  }).then((artikel) => {
    if (artikel === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(200).json(artikel);
    }
  });
}

function convertDate(date) {
  var newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return newDate;
}

function updateArtikel(req, res) {
  models.Artikels.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((artikel) => {
    if (artikel === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(200).json({ message: "Artikel Updated" });
    }
  });
}

function deleteArtikel(req, res) {
  try {
    models.Artikels.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Artikel Deleted" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  createArtikel: createArtikel,
  getArtikel: getArtikel,
  getArtikelbyId: getArtikelbyId,
  updateArtikel: updateArtikel,
  deleteArtikel: deleteArtikel,
};
