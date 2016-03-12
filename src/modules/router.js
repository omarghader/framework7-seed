var about=require('./about/about')
module.exports = {
    init: function() {
        var that = this;
        $$(document).on('pageBeforeInit', function (e) {
            var page = e.detail.page;
            that.pageBeforeInit(page);
        });

        $$(document).on('pageAfterAnimation', function (e) {
            var page = e.detail.page;
            that.pageAfterAnimation(page);
        });
    },
    pageAfterAnimation: function(page){
        var name = page.name;
        var from = page.from;

        if(name === 'homeView' || name === 'contactView' || name === 'setting' ){
            if(from === 'left'){
                F7app.alert("Hello World")
            }
        }
    },
    pageBeforeInit: function(page) {
        var name = page.name;
        var query = page.query;

        switch (name) {
            case 'about':
                about.init()
                break;
            case 'home':
                //init module
                break;

        }
    }
};