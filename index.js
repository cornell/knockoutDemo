import widget from './like-widget';
import ko from 'knockout';

var model = function(){
    this.title = 'coucou';
}
ko.applyBindings(new model());