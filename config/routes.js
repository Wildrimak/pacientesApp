var path = require('path');

module.exports  = function(app) {

    app.route('/v1/fotos');

    app.route('/v1/fotos/:fotoId');;

    app.get('/v1/grupos')
    app.get('/v1/fotos/grupo/:grupoId');


    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};
