(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1596:function(t,e,r){"use strict";r.r(e);r(20),r(15),r(12),r(16),r(39),r(40),r(6),r(93);var n=r(17),o=r(91),c=r(2),l=(r(633),r(87));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=r(13).Unit;function v(address){return new RegExp("^y[1-9A-HJ-NP-Za-km-z]{33}$").test(address)||"Not a valid Dash address"}function m(t){return!!t||"Required"}function y(t){return h.fromBTC(t).toSatoshis()>=1e7&&h.fromBTC(t).toSatoshis()<=4e10||(h.fromBTC(t).toSatoshis()<1e7?"Min amount is 0.1 Dash":h.fromBTC(t).toSatoshis()>4e10?"Max amount is 400 Dash":"Please enter a number between 0.1 and 400")}var w={data:function(){return{title:"",description:"",amount:"",payoutAddress:"",launch:!1,addressRules:[v],amountRules:[y],titleRules:[m],descriptionRules:[m]}},computed:f(f({},Object(l.c)(["getIdentityId","getLatestDocument"])),{},{isProjectValid:function(){var t=this,e=this.addressRules.map((function(e){return e(t.payoutAddress)})),r=this.amountRules.map((function(e){return e(t.amount)})),n=this.titleRules.map((function(e){return e(t.title)})),c=this.descriptionRules.map((function(e){return e(t.description)}));return[].concat(Object(o.a)(e),Object(o.a)(r),Object(o.a)(n),Object(o.a)(c)).every((function(t){return!0===t}))}}),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getIdentityId||t.$router.push("/"),e.next=3,t.getUnusedAddress();case 3:t.payoutAddress=e.sent.address;case 4:case"end":return e.stop()}}),e)})))()},methods:f(f({},Object(l.b)(["submitDocument","getUnusedAddress"])),{},{submitCampaign:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var title,r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.launch=!0,title=t.title,r=t.description,n=t.amount,o=t.payoutAddress,e.next=4,t.submitDocument({typeLocator:"springboard.campaign",doc:{title:title,description:r,amount:h.fromBTC(n).toSatoshis().toString(),payoutAddress:o}});case 4:c=e.sent,l=c.transitions[0].id.toString(),t.$router.push("/project/view/".concat(l));case 7:case"end":return e.stop()}}),e)})))()}})},O=r(94),j=r(117),x=r.n(j),_=r(383),C=r(379),P=r(1572),B=r(1579),R=(r(151),r(388),r(52),r(56),r(7)),V=r(174),D=r(273);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(R.a)(V.a,Object(D.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:A({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),E=r(1574),$=r(221),T=r(1570),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("v-container",{attrs:{fluid:""}},[r("v-card",{staticClass:"px-8 py-5 mx-5 my-5 mx-auto",staticStyle:{"font-size":"20px"},attrs:{width:"700px",elevation:"0"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("span",{staticClass:"pledgedtext"},[t._v("Title")]),t._v(" "),r("v-text-field",{staticClass:"pledged input_left",attrs:{placeholder:"To the moon",required:"",rules:t.titleRules,color:"cyan"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("span",{staticClass:"pledgedtext"},[t._v("Description")]),t._v(" "),r("v-textarea",{attrs:{placeholder:"The Cow Jumped Over the Moon, since the cow did, will Dash soon?",value:"description",rules:t.descriptionRules,required:"",color:"cyan"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mt-3",attrs:{cols:"2"}},[r("span",{staticClass:"pledgedtext"},[t._v("Goal")])]),t._v(" "),r("v-col",{staticStyle:{width:"100px"},attrs:{cols:"3"}},[r("v-text-field",{staticClass:"pledged input_center ml-2",attrs:{placeholder:"2",required:"",rules:t.amountRules,color:"cyan"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),r("v-col",{staticClass:"mt-3",attrs:{cols:"7"}},[r("span",{staticClass:"pledgedtext pl-2"},[t._v("Dash")])])],1)],1)],1),t._v(" "),r("v-row",{staticClass:"pb-6"},[r("v-col",{attrs:{cols:"12"}},[r("span",{staticClass:"pledgedtext"},[t._v("Address")]),t._v(" "),r("v-text-field",{staticStyle:{"font-weight":"bolder","font-size":"25px"},attrs:{placeholder:"Payout Address",required:"",rules:t.addressRules,color:"cyan"},model:{value:t.payoutAddress,callback:function(e){t.payoutAddress=e},expression:"payoutAddress"}})],1),t._v(" "),r("v-btn",{staticClass:"mx-auto mt-12",staticStyle:{color:"white"},attrs:{color:"cyan",loading:t.launch,large:"",disabled:!t.isProjectValid},on:{click:t.submitCampaign}},[t._v("Launch Project\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:_.a,VCard:C.a,VCol:P.a,VContainer:B.a,VForm:k,VRow:E.a,VTextField:$.a,VTextarea:T.a})}}]);