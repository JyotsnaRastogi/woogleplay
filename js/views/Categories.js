app.views.Categories = Backbone.View.extend({
    events: {
        'click [data-id=category-toggle]': 'toggleCategories',
        'click [data-id=category]': 'selectCategory'
    },

    toggleCategories: function (evt) {
        evt.preventDefault();
        this.$('.categories').toggleClass('is-visible');
    },

    selectCategory: function (evt) {
        this.$('.categories').removeClass('is-visible');
    }
});