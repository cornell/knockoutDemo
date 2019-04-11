import './index.scss';
import notification from './notification';

import ko from 'knockout';

var model = function(){
    var self = this;
    self.title = 'Analyse des répertoires';
    self.progress = 74;
    self.progressStatus = ko.computed(function() {
        return self.progress != 100 ? 'ProgressBar-value is-info' :  'ProgressBar-value is-success'
    });
}
ko.applyBindings(new model());