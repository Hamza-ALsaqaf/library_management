// Copyright (c) 2023, Hamza ALsaqaf and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	refresh: function (frm) {
		frm.set_value("from_date", frappe.datetime.nowdate());
		frm.set_value("to_date", frappe.datetime.add_days(frappe.datetime.nowdate(), 365));
	}
});
