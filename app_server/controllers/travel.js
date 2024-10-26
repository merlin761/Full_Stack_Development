var fs = require('fs');
var packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
var trips = JSON.parse(fs.readFileSync('data/trips.json', 'utf8'));

/* GET travel view. */
var travel = (req, res) => {

    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};