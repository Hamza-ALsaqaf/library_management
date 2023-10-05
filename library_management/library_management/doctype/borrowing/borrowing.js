// Copyright (c) 2023, Nora and contributors
// For license information, please see license.txt

frappe.ui.form.on('Borrowing', {
	refresh: function(frm) {
		frm.set_value("from_date", frappe.datetime.nowdate());
		frm.set_value("to_date", frappe.datetime.add_days(frappe.datetime.nowdate(), 10));
	},

		book : async function(frm){
			
			var borrowed_books = await frappe.db.get_list("Borrowing", {
				filters: {
				"book": frm.doc.book,
				"status": "Borrowed"
				},
				fields : ['*']
			});

			console.log(borrowed_books);

			var borrowed_book_copies_list = borrowed_books.map((book) => book.book_copy);
			console.log(borrowed_book_copies_list);


		frm.set_query("book_copy", function() {
			return {
				"filters": {
					"name": ['not in', borrowed_book_copies_list],

					"book": ['=', frm.doc.book]
				}
			};
		});

	}
});
