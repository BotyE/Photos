const fs= require("fs");

module.exports = function(app) {

    function isFolder(path) {
        return fs.lstatSync(path).isDirectory() && fs.existsSync(path)
    }

    app.get('/api/', (req,res) => {
        const base = './files/';
        let path = '';

        if('path' in req.query) {
            path=req.query.path;
        }

        if(isFolder(base+path)) {
            let files = fs.readdirSync(base+path);
            res.json(files)
        }
    })

}