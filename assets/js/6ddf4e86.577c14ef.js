"use strict";(self.webpackChunktyan_blog=self.webpackChunktyan_blog||[]).push([[536],{8296:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>r});const c=JSON.parse('{"id":"interviews/database","title":"Database","description":"---","source":"@site/docs/interviews/database.md","sourceDirName":"interviews","slug":"/interviews/database","permalink":"/tyan-blog/docs/interviews/database","draft":false,"unlisted":false,"editUrl":"https://github.com/tyanfarm/tyan-blog/tree/main/docs/interviews/database.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"OOP","permalink":"/tyan-blog/docs/interviews/oop"},"next":{"title":"Network","permalink":"/tyan-blog/docs/interviews/network"}}');var l=i(4848),h=i(8453);const t={sidebar_position:3},s="Database",d={},r=[{value:"UUID l\xe0 g\xec",id:"uuid-l\xe0-g\xec",level:2},{value:"Transaction Database - Giao d\u1ecbch c\u01a1 s\u1edf d\u1eef li\u1ec7u l\xe0 g\xec",id:"transaction-database---giao-d\u1ecbch-c\u01a1-s\u1edf-d\u1eef-li\u1ec7u-l\xe0-g\xec",level:2},{value:"SQL v\xe0 NoSQL kh\xe1c g\xec nhau?",id:"sql-v\xe0-nosql-kh\xe1c-g\xec-nhau",level:2},{value:"\u0110\xe1nh index l\xe0 g\xec? Khi n\xe0o \u0111\xe1nh khi n\xe0o kh\xf4ng?",id:"\u0111\xe1nh-index-l\xe0-g\xec-khi-n\xe0o-\u0111\xe1nh-khi-n\xe0o-kh\xf4ng",level:2},{value:"Shard &amp; View",id:"shard--view",level:2},{value:"Event Store l\xe0 g\xec? C\xe1c lo\u1ea1i Event Store?",id:"event-store-l\xe0-g\xec-c\xe1c-lo\u1ea1i-event-store",level:2},{value:"Cache l\xe0 g\xec? Cache b\u1eb1ng c\xf4ng c\u1ee5 n\xe0o?",id:"cache-l\xe0-g\xec-cache-b\u1eb1ng-c\xf4ng-c\u1ee5-n\xe0o",level:2},{value:"SQL Command",id:"sql-command",level:2}];function a(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"database",children:"Database"})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"uuid-l\xe0-g\xec",children:"UUID l\xe0 g\xec"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"UUID (Universally Unique Identifier) - \u0111\u1ecbnh danh duy nh\u1ea5t"}),"\n",(0,l.jsx)(e.li,{children:"K\xedch th\u01b0\u1edbc 16 bytes - 32 k\xed t\u1ef1"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"transaction-database---giao-d\u1ecbch-c\u01a1-s\u1edf-d\u1eef-li\u1ec7u-l\xe0-g\xec",children:"Transaction Database - Giao d\u1ecbch c\u01a1 s\u1edf d\u1eef li\u1ec7u l\xe0 g\xec"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"L\xe0 1 chu\u1ed7i c\xe1c thao t\xe1c t\u01b0\u01a1ng t\xe1c v\u1edbi c\u01a1 s\u1edf d\u1eef li\u1ec7u."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Tu\xe2n theo t\xednh ch\u1ea5t ",(0,l.jsx)(e.code,{children:"ACID"}),":"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"T\xednh nguy\xean t\u1eed"})," (",(0,l.jsx)(e.code,{children:"Atomicity"}),"): To\xe0n b\u1ed9 giao d\u1ecbch \u0111\u01b0\u1ee3c coi nh\u01b0 ",(0,l.jsx)(e.code,{children:"m\u1ed9t kh\u1ed1i duy nh\u1ea5t"}),". Ho\u1eb7c l\xe0 th\xe0nh c\xf4ng ho\u1eb7c l\xe0 rollback."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"T\xednh nh\u1ea5t qu\xe1n"})," (",(0,l.jsx)(e.code,{children:"Consistencty"}),"): Sau b\u1ea5t k\xec transaction n\xe0o th\xec m\u1ed1i li\xean k\u1ebft d\u1eef li\u1ec7u v\u1eabn kh\xf4ng thay \u0111\u1ed5i."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"T\xednh \u0111\u1ed9c l\u1eadp"})," (",(0,l.jsx)(e.code,{children:"Isolation"}),"): M\u1ed9t giao d\u1ecbch \u0111\u01b0\u1ee3c th\u1ef1c thi kh\xf4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn c\xe1c giao d\u1ecbch kh\xe1c."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"T\xednh b\u1ec1n v\u1eefng"})," (",(0,l.jsx)(e.code,{children:"Durability"}),"): Sau khi c\xe1c giao d\u1ecbch di\u1ec5n ra th\xe0nh c\xf4ng th\xec d\u1eef li\u1ec7u s\u1ebd kh\xf4ng b\u1ecb m\u1ea5t d\xf9 g\u1eb7p b\u1ea5t k\xec tr\u1ee5c tr\u1eb7c g\xec."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Quy tr\xecnh x\u1eed l\xfd giao d\u1ecbch:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"B\u1eaft \u0111\u1ea7u giao d\u1ecbch (BEGIN TRANSACTION)."}),"\n",(0,l.jsx)(e.li,{children:"Th\u1ef1c thi c\xe1c thao t\xe1c nh\u01b0 th\xeam, s\u1eeda, x\xf3a d\u1eef li\u1ec7u."}),"\n",(0,l.jsx)(e.li,{children:"Ki\u1ec3m tra c\xe1c \u0111i\u1ec1u ki\u1ec7n \u0111\u1ea3m b\u1ea3o kh\xf4ng vi ph\u1ea1m c\xe1c r\xe0ng bu\u1ed9c d\u1eef li\u1ec7u."}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"COMMIT"})," n\u1ebfu th\xe0nh c\xf4ng v\xe0 ",(0,l.jsx)(e.code,{children:"ROLLBACK"})," n\u1ebfu c\xf3 l\u1ed7i trong qu\xe1 tr\xecnh th\u1ef1c thi."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"C\xe1c tr\u01b0\u1eddng h\u1ee3p c\xf3 th\u1ec3 x\u1ea3y ra:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Deadlock"}),": khi 2 ho\u1eb7c nhi\u1ec1u giao d\u1ecbch c\xf9ng gi\u1eef kh\xf3a m\xe0 c\xe1c giao d\u1ecbch kh\xe1c c\u1ea7n v\xe0 \u0111\u1ec1u ch\u1edd nhau gi\u1ea3i ph\xf3ng kh\xf3a. T\u1eeb \u0111\xf3 s\u1ebd d\u1eabn \u0111\u1ebfn ch\u1edd v\xf4 h\u1ea1n."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Giao d\u1ecbch \u0111\u1ed3ng th\u1eddi"}),": Khi nhi\u1ec1u giao d\u1ecbch x\u1ea3y ra \u0111\u1ed3ng th\u1eddi, c\u1ea7n c\xf3 ph\u01b0\u01a1ng ph\xe1p ki\u1ec3m so\xe1t. Ti\xeau bi\u1ec3u l\xe0 ",(0,l.jsx)(e.code,{children:"locking"}),"."]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"Giao d\u1ecbch th\u1ea5t b\u1ea1i"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"sql-v\xe0-nosql-kh\xe1c-g\xec-nhau",children:"SQL v\xe0 NoSQL kh\xe1c g\xec nhau?"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"}}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"SQL"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"NoSQL"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Ki\u1ebfn tr\xfac d\u1eef li\u1ec7u"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["- S\u1eed d\u1ee5ng m\xf4 h\xecnh d\u1eef li\u1ec7u quan h\u1ec7, \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c trong b\u1ea3ng v\u1edbi c\xe1c h\xe0ng v\xe0 c\u1ed9t ",(0,l.jsx)("br",{})," - C\xf3 c\xe1c r\xe0ng bu\u1ed9c d\u1eef li\u1ec7u (PK, FK, NOT NULL, UNIQUE, ...) ",(0,l.jsx)("br",{})," - C\xf3 th\u1ec3 quan h\u1ec7 gi\u1eefa c\xe1c b\u1ea3ng v\u1edbi kh\xf3a ngo\u1ea1i (Foreign Key)",(0,l.jsx)("br",{})]}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["- H\u1ed7 tr\u1ee3 nhi\u1ec1u m\xf4 h\xecnh d\u1eef li\u1ec7u kh\xe1c nhau: ",(0,l.jsx)("br",{}),"\xa0\xa0 + T\xe0i li\u1ec7u (Document): MongoDB ",(0,l.jsx)("br",{})," \xa0\xa0 + C\xe1c c\u1eb7p key-value: Redis ",(0,l.jsx)("br",{}),"\xa0\xa0 + Column: Cassandra ",(0,l.jsx)("br",{})," - Cho ph\xe9p l\u01b0u d\u1eef li\u1ec7u m\xe0 kh\xf4ng c\u1ea7n x\xe1c \u0111\u1ecbnh tr\u01b0\u1edbc c\u1ea5u tr\xfac"]})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u0111\xe1nh-index-l\xe0-g\xec-khi-n\xe0o-\u0111\xe1nh-khi-n\xe0o-kh\xf4ng",children:"\u0110\xe1nh index l\xe0 g\xec? Khi n\xe0o \u0111\xe1nh khi n\xe0o kh\xf4ng?"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"\u0110\xe1nh index"})," l\xe0 \u0111\xe1nh ch\u1ec9 m\u1ee5c tr\xean m\u1ed9t ho\u1eb7c nhi\u1ec1u c\u1ed9t n\xe0o \u0111\xf3 gi\xfap t\u0103ng t\u1ed1c \u0111\u1ed9 truy v\u1ea5n m\xe0 kh\xf4ng c\u1ea7n qu\xe9t to\xe0n b\u1ed9 b\u1ea3ng"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Khi n\xe0o n\xean \u0111\xe1nh index:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Khi b\u1ea3ng d\u1eef li\u1ec7u c\xf3 nhi\u1ec1u b\u1ea3n ghi v\xe0 th\u01b0\u1eddng xuy\xean truy v\u1ea5n ",(0,l.jsx)(e.code,{children:"SELECT"})]}),"\n",(0,l.jsx)(e.li,{children:"Truy v\u1ea5n tr\xean c\u1ed9t th\u01b0\u1eddng xuy\xean s\u1eed d\u1ee5ng trong \u0111i\u1ec1u ki\u1ec7n l\u1ecdc"}),"\n",(0,l.jsx)(e.li,{children:"C\xe1c nh\xf3m c\u1ed9t th\u01b0\u1eddng xuy\xean s\u1eed d\u1ee5ng h\xe0m nh\xf3m (COUNT, AVG, SUM)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Khi n\xe0o kh\xf4ng n\xean \u0111\xe1nh index:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["V\u1edbi ",(0,l.jsx)(e.code,{children:"b\u1ea3ng nh\u1ecf"})," (d\u01b0\u1edbi 1000 b\u1ea3n ghi) v\xec th\u1eddi gian qu\xe9t to\xe0n b\u1ed9 b\u1ea3ng th\u01b0\u1eddng kh\xf4ng t\u1ed1n th\u1eddi gian."]}),"\n",(0,l.jsx)(e.li,{children:"V\u1edbi c\xe1c b\u1ea3ng th\u01b0\u1eddng xuy\xean thay \u0111\u1ed5i (INSERT, UPDATE, DELETE) v\xec b\u1ea3ng s\u1ebd c\u1ea7n c\u1eadp nh\u1eadt l\u1ea1i index."}),"\n",(0,l.jsx)(e.li,{children:"Ch\u1ec9 m\u1ee5c s\u1ebd chi\u1ebfm kh\xf4ng gian l\u01b0u tr\u1eef."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"shard--view",children:"Shard & View"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Shard"}),": Sharding l\xe0 k\u0129 thu\u1eadt ph\xe2n m\u1ea3nh d\u1eef li\u1ec7u \u0111\u1ec3 l\u01b0u tr\u1eef tr\xean nhi\u1ec1u m\xe1y ch\u1ee7 kh\xe1c nhau \u0111\u1ec3 t\u0103ng kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng v\xe0 hi\u1ec7u su\u1ea5t c\u1ee7a CSDL."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://images.viblo.asia/c3f91483-4ac3-4a18-a7b4-c604f059e64c.png",alt:"alt"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"View"}),": L\xe0 b\u1ea3ng \u1ea3o trong CSDL, kh\xf4ng l\u01b0u d\u1eef li\u1ec7u. Thay v\xec JOIN 2 b\u1ea3ng v\u1edbi nhau tr\xean m\u1ed7i l\u1ea7n truy v\u1ea5n th\xec ta c\xf3 th\u1ec3 d\xf9ng ",(0,l.jsx)(e.code,{children:"VIEW"})," \u0111\u1ec3 thay th\u1ebf, r\xfat ng\u1eafn c\xe2u l\u1ec7nh."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://winzone.vn/images/blog/13/view_example.png",alt:"alt"})}),"\n",(0,l.jsx)(e.h2,{id:"event-store-l\xe0-g\xec-c\xe1c-lo\u1ea1i-event-store",children:"Event Store l\xe0 g\xec? C\xe1c lo\u1ea1i Event Store?"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"Event Store l\xe0 g\xec"})})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Event Store"}),": l\xe0 1 lo\u1ea1i c\u01a1 s\u1edf d\u1eef li\u1ec7u l\u01b0u tr\u1eef d\u1eef li\u1ec7u theo s\u1ef1 ki\u1ec7n (event)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Event Sourcing"}),": K\u1ef9 thu\u1eadt l\u01b0u tr\u1ea1ng th\xe1i c\u1ee7a d\u1eef li\u1ec7u ",(0,l.jsx)(e.code,{children:"tr\xean s\u1ef1 ki\u1ec7n"}),". Thay v\xec l\u01b0u tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i c\u1ee7a d\u1eef li\u1ec7u, n\xf3 l\u01b0u tr\u1eef to\xe0n b\u1ed9 l\u1ecbch s\u1eed c\xe1c s\u1ef1 ki\u1ec7n x\u1ea3y ra."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"C\xe1c lo\u1ea1i EventStore ph\u1ed5 bi\u1ebfn"})})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"EventStoreDB"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"ApacheKafka"})}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"RDM"})," hay ",(0,l.jsx)(e.code,{children:"NoSQL DB"})," \u0111\u1ec1u c\xf3 th\u1ec3 s\u1eed d\u1ee5ng nh\u01b0 1 EventStore b\u1eb1ng c\xe1ch l\u01b0u c\xe1c s\u1ef1 ki\u1ec7n trong b\u1ea3ng."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"cache-l\xe0-g\xec-cache-b\u1eb1ng-c\xf4ng-c\u1ee5-n\xe0o",children:"Cache l\xe0 g\xec? Cache b\u1eb1ng c\xf4ng c\u1ee5 n\xe0o?"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"Cache l\xe0 g\xec"})})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Cache l\u01b0u tr\u1eef b\u1ea3n sao c\u1ee7a d\u1eef li\u1ec7u \u0111\u1ec3 tr\xe1nh vi\u1ec7c truy c\u1eadp d\u1eef li\u1ec7u g\u1ed1c nhi\u1ec1u l\u1ea7n, \u0111\u1eb7c bi\u1ec7t v\u1edbi nh\u1eefng d\u1eef li\u1ec7u t\u0129nh v\xe0 \xedt thay \u0111\u1ed5i th\u01b0\u1eddng xuy\xean."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"C\xe1c lo\u1ea1i cache:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Client-side Cache"}),"\n",(0,l.jsx)(e.li,{children:"Server-side Cache"}),"\n",(0,l.jsx)(e.li,{children:"Distributed Cache"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"C\xe1c th\xe0nh ph\u1ea7n c\u1ee7a cache:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Key"}),"\n",(0,l.jsx)(e.li,{children:"Value"}),"\n",(0,l.jsx)(e.li,{children:"TTL (Time To Live)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"D\xf9ng g\xec \u0111\u1ec3 cache"})})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"C\xf4ng ngh\u1ec7"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"C\xf4ng c\u1ee5"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Memory-based caching"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Redis"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Application-level cache"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["+ ASPNET Cache: ",(0,l.jsx)(e.code,{children:"MemoryCache"})," & ",(0,l.jsx)(e.code,{children:"OutputCache"})," ",(0,l.jsx)("br",{})," + Spring Cache (Java)"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"HTTP Caching"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Browser Cache"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Database Caching"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,l.jsx)(e.code,{children:"MySQL"})," ho\u1eb7c ",(0,l.jsx)(e.code,{children:"PostgreSQL"})]})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"sql-command",children:"SQL Command"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"SELECT"})})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"    SELECT * FROM table_name WHERE condition;\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"INSERT"})})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"    INSERT INTO table_name (column1, column2) VALUES (value1, value2);\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"UPDATE"})})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"    UPDATE table_name SET column1 = value1 WHERE condition;\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"DELETE"})})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"    DELETE FROM table_name WHERE condition;\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"SQL JOIN"})})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://laptrinhvb.net/uploads/source/DATABASE/join_sqlserver.png",alt:"alt"})})]})}function o(n={}){const{wrapper:e}={...(0,h.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>s});var c=i(6540);const l={},h=c.createContext(l);function t(n){const e=c.useContext(h);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),c.createElement(h.Provider,{value:e},n.children)}}}]);