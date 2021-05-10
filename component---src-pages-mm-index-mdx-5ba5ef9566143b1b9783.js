(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{xcK8:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return l}));var n=t("wx14"),i=t("zLVn"),r=(t("q1tI"),t("7ljp")),o=t("013z"),b=(t("qKvR"),{}),s={_frontmatter:b},c=o.a;function l(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Introduction"),Object(r.b)("p",null,"  Watson AIOps Metric Manager consumes and analyzes your metrics or time-series data and provides ",Object(r.b)("strong",{parentName:"p"},"early warning")," of ",Object(r.b)("em",{parentName:"p"},"abnormal behavior")," which might indicate potential outage, service degradation, or unexpected change. "),Object(r.b)("p",null,"  It uses AI to build thresholds and baselines dynamically, without the need for configuration. Therefore, you do not need to keep adjusting the baseline as you do in a traditional Performance Manager system.\nWatson AIOps Metric Manager evaluates based on normal behaviors of the data, and it can detect anomalous behavior on KPIs (Key Performance Indicator). Normal behavior is learned through an initial training period to build an analytics model and constant model retraining as new data loaded thereafter. "),Object(r.b)("p",null,"  If a KPI is deemed anomalous, an event is raised.  Events can be viewed and actioned in the Watson AIOps Event Manager. If required, you can trigger the runbook automation, available in Event Manager, to resolve your potential issue even before it happens.\nIn Operation, once Metric Manager continuously ingests the metric data, as an SRE you will be notified of possible unresolved issues through the consolidated alerts generated by Metric Manager. "),Object(r.b)("p",null,"  Here is a diagram on Watson AIOps Metric Manager."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABtUlEQVQoz02RS0sCURiGB4oWLbQfEETQhcjatOkPRJsWoaIgbvoDs6iWtXPTb3BhES1MKrCgpbgKBFFHHS/jeL/gNJridW6c3gNjdODjzJl53+d87zdMMpm0ZDIZC8dxa7FYbDmXy62USiUrylKtVldZll3yer021IHL5bI5HI5Dt9u9b7fbjzwez7rVamUIIX/FzGYzXtO0vKIo37Va7bTVajkACmez2ZfpdOoLBoOboihy/X6/Co04Ho/F+XxehE8ejUZ+CsF+CcbXZDK5Z3RdJ4sly7KrXq+fAPwgCIIfwutoNLoN4WyhgZH8e/6kQOxP9AyWROnzSqWiYifowomox+jojud532AwuIjH41t4/wMN6fV6OsxGs9lUOp0OQZdhCmy324Fut0skSRIYRFTy+bxODeVy2YnzGeq5UCg8IfJNJBLZAXiI2VKggUWg1ZCCqKr6ToHQB5CINBoNgQ5Sod3TliGg89vDjVcwsQCcw7iBT30zpbFIa+5hM/KjGbnDwKDgBh0xSCKRcKIzezqd/sBff8WNvlAotAv4EBoCjYEZE4xBS6VSBN6w+VNuAS0i0dsvl3HG2GvUI04AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/d294d8390b01b1e6375048da41b35d06/3cbba/mm01.png",srcSet:["/think-cp4wa-lab/static/d294d8390b01b1e6375048da41b35d06/7fc1e/mm01.png 288w","/think-cp4wa-lab/static/d294d8390b01b1e6375048da41b35d06/a5df1/mm01.png 576w","/think-cp4wa-lab/static/d294d8390b01b1e6375048da41b35d06/3cbba/mm01.png 1152w","/think-cp4wa-lab/static/d294d8390b01b1e6375048da41b35d06/0b124/mm01.png 1728w","/think-cp4wa-lab/static/d294d8390b01b1e6375048da41b35d06/e2c46/mm01.png 1794w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Lab setup."),Object(r.b)("p",null,"  To start the lab, if you have not done so, access the VM images. If it has not been started, start the ",Object(r.b)("inlineCode",{parentName:"p"},"VM136_PoC_rh6_9")," images."),Object(r.b)("p",null,"  ",Object(r.b)("strong",{parentName:"p"},"Note:")," You can start the VMs by clicking on the ",Object(r.b)("inlineCode",{parentName:"p"},"play")," icon above each image, either the play symbol at the top to start both images or upon each monitor’s picture."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC8klEQVQoz1WT60tUQRjGx/pHIqKszPKWWq4YUd+7SKYRGUFQFAQFQdAFqT4HRXT3kmglZtTW6rbphrLuWu2lzNhNXdNM97jntnPmcubsmV7rSw0zDzPv7515ZuAdRDgjlNq2ADUonzeIgplJuW7oWVVbyi7ZQjDOVU2DiZPPwwD925Ft25TSfD6fwziL2ayKFw1iEG6ZhprN5lRTulIIkc1mQeX/DSXNlEpVTjgwR9hwMObC4g5zXMeVaZ42iM4ZBydwJtwxqP03gdoCeRe8X5WJnIYJJZRRlfAZjSxgtphjBhGvMq+mlLSqmpgQi1IFL9NFzDOY6ZQjapF5xfzy09QwZ7ZrsTwXLhfSEQ61qMPs6V/G+E9zMoNTCk1l4EVwOQlXBIqwwEs8M6f9UIm6SHPzxFRobs7StLxuuTniWgpd+KXP6dxQuKUJS+F4gemmq2M3h6b55KgcGpwfaD59rOl405GThw40H7z94uYnORJ3xlLO1w9yuDf+xLOzxrNre+3ummpP5d3Xt6IyFBdjaIZPReR7f/pNWXVVUZWnqGbX6nXrL9+6nJBjCfHxu/gGee3BhwWoACG0YuUK0Gv3W8blx4T4gKbZsnP/pLdka0Vh+bbCbbtXrVl78cbFmByN8UiSLzu3vnvw7+aWO1cSMhJjETTLZ2IyFFoKnrt+/vSFU2cvnTlx/lRHsO2zHJvIx9NuCia+5MsDR+v3H95Xf2T/3qY9XaEOcAaK4rPR1vC9J9HHvYmnXYOd7b7Wnkj301hn16f2/m/e0PRwW/geLPs+93QPdnb6O55Hn8GyO9rRP+FFjx62lhaXVFVU19XsKNtSVl5aUbu9tnhD8cbCoob6hqst1yBYWV5V59lRsrmkonwr0E0biiGhsaERJVPJAf9A8H3Q1+/r63vu9XoH/P7hkeHAu8BoeHR8/Iv/rX8oOOTzAe0DGggERv7QcDiMCHwIxqDKsWVhDGJBBOrWdV0oeM75MnUc/KdBCmMMKCAI/ga2+YGbG7eg9gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Lab images",title:"Watson AIOps Lab images",src:"/think-cp4wa-lab/static/15834d2686c56130396b91f4af92e36a/e1afb/mm02.png",srcSet:["/think-cp4wa-lab/static/15834d2686c56130396b91f4af92e36a/7fc1e/mm02.png 288w","/think-cp4wa-lab/static/15834d2686c56130396b91f4af92e36a/a5df1/mm02.png 576w","/think-cp4wa-lab/static/15834d2686c56130396b91f4af92e36a/e1afb/mm02.png 765w"],sizes:"(max-width: 765px) 100vw, 765px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"  You will be working in the ",Object(r.b)("strong",{parentName:"p"},"VM136_PoC_rh6_9")," image.\nOnce the image is running, click on the ",Object(r.b)("em",{parentName:"p"},"VM136_PoC_rh6_9")," image and start your web sessions."),Object(r.b)("p",null,"  The following table list the username and password for the lab exercise."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Component"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"User Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Password"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Linux"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"scadmin")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"scadmin"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DASH"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"ncoadmin")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"ncoadmin"))))),Object(r.b)("p",null,"  Login as ",Object(r.b)("inlineCode",{parentName:"p"},"scadmin")," by clicking on the name displayed. The password is ",Object(r.b)("inlineCode",{parentName:"p"},"scadmin"),"."),Object(r.b)("p",null,"  ",Object(r.b)("strong",{parentName:"p"},"Note:")," In this guide, you can always click on the diagram to see the bigger picture."),Object(r.b)("h2",null,"Lab Exercises"),Object(r.b)("p",null,"  Watson AIOps Metric Manager learns the behavior of the metrics that it ingests. To allow you to see the results in this lab, we have replicated a selected data stream from another system and feed it to the CP4WA-Metric Manager data mediation process. The date range of the data feed is from ",Object(r.b)("inlineCode",{parentName:"p"},"the 1st of April 2021 00:00 AM")," to ",Object(r.b)("inlineCode",{parentName:"p"},"the 25th of April 2:55 PM"),". The data is coming in 5 minutes intervals. CP4WA-Metric Manager processed the data, as they come, near real-time. Therefore, the lab simulates what the user will see on ",Object(r.b)("strong",{parentName:"p"},"the 25th of April 2021 at 3:00 PM"),"."),Object(r.b)("p",null,"  The data comes from a performance manager in a data center. Data includes application and infrastructure performance data.\nThe data comes every 5 minutes. Metric Manager processed related data in a topic. A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./ref/"}),"reference")," section had been included to explain the term used. In this lab, the topic is ",Object(r.b)("strong",{parentName:"p"},"THINK21"),"."),Object(r.b)("p",null,"  Metric Manager generates an event when it detects abnormal behavior that might indicate a potential problem."),Object(r.b)("p",null,"  A typical use of Metric Manager is to observe and act on the generated events. These events can be pushed to the rest of Watson AIOps and create stories and Chatops notifications. We will be looking only at events and Metric Manager interfaces."),Object(r.b)("p",null,"  We will start the first exercise by giving you an overview of the generated anomaly."),Object(r.b)("p",null,"  Metric Manager performs the analysis without any user configuration.  Once you configured the mediation and started feeding data into Metric Manager, all the algorithm is performed for you automatically.  This allows us to concentrate on the output of these algorithms for these lab exercises. The Metric Manager lab exercise is grouped into Use Cases. "),Object(r.b)("p",null,"  You will use the Firefox browser to perform the lab exercise. Start firefox by either clicking on the firefox icon on the menu bar or on the desktop.\nThere should already be a bookmark labeled ",Object(r.b)("inlineCode",{parentName:"p"},"IBM Dashboard Application")," on the firefox Bookmark toolbar area. "),Object(r.b)("p",null,"  Login as user ",Object(r.b)("inlineCode",{parentName:"p"},"ncoadmin")," with password ",Object(r.b)("inlineCode",{parentName:"p"},"ncoadmin"),". then click on the Use Case 1 below."),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/think-cp4wa-lab/mm/uc1/"}),"Use Case 1: Anomaly Dashboard and Causal Group")),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/think-cp4wa-lab/mm/uc2/"}),"Use Case 2: Flat line causing Slow Response Time")),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/think-cp4wa-lab/mm/uc3/"}),"Use Case 3: Dynamic Threshold")),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/think-cp4wa-lab/mm/uc4/"}),"Use Case 4: Forecast")),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/think-cp4wa-lab/mm/mediation/"}),"Mediation")),Object(r.b)("p",null,"  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/think-cp4wa-lab/mm/ref/"}),"Reference")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mm-index-mdx-5ba5ef9566143b1b9783.js.map