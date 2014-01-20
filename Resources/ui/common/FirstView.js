//FirstView Component Constructor
function FirstView(navController) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createWindow({
    title:'Window '+ navController.windowStack.length,
    backgroundColor:'#fff',
    layout:'vertical'
  });

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:30,
		top: 40,
		width:'auto',
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(label);
  var textField1 = Ti.UI.createButton({
    top: 20,
    left: 100,
    width: 150,
    title: 'Login into App',
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  });
  self.add(textField1); 

  textField1.addEventListener('click', function(e){
    
    Window = require('ui/common/SecondView');
    navController.open(new Window(navController));
  });
 
      
	return self;
}

module.exports = FirstView;
