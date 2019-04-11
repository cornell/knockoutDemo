import ko from 'knockout';

ko.components.register('purge-notification', {
    viewModel: function(params) {
        // Data: value is either null, 'like', or 'dislike'
        // this.title = params.viewModel;
        return params.model;
         
        // // Behaviors
        // this.like = function() { this.chosenValue('like'); }.bind(this);
        // this.dislike = function() { this.chosenValue('dislike'); }.bind(this);
    },
    template:
        '<div class="Notification" >' +
            '<div data-bind="text: title"></div>' +
            '<div class="ProgressBar">' +
                '<div data-bind="class: progressStatus, style:{width: progress + \'%\'}"></div>' +
            '</div>' +
        '</div>'
});