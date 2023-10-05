# Copyright (c) 2023, Nora and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Borrowing(Document):
	def validate(self):
		# frappe.msgprint(self.student)
		if self.from_date > self.to_date : 
			frappe.throw("Enter Validated Date")
		
		student_memberships = frappe.get_all( "Membership", filters = {
			'student' : self.student,
			'to_date' : ['>', frappe.utils.nowdate()]
		})
		
		if(not student_memberships):
			frappe.throw("The Student has no membership")
