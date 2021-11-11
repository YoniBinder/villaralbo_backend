let Match = require("../models/Matches");

exports.getNextMatch= function (req, res) {
    Match.find({}, function (err, result) {
      if (err) {
        return res.send(err);
      }
    //   res.setHeader("Content-Range", `${result.length}`);
      res.json(result);
    });
  };