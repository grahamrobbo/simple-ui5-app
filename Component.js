sap.ui.core.UIComponent.extend('my.simple.app.Component', {
	metadata: {
		name: 'Sample my.simple.app app',
		version: '1.0.0',
		includes: ['css/styles.css'],
		dependencies: {
			libs: ['sap.m']
		},
		rootView: 'my.simple.app.view.App'
	}
});
