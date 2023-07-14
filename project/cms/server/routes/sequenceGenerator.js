var Sequence = require("../models/sequence");

var maxDocumentId;
var sequenceId = null;

function SequenceGenerator() {
  Sequence.findOne().exec(function (err, sequence) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err,
      });
    }

    sequenceId = sequence._id;
    maxDocumentId = sequence.maxDocumentId;
  });
}

SequenceGenerator.prototype.nextId = function (collectionType) {
  var updateObject = {};
  var nextId;

  switch (collectionType.toLowerCase()) {
    case "documents":
      maxDocumentId++;
      updateObject = { maxDocumentId: maxDocumentId };
      nextId = maxDocumentId;
      break;
    default:
      return -1;
  }

  Sequence.updateOne({ _id: sequenceId }, { $set: updateObject }).catch(
    (err) => {
      console.log("nextId error = " + err);
      return null;
    }
  );

  return nextId;
};

module.exports = new SequenceGenerator();
