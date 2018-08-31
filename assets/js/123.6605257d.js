(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{656:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"范例01（任务创建实验）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范例01（任务创建实验）","aria-hidden":"true"}},[t._v("#")]),t._v(" 范例01（任务创建实验）")]),t._v(" "),s("p",[t._v("RTOS 与前后台进程方案最大的差别就是对多任务的管理，OS 会对多个同等优先级任务平均分配 CPU 时间片。从而达到每个任务在单个 CPU 上实现并行处理的效果。不会因为某个任务长期占用 CPU，而卡住其他任务运行。")]),t._v(" "),s("h2",{attrs:{id:"功能说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),s("p",[t._v("主线程创建两个Task，优先级相同的情况下，Task1和Task2会轮询")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这里没有使用 LiteOS 内置的时延函数，而是利用 for 循环，是因为 for 循环不会主导进行任务间切换。")])]),t._v(" "),s("h2",{attrs:{id:"代码讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码讲解")]),t._v(" "),s("h3",{attrs:{id:"_1-使用-los-taskcreate-创建两个任务，任务优先级同为-4；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-los-taskcreate-创建两个任务，任务优先级同为-4；","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 使用 "),s("code",[t._v("LOS_TaskCreate")]),t._v(" 创建两个任务，任务优先级同为 4；")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("UINT32 "),s("span",{attrs:{class:"token function"}},[t._v("Example01_Entry")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Example01_Entry\\r\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_Task1"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_DEFAULT_PRIO"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Task1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskID1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Example_Task1 create Failed!\\r\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_Task2"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Task2"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskID2"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Example_Task2 create Failed!\\r\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-task1-和-task2-周期性打印字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-task1-和-task2-周期性打印字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. "),s("code",[t._v("Task1")]),t._v(" 和 "),s("code",[t._v("Task2")]),t._v(" 周期性打印字符串")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("Example_Task1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("pcTaskName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Task 1 is running\\r\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    UINT32 i"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("puts")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pcTaskName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" TASK_LOOP_COUNT"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// 占用CPU耗时运行")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"效果演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果演示")])])}],!1,null,null,null);o.options.__file="example01.md";a.default=o.exports}}]);