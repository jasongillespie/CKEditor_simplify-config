CKEDITOR.on( 'dialogDefinition', function( ev )
	{
		// Take the dialog name and its definition from the event data.
		var dialogName = ev.data.name;
		var dialogDefinition = ev.data.definition;
 
		if ( dialogName == 'image' ) {

			// FCKConfig.ImageDlgHideAdvanced = true	
			dialogDefinition.removeContents('advanced');

			// FCKConfig.ImageDlgHideLink = true
			dialogDefinition.removeContents('Link');

			dialogDefinition.removeContents('width');

			// Get a reference to the 'Link Info' tab. 
			var infoTab = dialogDefinition.getContents('info'); 
			infoTab.remove( 'ratioLock' ); 
        	infoTab.remove( 'txtHeight' );          
        	infoTab.remove( 'txtWidth' );          
        	infoTab.remove( 'txtBorder'); 
        	infoTab.remove( 'txtHSpace'); 
        	infoTab.remove( 'txtVSpace'); 
        	infoTab.remove( 'cmbAlign' );

        	dialogDefinition.onLoad = function () { 
	            var dialog = CKEDITOR.dialog.getCurrent(); 
	            var elem = dialog.getContentElement('info','htmlPreview');     
	            elem.getElement().hide(); 
	        }; 
		}
 
	});