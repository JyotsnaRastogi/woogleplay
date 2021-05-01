app.routers.Router = Backbone.Router.extend({
    routes: {
        'category/:categoryId/book/:bookId': 'book',
        'category/:categoryId': 'category',
        '': 'home',
        '*default': 'unknown'
    },

    home: function () {
        console.log("Home");
    },

    category: function (categoryId) {
        app.data.book = new app.models.Books(null, {categoryId});
        app.data.book.fetch({reset: true});

        this._cleanUpCurrentView();
        app.data.currentView = new app.views.BooksList({
            collection: app.data.book
        });
        $('[data-id=book-list]').empty().append(app.data.currentView.$el);
        this._showBookList();
        
    },

    book: function (categoryId, bookId) {
        app.data.bookDetail = new app.models.Book({ id: bookId });
        app.data.bookDetail.fetch();
        
        this._cleanUpCurrentView();
        app.data.currentView = new app.views.BookDetail({
            model: app.data.bookDetail
        });

        $('[data-id=book-details]').empty().append(app.data.currentView.$el);
        this._showBookDetail();
    },

    unknown: function () {
        console.log('Unknown route...');
    },

    _showBookList: function () {
        $('[data-id=books-wrapper] .is-visible').removeClass('is-visible');
        $('[data-id=book-list]').addClass('is-visible');
    },

    _showBookDetail: function () {
        $('[data-id=books-wrapper] .is-visible').removeClass('is-visible');
        $('[data-id=book-details]').addClass('is-visible');
    },

    _cleanUpCurrentView: function () {
        if (app.data.currentView) {
            app.data.currentView.remove();
            app.data.currentView = null;
        }
    }
});