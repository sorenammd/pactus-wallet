(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{582:()=>{},993:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(4568),c=a(8846),l=a(1870);a(7620),a(3979);let i=()=>(0,t.jsxs)("button",{className:"cta-sendPac",children:[(0,t.jsx)(l.default,{src:c.AO,alt:"send-icon"}),"Send"]})},2270:(e,s,a)=>{"use strict";a.d(s,{default:()=>u});var t=a(4568),c=a(7620);a(4540);var l=a(2534),i=a(8119),r=a(1870),n=a(7084),d=a(8846),o=a(6880),h=a(993),x=a(9896);let u=()=>(0,t.jsx)(c.Suspense,{fallback:(0,t.jsx)("div",{children:"Loading..."}),children:(0,t.jsxs)("div",{className:"container-wallet",children:[(0,t.jsx)(l.A,{}),(0,t.jsxs)("div",{className:"content-wallet",children:[(0,t.jsx)(i.A,{title:"\uD83E\uDD1D Account 1"}),(0,t.jsx)("div",{className:"section1-wallet",children:(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"amountSection-wallet",children:[(0,t.jsxs)("h1",{children:["Balance",(0,t.jsx)(o.A,{})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(r.default,{src:d.y0,alt:"simple-logo"}),(0,t.jsx)("p",{children:"45778"}),(0,t.jsx)("span",{children:"PAC"})]}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{style:{fontSize:"15px"},children:"≈ 2343.56 USD"})}),(0,t.jsxs)("div",{className:"amountCtas-wallet",children:[(0,t.jsx)(h.A,{}),(0,t.jsx)(x.A,{})]})]})})}),(0,t.jsxs)("div",{className:"transactionsContainer-wallet",children:[(0,t.jsxs)("div",{className:"headerTransaction-wallet",children:[(0,t.jsx)("h3",{children:"Activity"}),(0,t.jsxs)("div",{className:"searchTransactions-wallet",children:[(0,t.jsx)(r.default,{src:d.qc,alt:"search-icon"}),(0,t.jsx)("input",{placeholder:"Search by tx hash or address"})]}),(0,t.jsxs)("div",{className:"filterTransactions-wallet",children:[(0,t.jsx)("button",{children:"1D"}),(0,t.jsx)("button",{children:"7D"}),(0,t.jsx)("button",{style:{color:"#FFF"},children:"All"})]})]}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"transactions-wallet",children:(0,t.jsx)(n.A,{transactions:d.gN,height:"474px"})})]})]})]})})},2534:(e,s,a)=>{"use strict";a.d(s,{A:()=>r});var t=a(4568);a(7620),a(3917);var c=a(1870),l=a(3311),i=a(8846);let r=()=>{let e=(0,l.usePathname)(),s=(0,l.useSearchParams)(),a=(0,l.useRouter)().push,r=e=>{let[s,a]=e.split("?");return{path:s,queryParams:new URLSearchParams(a)}},n=a=>{let{path:t,queryParams:c}=r(a);if(e!==t)return!1;for(let[e,a]of c)if(s.get(e)!==a)return!1;return!0};return(0,t.jsxs)("div",{className:"sidebarContainer",children:[(0,t.jsxs)("div",{className:"walletName-sidebar",children:[(0,t.jsx)("span",{children:"\uD83D\uDE00"}),(0,t.jsx)("h2",{children:"Wallet 1"}),(0,t.jsx)(c.default,{src:i.hz,alt:"lock-icon"})]}),(0,t.jsxs)("div",{className:"addAccount-sidebar",children:[(0,t.jsxs)("button",{children:[(0,t.jsx)(c.default,{src:i.WW,alt:"plus-icon"}),(0,t.jsx)("p",{children:"Add Account"})]}),(0,t.jsx)("button",{children:(0,t.jsx)(c.default,{src:i.qc,alt:"search-icon"})})]}),(0,t.jsxs)("div",{className:"accountList-sidebar",children:[(0,t.jsxs)("button",{className:"route-sidebar ".concat(n("/")?"activeRoute-sidebar":""),onClick:()=>a("/"),children:[(0,t.jsx)(c.default,{src:i.r_,alt:"overview-icon"}),(0,t.jsx)("h3",{children:"Overview"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"accountItems-sidebar",children:[{name:"Account 1",balance:"0.00",address:"0x2",emoji:"\uD83E\uDD1D"},{name:"Account 2",balance:"0.00",address:"0x1",emoji:"\uD83D\uDE01"}].map((e,s)=>(0,t.jsxs)("button",{style:{background:n("/wallet?address=".concat(null==e?void 0:e.address))?"#15191C":"none"},onClick:()=>a("/wallet?address=".concat(null==e?void 0:e.address)),children:[(0,t.jsx)("span",{children:e.emoji}),(0,t.jsx)("p",{children:e.name})]},"".concat(s,"-account")))})]})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(n("/activity")?"activeRoute-sidebar":""),onClick:()=>a("/activity"),style:{marginTop:"0px"},children:[(0,t.jsx)(c.default,{src:i.RI,alt:"activity-icon"}),(0,t.jsx)("h3",{children:"Activity"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(n("/settings")?"activeRoute-sidebar":""),style:{marginTop:"auto"},children:[(0,t.jsx)(c.default,{src:i.By,alt:"settings-icon"}),(0,t.jsx)("h3",{children:"Settings"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(n("/documentation")?"activeRoute-sidebar":""),children:[(0,t.jsx)(c.default,{src:i.Qp,alt:"documentation-icon"}),(0,t.jsx)("h3",{children:"Documentation"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(n("/frequently-asked-questions")?"activeRoute-sidebar":""),children:[(0,t.jsx)(c.default,{src:i.n1,alt:"faqs-icon"}),(0,t.jsx)("h3",{children:"FAQs"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(n("/report-bug")?"activeRoute-sidebar":""),children:[(0,t.jsx)(c.default,{src:i.cQ,alt:"report-icon"}),(0,t.jsx)("h3",{children:"Report Bug"})]}),(0,t.jsxs)("div",{className:"Contributing-sidebar",children:[(0,t.jsx)(c.default,{src:i.$h,alt:"gradientCopyIcon"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:"Contributing"}),(0,t.jsx)("p",{children:"You can contribute to the Pactus wallet project at any time."}),(0,t.jsxs)("button",{children:["Join",(0,t.jsx)(c.default,{src:i.W3,alt:"gradientArrowToRightIcon"})," "]})]})]})]})}},3098:()=>{},3917:()=>{},3979:()=>{},4540:()=>{},6498:(e,s,a)=>{Promise.resolve().then(a.bind(a,2270))},6880:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(4568),c=a(8846),l=a(1870);a(7620);let i=()=>(0,t.jsx)("button",{children:(0,t.jsx)(l.default,{src:c.L7,alt:"refetch-balance-icon"})})},7084:(e,s,a)=>{"use strict";a.d(s,{A:()=>c});var t=a(4568);a(7620),a(7378);let c=e=>{let{transactions:s,height:a="100%"}=e;return(0,t.jsxs)("div",{className:"container-TransactionsHistory",style:{height:a},children:[(0,t.jsx)("div",{className:"grid-header",children:["Date","TX Hash","Sender","Receiver","Amount","Fee"].map((e,s)=>(0,t.jsx)("div",{className:"grid-header-cell",children:e},s))}),(0,t.jsx)("div",{className:"grid-body",style:{maxHeight:"calc(".concat(a," - 40px)")},children:s.map((e,s)=>(0,t.jsxs)("div",{className:"grid-row",children:[(0,t.jsx)("div",{className:"grid-cell",children:e.date}),(0,t.jsx)("div",{className:"grid-cell gradientTxHash-TransactionsHistory",children:e.txHash}),(0,t.jsx)("div",{className:"grid-cell",children:e.sender}),(0,t.jsx)("div",{className:"grid-cell",children:e.receiver}),(0,t.jsx)("div",{className:"grid-cell",children:e.amount}),(0,t.jsx)("div",{className:"grid-cell",children:e.fee})]},s))})]})}},7378:()=>{},8119:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(4568);a(7620),a(3098);var c=a(1870),l=a(8846);let i=e=>{let{title:s}=e;return(0,t.jsxs)("header",{className:"headerContainer",children:[(0,t.jsx)("h1",{children:s}),(0,t.jsxs)("button",{className:"exportWallet-header",children:[(0,t.jsx)(c.default,{src:l.$M,alt:"export-wallet-icon"}),"Export Wallet"]}),(0,t.jsx)("button",{children:(0,t.jsx)(c.default,{src:l.ko,width:32,height:32,alt:"logout-icon"})})]})}},9896:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(4568),c=a(8846),l=a(1870);a(7620),a(582);let i=()=>(0,t.jsxs)("button",{className:"cta-BridgePac",children:[(0,t.jsx)(l.default,{src:c.Ji,alt:"send-icon"}),"Bridge"]})}},e=>{var s=s=>e(e.s=s);e.O(0,[569,334,740,648,846,587,84,358],()=>s(6498)),_N_E=e.O()}]);