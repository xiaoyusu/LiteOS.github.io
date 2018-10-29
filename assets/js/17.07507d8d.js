(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{716:function(e,t,_){"use strict";_.r(t);var v=_(0),r=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"event-error-codes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#event-error-codes","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Error Codes")]),e._v(" "),_("p",[e._v("Error codes are returned if errors occur during event operations, such as event initialization, event destroying, event reading, event writing, and event clearance, to facilitate fault locating.")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("No.")]),e._v(" "),_("th",[e._v("Definition")]),e._v(" "),_("th",[e._v("Error Code")]),e._v(" "),_("th",[e._v("Description")]),e._v(" "),_("th",[e._v("Solution")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("1")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_SETBIT_INVALID")])]),e._v(" "),_("td",[e._v("0x02001c00")]),e._v(" "),_("td",[e._v("Bit 25 of the event ID must not be set to 1 because it is reserved as an error code.")]),e._v(" "),_("td",[e._v("Set bit 25 of the event ID to 0.")])]),e._v(" "),_("tr",[_("td",[e._v("2")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_READ_TIMEOUT")])]),e._v(" "),_("td",[e._v("0x02001c01")]),e._v(" "),_("td",[e._v("Event reading times out.")]),e._v(" "),_("td",[e._v("Increase the permitted wait time. Alternatively, re-read the event.")])]),e._v(" "),_("tr",[_("td",[e._v("3")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_EVENTMASK_INVALID")])]),e._v(" "),_("td",[e._v("0x02001c02")]),e._v(" "),_("td",[e._v("The passed-in event ID is invalid.")]),e._v(" "),_("td",[e._v("Pass in a valid event ID.")])]),e._v(" "),_("tr",[_("td",[e._v("4")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_READ_IN_INTERRUPT")])]),e._v(" "),_("td",[e._v("0x02001c03")]),e._v(" "),_("td",[e._v("The event is being read when an interrupt is being processed.")]),e._v(" "),_("td",[e._v("Let a new task read the event.")])]),e._v(" "),_("tr",[_("td",[e._v("5")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_FLAGS_INVALID")])]),e._v(" "),_("td",[e._v("0x02001c04")]),e._v(" "),_("td",[e._v("The mode of event reading is invalid.")]),e._v(" "),_("td",[e._v("Pass in a valid mode.")])]),e._v(" "),_("tr",[_("td",[e._v("6")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_READ_IN_LOCK")])]),e._v(" "),_("td",[e._v("0x02001c05")]),e._v(" "),_("td",[e._v("The task is locked and fails to read the event.")]),e._v(" "),_("td",[e._v("Unlock the task, and then let the task read the event.")])]),e._v(" "),_("tr",[_("td",[e._v("7")]),e._v(" "),_("td",[_("code",[e._v("LOS_ERRNO_EVENT_PTR_NULL")])]),e._v(" "),_("td",[e._v("0x02001c06")]),e._v(" "),_("td",[e._v("The passed-in pointer is null.")]),e._v(" "),_("td",[e._v("Pass in a non-null pointer.")])])])]),e._v(" "),_("p",[e._v("An error code is a 32-bit storage unit. Bit 24 to bit 31 indicate an error level; bit 16 to bit 23 indicate an error code flag; bit 8 to bit 15 indicate the ID of the module that reports the error code; bit 0 to bit 7 indicate an error code. The following is the example of an error code:")]),e._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token macro property"}},[e._v("#"),_("span",{attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" LOS_ERRNO_OS_ERROR(MID, ERRNO)  \\\n(LOS_ERRTYPE_ERROR | LOS_ERRNO_OS_ID | ((UINT32)(MID) << 8) | (ERRNO))")]),e._v("\n")])])]),_("div",{staticClass:"tip custom-block"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("LOS_ERRTYPE_ERROR")]),e._v(": Define critical OS errors")]),e._v(" "),_("li",[_("code",[e._v("LOS_ERRNO_OS_ID")]),e._v(": OS error code flag")]),e._v(" "),_("li",[_("code",[e._v("MID")]),e._v(": OS_MOUDLE_ID")]),e._v(" "),_("li",[_("code",[e._v("LOS_MOD_EVENT")]),e._v(": Event module ID")]),e._v(" "),_("li",[_("code",[e._v("ERRNO")]),e._v(": error ID number")])]),e._v(" "),_("p",[e._v("For example:")]),e._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token macro property"}},[e._v("#"),_("span",{attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" LOS_ERRNO_EVENT_READ_IN_LOCK LOS_ERRNO_OS_ERROR(LOS_MOD_EVENT, 0x05)")]),e._v("\n")])])])])])}],!1,null,null,null);r.options.__file="errorcode-event.md";t.default=r.exports}}]);