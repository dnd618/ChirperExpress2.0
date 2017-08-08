var express = require('express'),
    router = express.Router();

//Chirps page
router.get(function(req, res){
        fs.readFile(jsonPath, function(err, file) {
            if (err) {
                res.writeHead(500);
                res.send('Can not read file');
            }

            res.write(file);
            res.send();
        });
})

module.exports = router