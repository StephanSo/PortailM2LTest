const parser = require('rss-parser');

exports.rss = function(req, res, next) {

    parser.parseURL('http://www.lorfm.com/actualites/sport.rss', function(err, parsed) {
        console.log(parsed.feed.title);
        console.log(parsed.feed.entries.length);
        //console.log(_.size(parsed.feed.entries));
        parsed.feed.entries.forEach(function(entry) {
            //console.log(entry.title + ':' + entry.link);
        })
        res.render('espacesPresse', { titre: 'Espaces des Presses', donnees : parsed });

    })
}