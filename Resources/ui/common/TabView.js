//FirstView Component Constructor
function TabView(navController) {
	//create object instance, a parasitic subclass of Observable
	tabGroup = Titanium.UI.createTabGroup();

	 var self = Ti.UI.createWindow({
    title:'TabWindow ',
    backgroundColor:'#fff',
    navBarHidden: false,
    layout:'vertical'
  });

var ShowInvWindow = require('ui/common/Tabs/Page1');
    var invWindowTab = Titanium.UI.createTab({
      //icon:'book.png',
      navBarHidden: false,
      title:'Page 1',
      window: new ShowInvWindow(navController, self)
    });
    // end 1st windowTab
    
    var ListInvoiceDetails = require('ui/common/Tabs/Page2');
    var invDetailsTab = Titanium.UI.createTab({
      //icon:'book.png',
     // navBarHidden: true,
      title:'Page 2',
      window: new ListInvoiceDetails(navController, self)
    });
    
    var CalcInvoice = require('ui/common/Tabs/Page3');
    var invCalcTab = Titanium.UI.createTab({
      //navBarHidden: true,
      icon:'star.png',
      title:'Page 3',
      window: new CalcInvoice(navController, self)
    });
    
    // this is the calc invoice send pdf email screen
    var FinishInvoice = require('ui/common/Tabs/Page4');
    var invFinishTab = Titanium.UI.createTab({
      navBarHidden: true,
      icon:'star.png',
      title:'Page 4',
      window: new FinishInvoice(navController, self)
    });
  
  
     //  add tabs
    tabGroup.addTab(invWindowTab);
    tabGroup.addTab(invDetailsTab);
    tabGroup.addTab(invCalcTab);
    tabGroup.addTab(invFinishTab);
    if (Ti.UI.Android) {
       //tabGroup.open();
       //tabGroup.open(invWindowTab);
       return tabGroup;
     } else {
       // before version 3.1.3 and 3.2.0 we added the tabgroup to this window and everything worked
       // provided that the navbarhidden was set to true.
       // in 3.1.3 and 3.2.0 if this is left like this we do not get the navigationBar unless we 
       // set the navbarhidden to false, but we still cannot navigate back out of the tabgroup
       // no we can only return the tabgroup instead of the window or self
       
       // uncomment for 3.1.3 & 3.2.0
       /*
       tabGroup.open();
       self.add(tabGroup);
       return self;
       */
      
      return tabGroup; // uncomment for 3.1.3 & 3.2.0
    }
    
  //return self;
  
}

module.exports = TabView;
