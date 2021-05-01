app.models.Books = Backbone.Collection.extend({

    initialize: function (models, options) {
        this.options = options;
        this.categoryId = options.categoryId;
    },

    url: function() {
        return 'api/books_' + this.options.categoryId + '.json';
    }
});