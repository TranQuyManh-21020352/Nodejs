class SiteController{
    index(req, res){
         res.render('search');
    }

    search(req, res){
        res.render('search');
    }
}

module.exports =  new SiteController;