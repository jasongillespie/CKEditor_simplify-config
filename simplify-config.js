CKEDITOR.editorConfig = function( config ) {
	config.allowedContent = true; // allows all HTML elements, including ones not in the default set (e.g. <figure> and <figcaption>)
	CKEDITOR.timestamp='LOLCACHE'; // bogus value forces a reset of custom styles
};

CKEDITOR.on( 'dialogDefinition', function( ev ) {
	
	// Take the dialog name and its definition from the event data.
	var dialogName = ev.data.name;
	var dialogDefinition = ev.data.definition;

	if (dialogName == 'image') {

		dialogDefinition.removeContents('advanced');
		dialogDefinition.removeContents('Link');

		// Get a reference to the 'Link Info' tab. 
		var infoTab = dialogDefinition.getContents('info'); 
		infoTab.remove('ratioLock'); 
		infoTab.remove('txtHeight');          
		infoTab.remove('txtWidth');          
		infoTab.remove('txtBorder'); 
		infoTab.remove('txtHSpace'); 
		infoTab.remove('txtVSpace'); 
		infoTab.remove('cmbAlign');
	
		dialogDefinition.onLoad = function () { 
	            var dialog = CKEDITOR.dialog.getCurrent(); 
	            var elem = dialog.getContentElement('info','htmlPreview');     
	            elem.getElement().hide(); 
	        }; 
	}

	else if (dialogName == 'table') { 
		dialogDefinition.removeContents('advanced'); 
 		var infoTab = dialogDefinition.getContents('info');
 		infoTab.remove('txtCellPad');
 		infoTab.remove('txtCellSpace');
 		infoTab.remove('txtBorder');
 		infoTab.remove('txtHeight');
 		infoTab.remove('txtWidth');
 		infoTab.remove('cmbAlign');
 		infoTab.remove('txtCaption');
 		infoTab.remove('txtSummary');
 	} 

 	else if (dialogName = 'link') {
		dialogDefinition.removeContents('advanced');
		dialogDefinition.removeContents('target');
 	}

});
