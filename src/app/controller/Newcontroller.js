class NewController{
    index(req, res){
         res.render('news');
    }

    show(req, res){
        res.send('views hot');
    }
}

module.exports =  new NewController;