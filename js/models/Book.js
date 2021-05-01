app.models.Book = Backbone.Model.extend({
    url: function () {
        return 'https://www.googleapis.com/books/v1/volumes/' + this.get("id");
    }
}) 