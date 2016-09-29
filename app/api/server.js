var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ data: 'Welcome the the real world!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Listen on port ' + port);
