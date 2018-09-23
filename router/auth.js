var express = require("express"),
    auth = require("../controller/auth"),
    router  = express.Router();

router.get('/', auth.googleAuth);

module.exports  = router;
