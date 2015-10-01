import ko from 'knockout';
import $ from 'jquery';

var templateFromUrlLoader = {
    loadTemplate(name, templateConfig, callback) {
        if (templateConfig.fromUrl) {
            var fullUrl = templateConfig.fromUrl;
            $.get(fullUrl, markupString => {
                ko.components.defaultLoader.loadTemplate(name, markupString, callback);
            });
        } else {
            // Unrecognized config format. Let another loader handle it.
            callback(null);
        }
    }
};
 
// Register it
ko.components.loaders.unshift(templateFromUrlLoader);