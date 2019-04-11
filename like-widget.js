import ko from 'knockout';

ko.components.register('like-widget', {
    viewModel: function(params) {
        // Data: value is either null, 'like', or 'dislike'
        // this.title = params.viewModel;
        return params.model;
         
        // // Behaviors
        // this.like = function() { this.chosenValue('like'); }.bind(this);
        // this.dislike = function() { this.chosenValue('dislike'); }.bind(this);
    },
    template:
        '<div class="like-or-dislike" data-bind="text: title">\
        </div>'
});