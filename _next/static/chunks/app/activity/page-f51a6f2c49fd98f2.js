(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{2534:(e,s,a)=>{"use strict";a.d(s,{A:()=>l});var t=a(4568);a(7620),a(3917);var c=a(1870),i=a(3311),r=a(5048),n=a(7420);let l=()=>{let e=(0,i.usePathname)(),s=(0,i.useSearchParams)(),a=(0,i.useRouter)().push,l=e=>{let[s,a]=e.split("?");return{path:s,queryParams:new URLSearchParams(a)}},d=a=>{let{path:t,queryParams:c}=l(a);if(e!==t)return!1;for(let[e,a]of c)if(s.get(e)!==a)return!1;return!0};return(0,t.jsxs)("div",{className:"sidebarContainer",children:[(0,t.jsxs)("div",{className:"walletName-sidebar",children:[(0,t.jsx)("span",{children:"\uD83D\uDE00"}),(0,t.jsx)("h2",{children:"Wallet 1"}),(0,t.jsx)(c.default,{src:r.hz,alt:"lock-icon"})]}),(0,t.jsxs)("div",{className:"addAccount-sidebar",children:[(0,t.jsxs)("button",{children:[(0,t.jsx)(c.default,{src:r.WW,alt:"plus-icon"}),(0,t.jsx)("p",{children:"Add Account"})]}),(0,t.jsx)("button",{children:(0,t.jsx)(c.default,{src:r.qc,alt:"search-icon"})})]}),(0,t.jsxs)("div",{className:"accountList-sidebar",children:[(0,t.jsxs)("button",{className:"route-sidebar ".concat(d("/")?"activeRoute-sidebar":""),onClick:()=>a("/"),children:[(0,t.jsx)(c.default,{src:r.r_,alt:"overview-icon"}),(0,t.jsx)("h3",{children:"Overview"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"accountItems-sidebar",children:[{name:"Account 1",balance:"0.00",address:"0x2",emoji:"\uD83E\uDD1D"},{name:"Account 2",balance:"0.00",address:"0x1",emoji:"\uD83D\uDE01"}].map((e,s)=>(0,t.jsxs)("button",{style:{background:d("/wallet?address=".concat(null==e?void 0:e.address))?"#15191C":"none"},onClick:()=>a("/wallet?address=".concat(null==e?void 0:e.address)),children:[(0,t.jsx)("span",{children:e.emoji}),(0,t.jsx)("p",{children:e.name})]},"".concat(s,"-account")))})]})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(d("/activity")?"activeRoute-sidebar":""),onClick:()=>a("/activity"),style:{marginTop:"0px"},children:[(0,t.jsx)(c.default,{src:r.RI,alt:"activity-icon"}),(0,t.jsx)("h3",{children:"Activity"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(d("/settings")?"activeRoute-sidebar":""),style:{marginTop:"auto"},children:[(0,t.jsx)(c.default,{src:r.By,alt:"settings-icon"}),(0,t.jsx)("h3",{children:"Settings"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(d("/documentation")?"activeRoute-sidebar":""),children:[(0,t.jsx)(c.default,{src:r.Qp,alt:"documentation-icon"}),(0,t.jsx)("h3",{children:"Documentation"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(d("/frequently-asked-questions")?"activeRoute-sidebar":""),children:[(0,t.jsx)(c.default,{src:r.n1,alt:"faqs-icon"}),(0,t.jsx)("h3",{children:"FAQs"})]}),(0,t.jsxs)("button",{className:"route-sidebar ".concat(d("/report-bug")?"activeRoute-sidebar":""),children:[(0,t.jsx)(c.default,{src:r.cQ,alt:"report-icon"}),(0,t.jsx)("h3",{children:"Report Bug"})]}),(0,t.jsxs)("div",{id:"contributing-parent",className:"Contributing-sidebar",children:[(0,t.jsx)(c.default,{src:r.$h,alt:"gradientCopyIcon"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:"Contributing"}),(0,t.jsx)("p",{children:"You can contribute to the Pactus wallet project at any time."}),(0,t.jsxs)("button",{children:["Join",(0,t.jsx)(c.default,{src:r.W3,alt:"gradientArrowToRightIcon"})," "]})]}),(0,t.jsx)(n.A,{duration:4,size:100,colorFrom:"#064560",colorTo:"#0FEF9E",boxShadow:{color:"#0FEF9E",blur:95,spread:-60},parentId:"contributing-parent"})]})]})}},2730:(e,s,a)=>{"use strict";a.d(s,{default:()=>o});var t=a(4568),c=a(7620);a(6764);var i=a(2534),r=a(8119),n=a(1870),l=a(7084),d=a(5048);let o=()=>(0,t.jsx)(c.Suspense,{fallback:(0,t.jsx)("div",{children:"Loading..."}),children:(0,t.jsxs)("div",{className:"container-activity",children:[(0,t.jsx)(i.A,{}),(0,t.jsxs)("div",{className:"content-activity",children:[(0,t.jsx)(r.A,{title:"Activity"}),(0,t.jsxs)("div",{className:"transactionsContainer-activity",children:[(0,t.jsxs)("div",{className:"headerTransaction-activity",children:[(0,t.jsxs)("div",{className:"searchTransactions-activity",children:[(0,t.jsx)(n.default,{src:d.qc,alt:"search-icon"}),(0,t.jsx)("input",{placeholder:"Search by tx hash or address"})]}),(0,t.jsxs)("div",{className:"filterTransactions-activity",children:[(0,t.jsx)("button",{children:"1D"}),(0,t.jsx)("button",{children:"7D"}),(0,t.jsx)("button",{style:{color:"#FFF"},children:"All"})]})]}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"transactions-activity",children:(0,t.jsx)(l.A,{transactions:d.gN,height:"90%"})})]})]})]})})},3098:()=>{},3917:()=>{},4038:(e,s,a)=>{Promise.resolve().then(a.bind(a,2730))},6764:()=>{},7084:(e,s,a)=>{"use strict";a.d(s,{A:()=>c});var t=a(4568);a(7620),a(7378);let c=e=>{let{transactions:s,height:a="100%"}=e;return(0,t.jsxs)("div",{className:"container-TransactionsHistory",style:{height:a},children:[(0,t.jsx)("div",{className:"grid-header",children:["Date","TX Hash","Sender","Receiver","Amount","Fee"].map((e,s)=>(0,t.jsx)("div",{className:"grid-header-cell",children:e},s))}),(0,t.jsx)("div",{className:"grid-body",style:{maxHeight:"calc(".concat(a," - 40px)")},children:s.map((e,s)=>(0,t.jsxs)("div",{className:"grid-row",children:[(0,t.jsx)("div",{className:"grid-cell",children:e.date}),(0,t.jsx)("div",{className:"grid-cell gradientTxHash-TransactionsHistory",children:e.txHash}),(0,t.jsx)("div",{className:"grid-cell",children:e.sender}),(0,t.jsx)("div",{className:"grid-cell",children:e.receiver}),(0,t.jsx)("div",{className:"grid-cell",children:e.amount}),(0,t.jsx)("div",{className:"grid-cell",children:e.fee})]},s))})]})}},7378:()=>{},8119:(e,s,a)=>{"use strict";a.d(s,{A:()=>r});var t=a(4568);a(7620),a(3098);var c=a(1870),i=a(5048);let r=e=>{let{title:s}=e;return(0,t.jsxs)("header",{className:"headerContainer",children:[(0,t.jsx)("h1",{children:s}),(0,t.jsxs)("button",{className:"exportWallet-header",children:[(0,t.jsx)(c.default,{src:i.$M,alt:"export-wallet-icon"}),"Export Wallet"]}),(0,t.jsx)("button",{children:(0,t.jsx)(c.default,{src:i.ko,width:32,height:32,alt:"logout-icon"})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[481,334,648,701,587,84,358],()=>s(4038)),_N_E=e.O()}]);