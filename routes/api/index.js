const path = require('path');
const router = require('express').Router();

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/indext.html"))
});

module.exports = router;