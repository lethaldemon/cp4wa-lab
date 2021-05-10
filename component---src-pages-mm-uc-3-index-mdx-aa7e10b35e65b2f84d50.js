(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{rs2y:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return b}));var i=t("wx14"),n=t("zLVn"),c=(t("q1tI"),t("7ljp")),s=t("013z"),r=(t("qKvR"),{}),l={_frontmatter:r},o=s.a;function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)(o,Object(i.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",null,"Dynamic Threshold."),Object(c.b)("p",null,"  In this lab, we are looking at the Dynamic Threshold capability of Metric Manager.  We will be looking at data extracted and sanitized from a customer.  The key here is the resource being monitored is still capable of handling the traffic.  In traditional monitoring, most likely, the threshold has not been breached, yet, due to abnormal behavior, Metric Manager allows a pro-active event to be generated."),Object(c.b)("h3",null,"The Customer."),Object(c.b)("p",null,"  This scenario occurred at a major telecommunications company in the US."),Object(c.b)("h3",null,"The User Case."),Object(c.b)("p",null,"  Metric Manager alerted a customer that there was much more traffic than usual on many of their network links. These links had sufficient capacity for this new traffic, so any other systems generated no static monitoring events. It was ",Object(c.b)("strong",{parentName:"p"},"a denial of service attack")," that they detected before any of their customers were affected."),Object(c.b)("p",null,"  Any customers with public-facing channels of any kind would typically be interested in this.\nDenial-of-service type attacks are often not deliberate or malicious but result from misconfiguration, poor change management, or failures in a system."),Object(c.b)("h3",null,"The lab exercise."),Object(c.b)("p",null,"  Select the ",Object(c.b)("inlineCode",{parentName:"p"},"Detected Anomalies")," tab, or close your current tab from the previous use case."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAsElEQVQI1xXKXU7EMAwE4N7/aByAF9But9oltuP4N3WBJ4LkGWk+eUMa7fUyd1XNzMhT1SKicga0CgRzGgGCdVUujKyqOc8I35gH9y4i7t57NzMRXXN9BfNccRMLYjTT8KUug03VPbYeugM8xeX6vTXCLMq6fcGO/KDx38hLRv0cJAeNG/Db+8ed5N7nNlOQQNTP6xuQYp6esyEA0bqGiL0vnHWxKDE/G3zuD1Y9yP8AhuTefE8nw7sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/15e511a1f31822a7c06cd53a0cc1942e/3cbba/UC32.png",srcSet:["/think-cp4wa-lab/static/15e511a1f31822a7c06cd53a0cc1942e/7fc1e/UC32.png 288w","/think-cp4wa-lab/static/15e511a1f31822a7c06cd53a0cc1942e/a5df1/UC32.png 576w","/think-cp4wa-lab/static/15e511a1f31822a7c06cd53a0cc1942e/3cbba/UC32.png 1152w","/think-cp4wa-lab/static/15e511a1f31822a7c06cd53a0cc1942e/0b124/UC32.png 1728w","/think-cp4wa-lab/static/15e511a1f31822a7c06cd53a0cc1942e/621ef/UC32.png 1854w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"  Select the ",Object(c.b)("inlineCode",{parentName:"p"},"Intotalbytes is Higher than expected. Actual 3.768e7 Expected: 1.815e7")," for ",Object(c.b)("inlineCode",{parentName:"p"},"GigabitLink-c0372")," Node."),Object(c.b)("p",null,"  Observe:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The metric affected is ",Object(c.b)("inlineCode",{parentName:"p"},"Intotalbytes"),". It’s more than twice its normal value than is usual at this time of day. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"We can clearly see the resource being impacted – ",Object(c.b)("inlineCode",{parentName:"p"},"GigabitLink-c0372"),". This data comes from a customer, and this is a ",Object(c.b)("strong",{parentName:"p"},"production")," link the customer care a lot."),Object(c.b)("p",{parentName:"li"},"Right-click and choose “ServiceDiagnosis…” to launch and do further investigation on the chart."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.208333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABQElEQVQY0xWQ2W6CQBSGef+XMKnVoIYLvDC90GgM1ro0gGBJcUmrZRkYNoFhnZmOyZ8v3zk5F38OhwnJM2RbtmM7ZVHhpk3zoipriilhaQkTSmiRF2mcZo8MpYjdZ2GcuIAjhMA0diMQZqEXe0EWJG0MWuATyAgwiGjEyBxiaNWW33iQhqdfNTifOIyxApU1WF/pVcu1Ldwe0EHOZcmTGFf+an6fL52lWqlqqR7x8TPdz/4WwuKlADeOYCJ+iPw7P1bG0/N0cpyIsihsBF7iR+vRQBoMV8POW6e36HVn3f6835u/DjeCEewq33rWNmtTr/V9sleQYlBDb3S91U1qao1mtMaFXgxssBYyknfJTi2VL/ptPLaF88OxZwR14CI3ruMIR7CGfu1bucU2sHk6EzaGbcjiNZ6d23dkgcetiYN/VaQ+BCsBXWgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/a22b7655495ae6471866ba2d97395c46/3cbba/UC33.png",srcSet:["/think-cp4wa-lab/static/a22b7655495ae6471866ba2d97395c46/7fc1e/UC33.png 288w","/think-cp4wa-lab/static/a22b7655495ae6471866ba2d97395c46/a5df1/UC33.png 576w","/think-cp4wa-lab/static/a22b7655495ae6471866ba2d97395c46/3cbba/UC33.png 1152w","/think-cp4wa-lab/static/a22b7655495ae6471866ba2d97395c46/d9f40/UC33.png 1214w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",{parentName:"li"},"Observe:")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The behavior of InTotalBytes for the last weeks can be seen.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The green area is the baseline that indicates the expected range of values. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The red zone at the right of the chart shows where something unexpected has happened"),Object(c.b)("p",{parentName:"li"},"We can take a closer look at the area of interest by zooming. Click on the chart where we want to start the zoom and drag to cover just past the red area. You always should include some of the chart’s “normal” values so you can compare."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABnUlEQVQY002RyY6bQBRF+f8PiJRlK4oSZZPJi3TUVuQYbIPbPRgDbtsMxjQUUzFWUVUUENyrbI6u3tV5i/cE13XDMMzyjFJKKElg7idpgYqyQhDmdQbrssiyPM+zsiyqusJo7Iq6KhNYCmVeB16AK0wQ4S1vCOta3vGu63iaUhDyJOlDwC5uHQBmzVT9y51r5UWFOW8FK7uEGIQkPMOzj32fvXqdZ3LT6e0H4Eond3lyRcOR9s7MsGefft6/++gccUO7YegFtd1uyo0M5V27U8l2S9QVlN8my4m2+Pq4/r5Vvj3JE+3h1tKk28nzh89nEyHcXmUxENfpWkkVyZcWYCHH8gqslER5rh//XnZ/7MPcO4mvluiZ88Be/v71dPOfrHLV6AyjN7RO07im97oxGG/U54F+5xym55ep8zK199PLcT75sXl/Yx8QavhVjmmcszxj2RhgC2MSRzQCFAAWODDa+8CMYjNMjkFsJ5m1Ub2ZHAUIN2wYBoE1rBn3ME4wGTMjbDx7S9uRtKEtZQQ3IxkZ2+s7CGOUNgghxtg/LgCt70krnbIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/35b152641519929ab7d0fbb9d4199944/3cbba/UC34.png",srcSet:["/think-cp4wa-lab/static/35b152641519929ab7d0fbb9d4199944/7fc1e/UC34.png 288w","/think-cp4wa-lab/static/35b152641519929ab7d0fbb9d4199944/a5df1/UC34.png 576w","/think-cp4wa-lab/static/35b152641519929ab7d0fbb9d4199944/3cbba/UC34.png 1152w","/think-cp4wa-lab/static/35b152641519929ab7d0fbb9d4199944/7dc98/UC34.png 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",{parentName:"li"},"Observe:")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Typically, metrics have shifting behavior and short-lived natural spikes. The same metric may have very different expected values on different resources. This leads to a one-size-fits-all for static thresholds – too tight, and there are many events, which end up being ignored. Too loose, and problems are not found until users are impacted. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In this case, the link in question can handle this throughput without a problem but will have a problem later if it keeps growing. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If it stops growing, the system is still showing far more capacity usage than it’s really using, potentially leading to wastefulness and unnecessary upgrades."))),Object(c.b)("h3",null,"Customer Value."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dynamic thresholds and eventing on every metric in your system without any configuration."),Object(c.b)("li",{parentName:"ul"},"Early detection of emerging problems so that action can be taken before the users are impacted."),Object(c.b)("li",{parentName:"ul"},"Single place where every metric from every data source can be visualised together with its normal behavior.")),Object(c.b)("h3",null,"Customer Quotes."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"”",Object(c.b)("em",{parentName:"li"},"IBM was able to detect 100% of the major incidents that occurred, including silent failures and predicting outages where possible; showing an annual saving of ~300k and product payback period of 5 months."),"”")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mm-uc-3-index-mdx-aa7e10b35e65b2f84d50.js.map