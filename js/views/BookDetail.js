app.views.BookDetail = Backbone.View.extend({

    template: _.template($('script[data-id=book-detail-view]').html()), 
    initialize: function (options) {
        this.options = options;
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        var volumeInfo = this.model.get("volumeInfo");
        var imageLink = volumeInfo.imageLinks;

    
        this.$el.html(this.template({
            volumeInfo,
            imageLink
        }));
        
        return this;
    }  
});