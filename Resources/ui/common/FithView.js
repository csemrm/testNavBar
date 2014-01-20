//FirstView Component Constructor
function FithView(navController) {
	//create object instance, a parasitic subclass of Observable
  var self = Ti.UI.createWindow({
    title:'5th Window '+ navController.windowStack.length,
    backgroundColor:'#fff',
    layout:'vertical'
  });

//label using localization-ready strings from <app dir>/i18n/en/strings.xml
  var label = Ti.UI.createLabel({
    color:'#000000',
    text:'5th window so we can navigate out of the tab group and back to the tab group',
    //height:30,
    top: 10,
    width:'auto',
    borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  });
  self.add(label);
  
  return self;
}

module.exports = FithView;
