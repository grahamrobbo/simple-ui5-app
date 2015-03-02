(function() {
	'use strict';

	sap.ui.controller('my.simple.app.view.App', {

		onInit: function() {
			this.oModel = new sap.ui.model.json.JSONModel({
				newtodo: '',
				todos: [
					{
						title: 'Start this app',
						completed: true
					},
					{
						title: 'Learn OpenUI5',
						completed: false
					}
				],
				someCompleted: true,
				completedCount: 1
			});
			this.getView().setModel(this.oModel);
		},

		addtodo: function() {
			var atodos = this.oModel.getObject('/todos');
			atodos.unshift({
				title: this.oModel.getProperty('/newtodo'),
				completed: false
			});
			this.oModel.setProperty('/newtodo', '');
			this.oModel.refresh();
		},

		toggleCompleted: function(oEvent) {
			var iCompletedCount = 0;
			var atodos = this.oModel.getObject('/todos');
			var i = atodos.length;
			while (i--) {
				var otodo = atodos[i];
				if (otodo.completed) {
					iCompletedCount++;
				}
			}
			this.setCompletedCount(iCompletedCount);
			this.oModel.refresh();
		},

		clearCompleted: function(oEvent) {
			var atodos = this.oModel.getObject('/todos');
			var i = atodos.length;
			while (i--) {
				var otodo = atodos[i];
				if (otodo.completed) {
					atodos.splice(i, 1);
				}
			}
			this.setCompletedCount(0);
			this.oModel.refresh();
		},

		setCompletedCount: function(iCount) {
			this.oModel.setProperty('/completedCount', iCount);
			this.oModel.setProperty('/someCompleted', iCount > 0);
			this.oModel.refresh();
		}

	});

})();
