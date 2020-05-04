(this["webpackJsonprem-web-app"]=this["webpackJsonprem-web-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/remlogo_horizontal.b0d08b48.png"},46:function(e,t,a){e.exports=a(58)},51:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(51),a(40)),s=a.n(c),l=a(24),h=a(25),u=a(21),d=a(33),m=a(30),p=a(19),f=a(13),g=a(31),y=a(32),b=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.amount,n=e.filled;return o.a.createElement("button",{onClick:t,className:n?"Donation-amount-button-filled":"Donation-amount-button"},a)}}]),a}(o.a.Component),v=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.enabled;return o.a.createElement("button",{onClick:t,className:"Donation-button",style:a?{}:{cursor:"not-allowed",opacity:.6}},"DONATE")}}]),a}(o.a.Component),k=a(81),w=a(79),E=a(80),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.toggleDialog,a=e.open;return o.a.createElement("div",null,o.a.createElement(k.a,{open:a,onClose:t,className:"Info-dialog"},o.a.createElement(w.a,null," FAQ "),o.a.createElement(E.a,{className:"Info-dialog"},o.a.createElement("span",null,"Thank you for joining us in our journey to transform charitable giving. Below are a few key points that we think it\u2019s important for all our users to know about us and how we operate.\n\n\u2022 Here at Rem, we\u2019re firmly against taking any portion or cut of the donation despite ultimately being a for-profit startup. We don\u2019t think it\u2019s ethical to be taking money away from charities and such actions go directly against our core mission. 100% of your donation after credit card fees will go towards supporting the charity of your choice.\n\n\u2022 How do we make the donations to charities? At the end of each month, we aggregate the month\u2019s donations for each charity and make a direct deposit into each respective charity\u2019s bank account or mail a physical check to their headquarters depending on available information. This is so that we can avoid unnecessarily losing a portion of your donation towards a second credit card processing fee.\n\n\u2022 We recommend that most donations less than $200 be made online through credit card. The portion that credit card companies take for processing is relatively small before that point. Venmo is also a possibility if you\u2019re more comfortable with that. Contact rem\u2019s founder Michael Wu at mdwu@college.harvard.edu if that\u2019s something you\u2019d be interested in.\n\n\u2022 If you plan on making a larger donation (say greater than $200), we\u2019d recommend that you bypass the online credit card system to avoid those fees. If this is something you\u2019re considering, contact me through my email listed below and we can work something out (likely a direct bank transfer through Zelle would be easiest).\n\n\u2022 How do we choose the charities we recommend? Research. For each prospective charity, we take a deep dive into their programs, proven evidence of effectiveness in their field, and the human impacts/stories they\u2019ve affected. We\u2019re highly selective in the charities we choose to recommend to our users as we understand the gravity of a good donation and the impacts it can have on society.\n\n\u2022 Suggestions or feedback for the app? Have a bug or crash to report? Please contact me through my email listed below.\n\n\nSincerely,\nMichael Wu\nCEO and Founder\nmdwu@college.harvard.edu"))))}}]),a}(o.a.Component),C=[10,20,50,"Other"],j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).state={charityAmount:parseInt(n.props.charityAmount),charityName:n.props.charityName,charityDescription:n.props.charityDescription,selected:[!1,!1,!1,!1],popupOpen:!1};for(var o=0;o<n.state.selected.length;o++)n.state.charityAmount===C[o]&&(n.state.selected[o]=!0);return n.state.selected.every((function(e){return!1===e}))&&(n.state.selected[n.state.selected.length-1]=!0),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n.handleOtherClick=n.handleOtherClick.bind(Object(u.a)(n)),n.infoToggle=n.infoToggle.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e,t){this.setState((function(t){return{charityAmount:e}}));for(var a=0;a<this.state.selected.length;a++)this.state.selected[a]=a===t}},{key:"handleOtherClick",value:function(){this.setState((function(e){return{charityAmount:null}}))}},{key:"infoToggle",value:function(){var e=this;this.setState((function(t){return{popupOpen:!e.state.popupOpen}}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"Charity-header"},this.state.charityName),o.a.createElement("div",{className:"Charity-subheader"},this.state.charityDescription),o.a.createElement("hr",null),C.map((function(e,t){return o.a.createElement(b,{onClick:Number.isInteger(e)?this.handleClick.bind(this,e,t):this.handleClick.bind(this,null,t),amount:Number.isInteger(e)?"$"+e:e,filled:this.state.selected[t]})}),this),this.state.selected[this.state.selected.length-1]?o.a.createElement("form",null,o.a.createElement("label",null,"Amount:",o.a.createElement("span",{className:"Currency-box"},"$",o.a.createElement("input",{value:this.state.charityAmount,onChange:function(t){return e.setState({charityAmount:t.target.value.replace(/\D/,"")})}})))):null,o.a.createElement("div",{className:"Donate-description"},"More information about the charity being donated to."),o.a.createElement("a",null,o.a.createElement("div",{className:"More-info",onClick:this.infoToggle},"Information about donations")),o.a.createElement(v,{onClick:null,enabled:this.state.charityAmount}),this.state.popupOpen?o.a.createElement(O,{toggleDialog:this.infoToggle,open:this.state.popupOpen}):null)}}]),a}(o.a.Component),N=(a(55),a(16));var A=function(){var e=new URLSearchParams(Object(N.d)().search);return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"})),o.a.createElement(j,{charityName:e.get("name"),charityDescription:"Put brief description of charity here",charityAmount:e.get("amount")}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(34);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D.a,null,o.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.df225b08.chunk.js.map