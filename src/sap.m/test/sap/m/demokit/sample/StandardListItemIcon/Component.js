sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.StandardListItemIcon.Component", {

		metadata : {
			rootView : "sap.m.sample.StandardListItemIcon.List",
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					files : [
						"List.view.xml",
						"List.controller.js"
					]
				}
			}
		}
	});

	return Component;

});
