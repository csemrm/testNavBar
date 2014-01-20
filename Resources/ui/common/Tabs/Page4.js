//FirstView Component Constructor
function Page4(navController, parent) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createWindow({
    title:'Page 4',
    backgroundColor:'#fff',
    layout:'vertical',
    navBarHidden: true
  });

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'4th page in the tabgroup',
		height:30,
		top: 60,
		width:'auto',
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(label);
  var btn1 = Ti.UI.createButton({
    top: 20,
    left: 20,
    width: 250,
    title: 'Open Page outside TabGroup',
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  });
  self.add(btn1); 

  btn1.addEventListener('click', function(e){
    
    Window = require('ui/common/FithView');
    navController.open(new Window(navController));
  });

    updateButtonFinish = Ti.UI.createButton({
      title : 'Calc Totals'
    });
    
    updateButtonFinish.addEventListener('click', function(e) {
      alert('Finish Invoice Window Update button Click Event');
    });
    
    self.addEventListener('focus', function(e) {
       parent.rightNavButton = updateButtonFinish;
       parent.title = 'Page 4';
     });
     
     self.addEventListener('blur', function(e) {
       parent.rightNavButton = null;
       parent.title = 'TabGroup';
     });
    
      
	return self;
}

module.exports = Page4;
