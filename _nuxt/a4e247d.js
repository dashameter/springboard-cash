(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1580:function(e,t,n){var content=n(1582);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("15e36496",content,!0,{sourceMap:!1})},1581:function(e,t,n){"use strict";var r=n(1580);n.n(r).a},1582:function(e,t,n){(t=n(24)(!1)).push([e.i,".v-card[data-v-606496de]{background-color:unset!important}",""]),e.exports=t},1583:function(e,t,n){"use strict";n(20),n(15),n(12),n(6),n(16);var r=n(2),c=n(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(13).Unit,m={props:{campaign:{type:Object}},data:function(){return{pledgeDialog:!1}},computed:l({},Object(c.c)(["getSumPledges","getRedemptionTxId","getUsernameByOwnerId"])),methods:l(l({},Object(c.b)(["fetchDocuments"])),{},{DuffsinDash:function(e){return d.fromSatoshis(e).toBTC()},viewCampaign:function(e){this.$router.push("/project/view/"+e)},progressPledges:function(e){return parseInt(this.getSumPledges(e.$id))/parseInt(this.campaign.amount)*100}})},f=(n(1581),n(94)),v=n(117),h=n.n(v),O=n(1577),y=n(379),w=n(139),C=n(1572),j=n(1579),_=n(382),x=n(1574),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto",staticStyle:{"background-color":"unset !important"},attrs:{"max-width":"1000"},on:{click:function(t){return e.viewCampaign(e.campaign.$id)}}},[e.getRedemptionTxId(e.campaign.$id)?n("v-alert",{staticClass:"ma-2",attrs:{color:"cyan",outlined:"",icon:"mdi-balloon"}},[n("strong",[e._v("Congratulations!")]),e._v(" This Project is successfully funded!\n    ")]):e._e(),e._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-card",{staticClass:"mx-5",attrs:{elevation:"0","min-height":"155"}},[n("v-card-subtitle",{staticClass:"mb-0 py-0"},[e._v("\n              "+e._s(e.getUsernameByOwnerId(e.campaign.$ownerId))+"\n            ")]),e._v(" "),n("v-card-title",{staticClass:"pledged mt-0 pt-0"},[e._v("\n              "+e._s(e.campaign.title)+"\n            ")]),e._v(" "),n("v-card-text",{staticStyle:{"font-size":"20px","font-weight":"500px"}},[e._v("\n              "+e._s(e.campaign.description)+"\n            ")])],1)],1),e._v(" "),n("v-col",[n("v-progress-linear",{staticClass:"mt-5",attrs:{height:"18",color:"cyan",striped:"",value:e.progressPledges(e.campaign)}}),e._v(" "),n("div",[n("div",{staticClass:"pledgedtext"},[e._v("\n              backed\n              "),n("span",{staticClass:"pledged"},[e._v("\n                "+e._s(e.DuffsinDash(e.getSumPledges(e.campaign.$id)))+" Dash\n              ")])]),e._v(" "),n("div",{staticClass:"pledgedtext"},[e._v("\n              goal\n              "),n("span",{staticClass:"pledged"},[e._v("\n                "+e._s(e.DuffsinDash(e.campaign.amount))+" Dash\n              ")]),e._v(" "),n("span")])])],1)],1)],1)],1)],1)}),[],!1,null,"606496de",null);t.a=component.exports;h()(component,{VAlert:O.a,VCard:y.a,VCardSubtitle:w.b,VCardText:w.c,VCardTitle:w.d,VCol:C.a,VContainer:j.a,VProgressLinear:_.a,VRow:x.a})},1597:function(e,t,n){"use strict";n.r(t);n(20),n(15),n(12),n(6),n(16),n(93);var r=n(17),c=n(2),o=n(87);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{listCard:n(1583).a},data:function(){return{}},computed:d({},Object(o.c)(["getCampaigns","getLatestDocument","getCampaignPledges"])),created:function(){this.fetchDocuments({typeLocator:"springboard.campaign",queryOpts:{orderBy:[["$createdAt","desc"]]}}),this.loopFetchNewCampaigns()},methods:d(d({},Object(o.b)(["fetchDocuments","isClientReady","fetchL1UTXOSByAddress"])),{},{loopFetchNewCampaigns:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("this.getLatestDocument(campaign) :>> ",e.getLatestDocument("campaign")),t.next=3,e.fetchDocuments({typeLocator:"springboard.campaign",queryOpts:{where:[["$createdAt",">",e.getLatestDocument("campaign")]],orderBy:[["$createdAt","desc"]]}});case 3:return t.next=5,e.$sleep(3e3);case 5:return console.log("trigger_sleep1"),t.next=8,e.fetchNewPledges();case 8:return console.log("trigger_sleep2"),t.next=11,e.$sleep(3e3);case 11:return console.log("trigger_sleep3"),t.next=14,e.checkPledges();case 14:return console.log("trigger_sleep4"),t.next=17,e.$sleep(3e3);case 17:console.log("trigger_sleep5"),e.loopFetchNewCampaigns(),console.log("trigger_sleep6");case 20:case"end":return t.stop()}}),t)})))()},fetchNewPledges:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("triggerpledge1",e.getCampaigns),n=0;case 2:if(!(n<e.getCampaigns.length-1)){t.next=9;break}return console.log("triggerpledge1",e.getCampaigns[n].$id,e.getLatestDocument("pledge")),t.next=6,e.fetchDocuments({typeLocator:"springboard.pledge",queryOpts:{where:[["campaignId","==",e.getCampaigns[n].$id],["$createdAt",">",e.getLatestDocument("pledge")]],orderBy:[["$createdAt","desc"]]}});case 6:n++,t.next=2;break;case 9:case"end":return t.stop()}}),t)})))()},checkPledges:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var i,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("triggerpledge2"),i=0;case 2:if(!(i<e.getCampaigns.length-1)){t.next=15;break}n=0;case 4:if(!(n<e.getCampaignPledges(e.getCampaigns[i].$id).length-1)){t.next=12;break}return t.next=7,e.fetchL1UTXOSByAddress(e.getCampaignPledges(e.getCampaigns[i].$id)[n]._pledgeFromAddress);case 7:r=t.sent,console.log("checkPledges",r);case 9:n++,t.next=4;break;case 12:i++,t.next=2;break;case 15:case"end":return t.stop()}}),t)})))()}})},f=n(94),v=n(117),h=n.n(v),O=n(1572),y=n(1579),w=n(1574),component=Object(f.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-container",[t("v-row",{attrs:{dense:""}},this._l(this.getCampaigns,(function(e,i){return t("v-col",{key:i,attrs:{cols:"12"}},[t("listCard",{attrs:{campaign:e}})],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:O.a,VContainer:y.a,VRow:w.a})}}]);