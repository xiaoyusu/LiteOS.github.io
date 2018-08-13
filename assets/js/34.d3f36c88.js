(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{547:function(_,t,v){"use strict";v.r(t);var s=v(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"事件错误码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件错误码","aria-hidden":"true"}},[_._v("#")]),_._v(" 事件错误码")]),_._v(" "),v("p",[_._v("对事件存在失败的可能性操作，包括事件初始化，事件销毁，事件读写，时间清除。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("序号")]),_._v(" "),v("th",[_._v("定义")]),_._v(" "),v("th",[_._v("实际值")]),_._v(" "),v("th",[_._v("描述")]),_._v(" "),v("th",[_._v("参考解决方案")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_SETBIT_INVALID")])]),_._v(" "),v("td",[_._v("0x02001c00")]),_._v(" "),v("td",[_._v("事件ID的第25个bit不能设置为1，因为该位已经作为错误码使用")]),_._v(" "),v("td",[_._v("事件ID的第25bit置为0")])]),_._v(" "),v("tr",[v("td",[_._v("2")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_READ_TIMEOUT")])]),_._v(" "),v("td",[_._v("0x02001c01")]),_._v(" "),v("td",[_._v("读超时")]),_._v(" "),v("td",[_._v("增加等待时间或者重新读取")])]),_._v(" "),v("tr",[v("td",[_._v("3")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_EVENTMASK_INVALID")])]),_._v(" "),v("td",[_._v("0x02001c02")]),_._v(" "),v("td",[_._v("入参的事件ID是无效的")]),_._v(" "),v("td",[_._v("传入有效的事件ID参数")])]),_._v(" "),v("tr",[v("td",[_._v("4")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_READ_IN_INTERRUPT")])]),_._v(" "),v("td",[_._v("0x02001c03")]),_._v(" "),v("td",[_._v("在中断中读取事件")]),_._v(" "),v("td",[_._v("启动新的任务来获取事件")])]),_._v(" "),v("tr",[v("td",[_._v("5")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_FLAGS_INVALID")])]),_._v(" "),v("td",[_._v("0x02001c04")]),_._v(" "),v("td",[_._v("读取事件的mode无效")]),_._v(" "),v("td",[_._v("传入有效的mode参数")])]),_._v(" "),v("tr",[v("td",[_._v("6")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_READ_IN_LOCK")])]),_._v(" "),v("td",[_._v("0x02001c05")]),_._v(" "),v("td",[_._v("任务锁住，不能读取事件")]),_._v(" "),v("td",[_._v("解锁任务，再读取事件")])]),_._v(" "),v("tr",[v("td",[_._v("7")]),_._v(" "),v("td",[v("code",[_._v("LOS_ERRNO_EVENT_PTR_NULL")])]),_._v(" "),v("td",[_._v("0x02001c06")]),_._v(" "),v("td",[_._v("传入的参数为空指针")]),_._v(" "),v("td",[_._v("传入非空入参")])])])]),_._v(" "),v("p",[v("strong",[_._v("错误码定义：")]),_._v(" 错误码是一个32位的存储单元，31~24位表示错误等级，23~16位表示错误码标志，15~8位代表错误码所属模块，7~0位表示错误码序号，如下")]),_._v(" "),v("div",{staticClass:"language-c extra-class"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[v("span",{attrs:{class:"token macro property"}},[_._v("#"),v("span",{attrs:{class:"token directive keyword"}},[_._v("define")]),_._v(" LOS_ERRNO_OS_ERROR(MID, ERRNO)  ")]),_._v("\n"),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("LOS_ERRTYPE_ERROR "),v("span",{attrs:{class:"token operator"}},[_._v("|")]),_._v(" LOS_ERRNO_OS_ID "),v("span",{attrs:{class:"token operator"}},[_._v("|")]),_._v(" "),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("UINT32"),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("MID"),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{attrs:{class:"token operator"}},[_._v("<<")]),_._v(" "),v("span",{attrs:{class:"token number"}},[_._v("8")]),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),v("span",{attrs:{class:"token operator"}},[_._v("|")]),_._v(" "),v("span",{attrs:{class:"token punctuation"}},[_._v("(")]),_._v("ERRNO"),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])])]),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[_._v("说明")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("LOS_ERRTYPE_ERROR")]),_._v(" ：Define critical OS errors")]),_._v(" "),v("li",[v("code",[_._v("LOS_ERRNO_OS_ID")]),_._v(" ：OS error code flag")]),_._v(" "),v("li",[v("code",[_._v("MID")]),_._v(" ：OS_MOUDLE_ID")]),_._v(" "),v("li",[v("code",[_._v("LOS_MOD_EVENT")]),_._v(" ：Event module ID")]),_._v(" "),v("li",[v("code",[_._v("ERRNO")]),_._v(" ：error ID number")])]),_._v(" "),v("p",[_._v("例如：")]),_._v(" "),v("div",{staticClass:"language-c extra-class"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[v("span",{attrs:{class:"token macro property"}},[_._v("#"),v("span",{attrs:{class:"token directive keyword"}},[_._v("define")]),_._v(" LOS_ERRNO_EVENT_READ_IN_LOCK  LOS_ERRNO_OS_ERROR(LOS_MOD_EVENT, 0x05)  ")]),_._v("\n")])])])])])}],!1,null,null,null);a.options.__file="errorcode-event.md";t.default=a.exports}}]);