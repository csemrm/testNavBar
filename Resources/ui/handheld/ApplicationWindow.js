//Application Window Component Constructor
function ApplicationWindow(navController) {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
/*
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var firstView = new FirstView(navController);
	self.add(firstView);

  navController.open(new firstView(navController));
  */
  var self = new FirstView(navController);
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
