# Copyright (c) 2023, Hamza ALsaqaf and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus


# frappe utils
class LibraryMembership(Document):
    def before_submit(self):
        exists = frappe.db.exists("Library Membership",
                                  {"library_member": self.library_member,
                                   "docstatus": DocStatus.submitted(),
                                   # check if the membership's end date is later than this membership's start date
                                   "to_date": (">", self.from_date), },
                                  )
        if exists:
            frappe.throw("There is an active membership for this member")

    def validate(self):
        if self.from_date > self.to_date:
            frappe.throw("fROM date Must ")
