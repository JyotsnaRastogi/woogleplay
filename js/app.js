$(function() {
    app.data.router = new app.routers.Router();

    new app.views.Categories({
        el: '.topbar'
    });
    Backbone.history.start();
})
