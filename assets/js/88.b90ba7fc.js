(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{603:function(t,a,s){"use strict";s.r(a);var n=s(0),_=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"点灯演示工程（简）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点灯演示工程（简）","aria-hidden":"true"}},[t._v("#")]),t._v(" 点灯演示工程（简）")]),t._v(" "),s("p",[t._v("知识点：任务，队列，定时器\n业务流程：")]),t._v(" "),s("ol",[s("li",[t._v("创建一个队列（队列大小为1）和两个任务TX/RX")]),t._v(" "),s("li",[t._v("TX表示发送队列，RX表示接收队列，RX优先级高于TX")]),t._v(" "),s("li",[t._v("TX精确没200ms想队列发送命令，比如100")]),t._v(" "),s("li",[t._v("RX接收从队列中读取数据，如果等于100，控制灯LED开关")])]),t._v(" "),s("h3",{attrs:{id:"资源使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源使用")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("任务")]),t._v(" "),s("th",[t._v("消息队列")]),t._v(" "),s("th",[t._v("软件定时器")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h3",{attrs:{id:"简要说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简要说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 简要说明")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("根据资源使用情况，确认系统的配置文件，相应资源是否配备")])]),t._v(" "),s("li",[s("p",[t._v("软件定时器，配置为周期模式，定时向队列中写入消息")])]),t._v(" "),s("li",[s("p",[t._v("接收任务，从队列中读取消息，检查是否是期望的数据并输出相关信息；如果没有数据，该任务会阻塞。")])])]),t._v(" "),s("h3",{attrs:{id:"修改-main-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-main-c","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 main.c")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("/* USER CODE BEGIN 2 */")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LOS_KernelInit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token function"}},[t._v("LOS_Inspect_Entry")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token function"}},[t._v("LOS_Start")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/* USER CODE END 2 */")]),t._v("\n")])])]),s("h2",{attrs:{id:"功能验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能验证")])])}],!1,null,null,null);_.options.__file="a-simple-blink-demo.md";a.default=_.exports}}]);