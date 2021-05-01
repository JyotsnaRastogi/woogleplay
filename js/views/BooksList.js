app.views.BooksList = Backbone.View.extend({

    template: _.template($('script[data-id=book-list-view]').html()), 

    initialize: function (options) {
        this.options = options;
        this.listenTo(this.collection, 'change reset', this.render);
    },

    render: function () {
        this.$el.html('<ul class="center"></ul>');
        var $ul = this.$('ul');

        var bookPath = "#category/" + this.collection.categoryId + "/book/";
        this.collection.each(model => {
            $ul.append(this.template({
                bookDetailPath: bookPath + model.get("id"),
                bookImageUrl: model.get("volumeInfo").imageLinks.thumbnail
            }));
        });
        return this;
    }
});