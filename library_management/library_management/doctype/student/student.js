
frappe.ui.form.on('Student', {
	collage: function (frm){
		console.log(frm.doc.collage);
		frm.set_query("department", function() {
			return {
				"filters": {
					"collage": frm.doc.collage
				}
			};
		});
	}
});
