(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{653:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu1.e501f118.png"},654:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu2.47280b13.png"},655:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu3.923e8b4b.png"},656:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu4.7077c0e2.png"},657:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu5.b8ee9b18.png"},658:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu6.3cda77d4.png"},659:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu7.212f4b0c.png"},660:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu8.fcf6dbdd.png"},661:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu9.e3436b53.png"},662:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu10.21f73726.png"},663:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu11.cfd052e7.png"},664:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo_opencpu12.0da71628.png"},800:function(t,e,n){"use strict";n.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"在opencpu开发板上运行liteos-onelight-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在opencpu开发板上运行liteos-onelight-demo","aria-hidden":"true"}},[t._v("#")]),t._v(" 在openCPU开发板上运行LiteOS onelight demo")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#获取源代码"}},[t._v("获取源代码")])]),s("li",[s("a",{attrs:{href:"#开发板硬件连接"}},[t._v("开发板硬件连接")])]),s("li",[s("a",{attrs:{href:"#生成固件文件"}},[t._v("生成固件文件")])]),s("li",[s("a",{attrs:{href:"#烧录固件到opencpu开发板"}},[t._v("烧录固件到openCPU开发板")])]),s("li",[s("a",{attrs:{href:"#运行opencpu-onelight-demo"}},[t._v("运行openCPU onelight demo")])]),s("li",[s("a",{attrs:{href:"#oceanconnect下发命令"}},[t._v("OceanConnect下发命令")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"获取源代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取源代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取源代码")]),t._v(" "),s("pre",[s("code",[t._v("链接：https://pan.baidu.com/s/1qdbxR2MlUxfDI01bX4q27g\n密码：dbfe\n::: warning 注意\n运行前需要安装运行环境，详见openCPU开发环境安装指导。  \n:::  \n")])]),t._v(" "),s("h2",{attrs:{id:"开发板硬件连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发板硬件连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发板硬件连接")]),t._v(" "),s("p",[s("img",{attrs:{src:n(653),alt:""}})]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("SIM卡槽旁边的开关拨到CH340/UART一侧。")])]),t._v(" "),s("h2",{attrs:{id:"生成固件文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成固件文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成固件文件")]),t._v(" "),s("p",[t._v("在BC35-G_OpenCPU_Hi1_SDK_V1.0文件夹中，双击命令提示符：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(654),alt:""}})]),t._v(" "),s("p",[t._v("输入命令"),s("code",[t._v("scons_new.bat")]),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(655),alt:""}})]),t._v(" "),s("p",[t._v("若得到下图结果，则说明编译成功，并得到固件文件"),s("code",[t._v("new.fwpkg")]),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(656),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:n(657),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"烧录固件到opencpu开发板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#烧录固件到opencpu开发板","aria-hidden":"true"}},[t._v("#")]),t._v(" 烧录固件到openCPU开发板")]),t._v(" "),s("p",[t._v("打开UEUpdaterUI，并进行相关设置：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(658),alt:""}})]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("请根据自己的情况选择串口号，"),s("code",[t._v("firmware package file")]),t._v("请选择上一步中生成的固件，不勾选"),s("code",[t._v("write config")]),t._v("，勾选"),s("code",[t._v("No Baud Switch")]),t._v("，并点击"),s("code",[t._v("update")]),t._v("。")])]),t._v(" "),s("p",[t._v("若出现下图提示，请按下"),s("code",[t._v("RESET")]),t._v("按键，重启openCPU开发板：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(659),alt:""}})]),t._v(" "),s("p",[t._v("当所有项目完成后，固件烧录完成：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(660),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"运行opencpu-onelight-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行opencpu-onelight-demo","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行openCPU onelight demo")]),t._v(" "),s("p",[t._v("关闭UEUpdaterUI，登陆OceanConnect，打开串口调试工具。此时在串口调试工具上，已经可以看到LOG信息：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(661),alt:""}})]),t._v(" "),s("p",[t._v("同时在OceanConnect平台上，也可以看到设备上报的数据：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(662),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"oceanconnect下发命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oceanconnect下发命令","aria-hidden":"true"}},[t._v("#")]),t._v(" OceanConnect下发命令")]),t._v(" "),s("p",[s("img",{attrs:{src:n(663),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:n(664),alt:""}})]),t._v(" "),s("p",[t._v("在设备上可以看到小灯被点亮。")]),t._v(" "),s("ul",[s("li",[t._v("至此，完成在openCPU开发板上运行LiteOS onelight demo。")])])])}],a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);o.options.__file="onelight_demo_openCPU.md";e.default=o.exports}}]);