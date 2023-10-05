# Copyright (c) 2023, Nora and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Membership(Document):
	def validate (self):
		if self.from_date > self.to_date:
			frappe.throw("From Date must be before To Date .. ")
		
		active_membership = frappe.get_list(
			"Membership",
			  filters={
				"student" : self.student,
				"to_date" : ['>', self.from_date]
			}
		)
		if (active_membership):
			frappe.throw("Student already Member")
