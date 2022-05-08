"use strict";(self.webpackChunktaxpower=self.webpackChunktaxpower||[]).push([[826],{6283:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return N},default:function(){return q},frontMatter:function(){return y},metadata:function(){return h},toc:function(){return E}});var n=r(7462),a=r(3366),i=r(7294),o=r(3905),s=r(7724),l=r(3619),u="priceTool_UdEA",c="costMessage_YdMi",p=function(e,t){return i.createElement("div",{className:c},i.createElement("h3",null,t," requests cost ",function(e){return"$"+Intl.NumberFormat("en-US").format(e)}(e)))};function d(){var e=(0,i.useState)(10),t=e[0],r=e[1],n=(0,i.useState)(null),a=n[0],o=n[1];return i.createElement("section",{className:u},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement(s.Z,{value:t,inputProps:{min:1},id:"request-count",type:"number",placeholder:"Integer",label:"Request Count",variant:"outlined",onChange:function(e){var t=e.target.value;r(t),o(null)}}),i.createElement(l.Z,{variant:"contained",color:"primary",onClick:function(){var e=t*.01;o(e)}},"Calculate Cost (USD)")),i.createElement("div",{className:"row"},a&&p(a,t))))}var m=r(2728),g=r(5376),f="priceGraph_Nybe";m.kL.register(m.uw,m.f$,m.od,m.jn,m.Dx,m.u,m.De);var k={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Cost Per Request"}},scales:{x:{display:!0,title:{display:!0,text:"United States' Dollars (USD)"}},y:{display:!0,title:{display:!0,text:"Request Count"}}}},v={labels:["$1","$10","$100","$1000","$10000"],datasets:[{label:"Requests",data:[100,1e3,1e4,1e5,1e6],borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]};function b(){return i.createElement("section",{className:f},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement(g.x1,{options:k,data:v}))))}var x=["components"],y={title:"Pricing",sidebar_position:4,custom_edit_url:null},N=void 0,h={unversionedId:"pricing",id:"pricing",title:"Pricing",description:"- Each request costs $0.01, unless you are in the Free Trial",source:"@site/docs/pricing.mdx",sourceDirName:".",slug:"/pricing",permalink:"/taxpower/docs/pricing",editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Pricing",sidebar_position:4,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Make Your First Request",permalink:"/taxpower/docs/getting-started/first-request"},next:{title:"Billing",permalink:"/taxpower/docs/billing"}},w={},E=[],C={toc:E};function q(e){var t=e.components,r=(0,a.Z)(e,x);return(0,o.kt)("wrapper",(0,n.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("mark",null,"Each request costs $0.01"),", unless you are in the ",(0,o.kt)("a",{parentName:"strong",href:"/taxpower/docs/getting-started/account-setup"},"Free Trial"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"During the ",(0,o.kt)("a",{parentName:"strong",href:"/taxpower/docs/getting-started/account-setup"},"Free Trial"),", you won't be charged for any request."))),(0,o.kt)(b,{mdxType:"PriceGraph"}),(0,o.kt)(d,{mdxType:"PriceTool"}))}q.isMDXComponent=!0}}]);