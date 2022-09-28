const router = require("express").Router();
const mariadb = require("../dbConnect");
router.get("/", (req, res) => {
  const sql = "SELECT title,contents,date FROM notice";
  mariadb.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    return res.send(result);
  });
});

module.exports = router;
