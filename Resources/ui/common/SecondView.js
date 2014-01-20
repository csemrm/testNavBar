//FirstView Component Constructor
function SecondView(navController) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createWindow({
		title : '2nd Window ' + navController.windowStack.length,
		backgroundColor : '#fff',
		// layout:'vertical'
	});

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color : '#000000',
		text : 'SecondView Window layout not set and fields positions are hard, set DatePicker Shows',
		//height:30,
		top : 10,
		width : 'auto',
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(label);
	var navBtn = Ti.UI.createButton({
		title : 'Next'
	});
	navBtn.addEventListener('click', function(e) {
		Window = require('ui/common/ThirdView');
		navController.open(new Window(navController));
	});
	self.rightNavButton = navBtn;
	var textField1 = Ti.UI.createButton({
		top : 50,
		height : 30,
		left : 100,
		width : 150,
		title : '3rd Page',
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(textField1);
	var textField2 = Ti.UI.createButton({
		top : 90,
		height : 30,
		left : 100,
		width : 150,
		title : 'Tab Page',
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(textField2);
	var textField3 = Ti.UI.createTextField({
		top : 130,
		left : 100,
		height : 30,
		width : 150,
		hintText : 'enter stuff',
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(textField3);
	var dateField = Ti.UI.createTextField({
		top : 170,
		left : 100,
		height : 30,
		width : 150,
		hintText : 'Click for date',
		editable : false,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	self.add(dateField);

	textField1.addEventListener('click', function(e) {

		Window = require('ui/common/ThirdView');
		navController.open(new Window(navController));
	});

	textField2.addEventListener('click', function(e) {
		Window = require('ui/common/TabView');
		navController.open(new Window(navController));

	});

	textField3.addEventListener('click', function(e) {

		picker.visible = false;
		toolbar1.visible = false;
	});
	textField3.addEventListener('blur', function(e) {
		textField3.blur();
	});

	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});

	var d = new Date();
	var n = d.getFullYear();
	n = n++;
	var picker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
		//useSpinner for Android Only
		useSpinner : true,
		minDate : new Date(2010, 0, 1),
		maxDate : new Date(n, 12, 31),
		value : d,
		selectionIndicator : true,
		bottom : 0
	});
	var pickerLabel = Ti.UI.createLabel({

	});
	var cancel = Titanium.UI.createButton({
		title : 'Cancel',
		style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	});
	var done1 = Titanium.UI.createButton({
		title : 'Done',
		style : Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	var spacer = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	var toolbar1 = Titanium.UI.iOS.createToolbar({
		bottom : 210,
		items : [cancel, spacer, pickerLabel, spacer, done1]
	});
	cancel.addEventListener('click', function(e) {
		picker.hide();
		toolbar1.hide();
	});
	done1.addEventListener('click', function(e) {
		dateField.setValue(picker.value);
		picker.hide();
		toolbar1.hide();
	});
	self.add(toolbar1);
	picker.addEventListener('change', function() {
		dateField.setValue(picker.value);
	});
	self.add(picker);
	picker.hide();
	toolbar1.hide();
	dateField.addEventListener('click', function(e) {
		textField3.blur();
		pickerLabel.text = e.source.columnName;
		picker.visible = true;
		toolbar1.visible = true;
	});

	return self;
}

module.exports = SecondView;
