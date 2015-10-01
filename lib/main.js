import ko from 'knockout';
import 'lib/utils/koTemplateLoader';
import 'SteveSanderson/knockout-es5';
import 'SteveSanderson/knockout-projections';
// import 'SteveSanderson/knockout.mapping';

import 'lib/pages/page';


let vm = {
	currentComponent: "page"
};

ko.applyBindings(ko.track(vm));