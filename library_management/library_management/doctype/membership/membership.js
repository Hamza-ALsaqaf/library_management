// Copyright (c) 2023, Nora and contributors
// For license information, please see license.txt

frappe.ui.form.on('Membership', {
	refresh: function(frm) {
		console.log("Hiiiii");
		frm.set_value("from_date", frappe.datetime.nowdate());
		frm.set_value("to_date", frappe.datetime.add_days(frappe.datetime.nowdate(), 365));
	}
});
