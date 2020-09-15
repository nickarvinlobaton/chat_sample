const cluster = require("./dbconfig");

// Bucket name
const bucketName = "intake_sample";

const bucket = cluster.bucket(bucketName);
const collection = bucket.defaultCollection();

const addPatient = async (doc) => {
  const key = `patient_${doc.id}`;

  let qs = `INSERT INTO \`${bucketName}\` (KEY, VALUE) VALUES ("${key}", ${JSON.stringify(
    doc
  )}) RETURNING *`;

  try {
    let result = await cluster.query(qs);
    return result;
  } catch (e) {
    return e;
  }
};

module.exports = {
  addPatient,
};
