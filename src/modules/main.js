// require('framework7');
require('../style/less/app.less');

var appFunc = require('./utils/appFunc'),
    router = require('./router')

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        if(appFunc.isPhonegap()) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }else{
            window.onload = this.onDeviceReady();
        }
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(event) {
        switch (event) {
            case 'deviceready':
                app.initMainView();
                break;
        }
    },
    initMainView:function(){
        var lang="en-us"      //or Locale
        switch (lang){
            case 'en-us':
                require(['./lang/en-us'], function(lang){
                    window.i18n = lang;
                    app.initFramework7();
                });
                break;
            case 'ar-lb':
                require(['./lang/ar-lb'], function(lang){
                    window.i18n = lang;
                    app.initFramework7();
                });
                break;
        }

    },
    initFramework7: function(){

        //Register custom Template7 helpers
        Template7.registerHelper('t', function (options){
            var key = options.hash.i18n || '';
            var keys = key.split('.');

            var value;
            for (var idx = 0, size = keys.length; idx < size; idx++)
            {
                if (value != null)
                {
                    value = value[keys[idx]];
                } else {
                    value = i18n[keys[idx]];
                }

            }
            return value;
        });

        window.$$ = Dom7;
        window.F7app = new Framework7({
            pushState: false,
            popupCloseByOutside:false,
            animateNavBackIcon: true,
            // modalTitle: i18n.global.modal_title,
            modalButtonOk: "ok",
            modalButtonCancel: "cancel",
            template7Pages: true,
            material:true,
            template7Data: {
                'page:about': {
                    appName: i18n.app.name,
                    about: i18n.global.about
                },
            }
        });

        window.homeF7View = F7app.addView('.view-main', {
            dynamicNavbar: true
        });

        // init app
        router.init();
    }
};

app.initialize();
