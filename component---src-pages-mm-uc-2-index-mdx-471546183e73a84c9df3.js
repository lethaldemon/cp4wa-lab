(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{cQlr:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return l}));var i=t("wx14"),n=t("zLVn"),o=(t("q1tI"),t("7ljp")),s=t("013z"),c=(t("qKvR"),{}),b={_frontmatter:c},r=s.a;function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)(r,Object(i.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Metric Manager Anomaly events."),Object(o.b)("p",null,"  The usual way that an Operation center works is through ",Object(o.b)("inlineCode",{parentName:"p"},"Management by Exception"),". Basically, the SREs are expected to be notified if something goes wrong.  Metric Manager improves this by sending anomalies.  It sends events when something is about to go wrong.  These events allow the SREs with ",Object(o.b)("inlineCode",{parentName:"p"},"Incident Avoidance")," tools, hence improving ",Object(o.b)("inlineCode",{parentName:"p"},"Meantime between failure"),"."),Object(o.b)("h2",null,"Flatline causing Slow Response Time."),Object(o.b)("p",null,"  When a metric typically varies and then stops varying, it almost always means something has gone wrong. It’s stuck, or something feeding it is stuck, or something it’s sending to is stuck. The ability to detect this behavior is beneficial. All customers with systems with limits of some kind – memory on a machine, connections to a database, traffic through a link, flow through a pipe, etc, will find this valuable. Metric Manager allows you to detect the threshold has been met without knowing the actual limit itself."),Object(o.b)("h2",null,"The Scenario."),Object(o.b)("p",null,"  The data for this use case was from a customer when the connections to their database were behaving unexpectedly. The connection pool for the customer’s application normally grew and shrunk constantly throughout the day as the usage of the system varied. Still, Predictive Insights detected that this behavior had changed. The application was stuck at the limit of its resources, which slowed the performance for users. It gave a clear starting point and root cause for a poor performance issue, which is notoriously difficult to diagnose."),Object(o.b)("h3",null,"The lab exercise."),Object(o.b)("p",null,"  Close your current tab from the previous use case.   Click the Flag icon (for incidents) from the menu strip on the right.  Select the ",Object(o.b)("inlineCode",{parentName:"p"},"Detected Anomalies")," menu item.  If you are not familiar with Watson AIOps Event Viewer, this is the ",Object(o.b)("inlineCode",{parentName:"p"},"Event Viewer")," page with the ",Object(o.b)("inlineCode",{parentName:"p"},"MetricManagerAnomalies")," Filter and ",Object(o.b)("inlineCode",{parentName:"p"},"MetricManagerView")," View already preselected."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABaUlEQVQozyVRa4/bIBD0//951Z1U5ZJem9iAeewCy9POh05yaIXWwwzeGZbdWKNUypmISilJKjNnkYZeb128jVGFbGhvvZZSwey91dZyiksIwTvLTDkn71zklCIThSqSg29ClJiiuLBHnEVoAXsKAbwlRqt264ilj1Ub/DSVeldaWfeq/VVRRGp3FB/a4PShtPWYqCyW7R+13z05adfVKM57KpeHQv+1atR11ZqzzWUL8fLYdJTrZlYf7lSXUQKHIDmfx4QB2Bm9wwhhNu9gxNkd4DGHwCXR8zwAPedIMpYqLwbHOMaw1iKzWpvZd/de3uMCL1J67yklfM45QWutOoxdM8yHmBLEYP+If2TAEQ80ABvizRkgaNiLZOPjMjsXia3K85w58hztmB1NkZQT4uW3uM45aq3oz/MgZnhkjP1305838/uf+zb544aE6Kbiry/1cVXYL9+b0coY/TZvjdZ4sG1bmYLz9B9/1vZ1UmVxiAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/c6ae35afb2c6bce3584ad41e1ade4b4b/3cbba/UC20.png",srcSet:["/think-cp4wa-lab/static/c6ae35afb2c6bce3584ad41e1ade4b4b/7fc1e/UC20.png 288w","/think-cp4wa-lab/static/c6ae35afb2c6bce3584ad41e1ade4b4b/a5df1/UC20.png 576w","/think-cp4wa-lab/static/c6ae35afb2c6bce3584ad41e1ade4b4b/3cbba/UC20.png 1152w","/think-cp4wa-lab/static/c6ae35afb2c6bce3584ad41e1ade4b4b/0b124/UC20.png 1728w","/think-cp4wa-lab/static/c6ae35afb2c6bce3584ad41e1ade4b4b/9d298/UC20.png 1857w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"  Observe:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"From the top bar, you can see that there is 1 ",Object(o.b)("inlineCode",{parentName:"p"},"Major")," events (Orange Exclamation Symbol) and 12 ",Object(o.b)("inlineCode",{parentName:"p"},"Minor")," events (Yellow Exclamation Symbol).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The default Severity for the anomaly events is ",Object(o.b)("inlineCode",{parentName:"p"},"Minor"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Check the list for individual anomalies discovered by Predictive Insights. You can see when an anomaly has started and finished occurring in the ",Object(o.b)("inlineCode",{parentName:"p"},"FirstOccurrence")," and ",Object(o.b)("inlineCode",{parentName:"p"},"LastOccurrence")," columns. ",Object(o.b)("inlineCode",{parentName:"p"},"Summary")," column describes the anomaly. ",Object(o.b)("inlineCode",{parentName:"p"},"Count")," shows how many times the anomaly has occurred. Columns like ",Object(o.b)("inlineCode",{parentName:"p"},"Node"),", ",Object(o.b)("inlineCode",{parentName:"p"},"AnomalousResource"),", ",Object(o.b)("inlineCode",{parentName:"p"},"AnomalousMetric"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Direction")," provide additional information on the anomaly.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"There is one event with the severity ",Object(o.b)("inlineCode",{parentName:"p"},"Major"),". The major anomalies represent consolidated events found by Metric Manager. In the ",Object(o.b)("inlineCode",{parentName:"p"},"Summary")," column, you can see the type of consolidation and how many metrics or nodes are involved."),Object(o.b)("p",{parentName:"li"},"Click the event with Node value ",Object(o.b)("inlineCode",{parentName:"p"},"PrimaryKWPUBIIS06"),", and Summary ",Object(o.b)("inlineCode",{parentName:"p"},"Connectionpoolsize is now a flat line where before it was varying"),"."),Object(o.b)("p",{parentName:"li"},"Observe:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The metric affected is ",Object(o.b)("inlineCode",{parentName:"p"},"Connectionpoolsize"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"summary")," tells you that this metric is flat. The direction column says it is ",Object(o.b)("inlineCode",{parentName:"p"},"Higher")," than expected. The odds are there is so much usage a ceiling of some kind has been hit. If the direction were ",Object(o.b)("inlineCode",{parentName:"p"},"Lower"),", we would suspect that usage had dropped right off and that the service connecting to this was stopped or broken."),Object(o.b)("p",{parentName:"li"},"Right-click on the event, and select ",Object(o.b)("strong",{parentName:"p"},"ServiceDiagnosis")," from the pop-up menu."),Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQY0z1R2U4kMQzs//84HvYFadAyA33k9pGzAxJQw0hYpcixq3wki/PJW0PMKSVVlVxjSqLactF9a7rvJCbqGrbWm2pBqtZagKyLUKIYmKi3mmJUUYQppZpzEamZRQVcERamjKK1pBjgi+gSNa3Wrj5RG2/GWdZY2utuboCx18PeDuskU+1bSIgfkf9d/m+RXmxeONPhnQkkbazWeVYq7e0w78a9Gwus1qdcuTYT0+7Dzbin58vrYS+7LLOzclCRzzkxbat1jhGDxwoAHKC39jGnCmNswDn7cfbNl6VX7BuYZc4Jcil1jBFCgI8nZCSEe+vnecp977sh8f31dT0IYqJ0FyP9Ky6994cYRoR/4JzzQ/y4gjPPcd1pGY0hRuzRGby/zji99xAgiIoQ4y/512opq9Uf4Pe+ydC7fbAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/a1ed556c7f61429fb63caeb09c7b0d1f/3cbba/UC21.png",srcSet:["/think-cp4wa-lab/static/a1ed556c7f61429fb63caeb09c7b0d1f/7fc1e/UC21.png 288w","/think-cp4wa-lab/static/a1ed556c7f61429fb63caeb09c7b0d1f/a5df1/UC21.png 576w","/think-cp4wa-lab/static/a1ed556c7f61429fb63caeb09c7b0d1f/3cbba/UC21.png 1152w","/think-cp4wa-lab/static/a1ed556c7f61429fb63caeb09c7b0d1f/0b124/UC21.png 1728w","/think-cp4wa-lab/static/a1ed556c7f61429fb63caeb09c7b0d1f/47f51/UC21.png 1853w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",{parentName:"li"},"You will see the following graph:"),Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB8ElEQVQoz12SWY+jMAyA+f8/ah/2eUphKNBWnRZoh6vkviAh6ZqOVlqtZQX7Sxx8JOKcP6dnVVV938/zPGImhVnMIpUxQs/wUfNqV844w4xSyihjhHFKMWYRZ0LJmSBilJFc2sUij4gna3Bd6LTX1NNu7Ywzve3d6qxbBj/p8R60jpDEBT/ezK1aqpzkja3zkJ/9+eqvh3C4rJfSl2Uov/xXFrLBD/e1ObzKuts5JaKRj6lJdmK3l/vUpGAkIolZnMgklWk2Z4Ut8iVPdboX+0Qlm87Zof5tBY8mNZ1ep0Qn2ZIVvohFXIQCbollXLyKD/qRzpsNl57DOWd5YfKDP35ef61KRkIL7PHDPVrfTuvUhAZWKLINLRRfhxpS7XxXhQpcaIF2mr1ki3JvdGS09g4MA60Cw1roiPtxocnLssxmhuYDX90Kq9YathZjnHNR2w/fwzghNA4DQojBICjBIATDCIFAOFxht/BNIAbWjVgb3b9biJdSUEIAwR5MG4av3vIm9g0NuJAmZ0wrBWog7eQzOzZtM9FOmI6bXswPzK+32wCPZhg6plq+8QcR9RNdenS6dw3i1ZOWTR/BEUyZXaHe8KNgQ7YYoy3Jvxwg/IpKzYRcnIdXhwiNpJRQlff+9Y+EEP4jPxigdy6E7QB4fwC4vaE5F66KmgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/65995d5c4239f81fbda09b3cb522558e/3cbba/UC22.png",srcSet:["/think-cp4wa-lab/static/65995d5c4239f81fbda09b3cb522558e/7fc1e/UC22.png 288w","/think-cp4wa-lab/static/65995d5c4239f81fbda09b3cb522558e/a5df1/UC22.png 576w","/think-cp4wa-lab/static/65995d5c4239f81fbda09b3cb522558e/3cbba/UC22.png 1152w","/think-cp4wa-lab/static/65995d5c4239f81fbda09b3cb522558e/a3d24/UC22.png 1241w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",{parentName:"li"},"Observe:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"Connectionpoolsize")," for the last week can be seen.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The green area is the baseline that indicates the expected range of values. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The red zone at the right of the chart shows where something unexpected has happened. Here Metric Manager raises an anomaly while the metric value is ",Object(o.b)("strong",{parentName:"p"},"inside")," the baseline. Metric Manager does this because the metric normally varies in value, but it has now gone completely flat. The monitored system has hit a limit in the maximum number of connections."),Object(o.b)("p",{parentName:"li"},"We want to zoom on the diagram.  So click on the start diagram anywhere you want to see the start time and pull to the right until you passed the red box.  See the following chart for approximate zoom area:"),Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"646px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.0138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAACRUlEQVQozz2SaXOiQBCG/f//ZrcqW5uzNka8IMHVIMMlDseAR0AQueZgG93KfOjqfovnnemmB53oOt6J67nlcC6XSxzHWZod9mlIjoQc4ziNo5SQLyhjL97h6FKVA9KSIz0CxjhLaIIpTmkKJRc8osQMv0jQBYHwA7716HJ71ElJ1GMww43oBhrXDGbUrAZMY5omNItaJS0d6qzYUg43Lm6joEM4G26tIbbmJDIV15mbLe8GiCODG7jFa75GAvUlNdzWXYs15MNIm+LA8aoR3rwG1qtvSoE/e1cd+RsWhs51SAA2OuNmYXYm4roUo3HgyTgcEnsUbt5C522PX2aSOTEoPHt+nMuJDJ/2FkxflavehaFe/5LvkfJgaK++dY9Wv9Hy0fx8xuaTNLSnZgswYEqiqJkKFspJUXNVItJ0P4XE4GhE1j+X73efH/fm6sVFT7b2Y6XePT84M6uHrc5aXpaTeKJTHS6HcnFewLV2Z+t8vYj9EXJ/aYsx2ULPUrh5BAtp6CpO3zMw/xvmCHIYmy506BxEmPaa7Byvlr3QxIW63b275E/sjP8qm7ndwznNoyaCCe/ormLViZ7gz+utDmXSJraf2m5punngC99jeNt8ePvxXMYTpwG43yrRtaKllFZlVZc1o6wRzW3h2oY1Db8UdZLm6elcV7Ru2KUom6IGbkAZbdpGcFFVVc9XFecc+NsBBba1aWrQ6roSgl81CusI7oMkSQ6HA8QkTYqiyPP8fD5/xyzLILnGIst6+SbmWX46nf4BxL7AfbgUE6UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/78af69c83223add8f54f0435c6e6e925/ebebe/UC23.png",srcSet:["/think-cp4wa-lab/static/78af69c83223add8f54f0435c6e6e925/7fc1e/UC23.png 288w","/think-cp4wa-lab/static/78af69c83223add8f54f0435c6e6e925/a5df1/UC23.png 576w","/think-cp4wa-lab/static/78af69c83223add8f54f0435c6e6e925/ebebe/UC23.png 646w"],sizes:"(max-width: 646px) 100vw, 646px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",{parentName:"li"},"Observe:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the zoomed graph, hover your mouse on top of the flat line, and you can see that the metrics have hit the 3,200 ",Object(o.b)("inlineCode",{parentName:"p"},"connection pool size"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Somewhere in this system, the limit for this connection pool has been set to 3,200. The system has slowed down because all the connections are in use, so users have to wait for connections to be freed before responding. Enough requests have built up so that they are immediately consumed as soon as any connections are released."),Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"631px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.2361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAACBElEQVQoz21SbY/SQBDu71cT/QN+PKMXc4l6Ub8Yz5fjTg4QcvRlC5TwUihw3dKW7bY7++JAkRh19snmyew+MzuzY2mpjTQIJEoqJlhSJbSieZVLITVoWRsAaK3TDC7fQ7O1VwBYkYhCCCOIYhGDhIVY2NJ2pYsIRLCClZBCKaWl0sZwuqZnz7PPH5ErKS0b7L7sowDhC98H35MeAsWOdPrQz0SG7yqAzfTSp63g5ePNt3e6zuwpjyiCQPI3DiHGYjzlU7fAQK5Pf/rnz8JPF8fMdZ7/4KAfmEGbth3ihGE4n8+2WR70O6MPr1SduZW02tt2jc62c+Ituvd3d91O3HGGznQ5cYduuFrMererqzcGxRKsujc1sEjcjzWDe8/vmw/N6+X1XXx3EzUamx+98Ds5e7T+8vZYM/YJNQgkEzEZVSNb2Y5yXOUiiCa9XQ9fZJd934xGaTc4f7r++rthURWlIk1EUneVChpAMIYxAeIJjwjiaY8Y4knXNp6XNIMXTx6uLs2+YWDhbJyA/3mYh/1ElFAiuOBBFeD/DWEQyElK5/zitbhpqLrbKNixHStYVVUYryzLgheMMa1woHTB9otxpo0WlSgZL2giOTcHszjneBWVeBUTFkWBHiRKK3SiEsOpg/GS46nAM4lyjn4rjuPNZkMpTZIk+8PyPMc9TdMT/9d+AVcHykjMVGuxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/dea3174267f7b6a528b7b5be4e0b42b5/c9f53/UC24.png",srcSet:["/think-cp4wa-lab/static/dea3174267f7b6a528b7b5be4e0b42b5/7fc1e/UC24.png 288w","/think-cp4wa-lab/static/dea3174267f7b6a528b7b5be4e0b42b5/a5df1/UC24.png 576w","/think-cp4wa-lab/static/dea3174267f7b6a528b7b5be4e0b42b5/c9f53/UC24.png 631w"],sizes:"(max-width: 631px) 100vw, 631px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",{parentName:"li"},"Look at the bottom part of the page, and you can see the causal group.\nNote the ",Object(o.b)("inlineCode",{parentName:"p"},"Processortime")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"Usertime")," are in the causal group, with a flat line anomaly.\nSelect the ",Object(o.b)("inlineCode",{parentName:"p"},"Usertime")," metrics."),Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7ElEQVQozy1SWZKbMBDl/rdIcod8JZX5SaWS2cDEDMbGMWCDjIwA7atJM8mrV1pa/bpbakWCC9ShuqoF57OQQqkQwj3cl/uy+HeGxRo79AOdKJkIo2zel3PfMyEiPE546LngIxkpZUw6wjSm/MJv2PejI4MlpSub0FBPIaIJhn/77FG7LEtU6P3O5ZnZlayhQt3ccHJVYQ9PPH1Wm23Y5iF/C2+wKHyBHCpcUXz9INsaKosytU3U6yN7/n57yc1uozcv6iXWcao3j3PyOMeJSlKVpjKNeZy6NBHJ4ctHjc6r+E0eW9U3okvI7on/ynRWm7oyVW7zIuS/Rb5XZWaz1G4Tmbzy19RsqodPpmtWMRajMXepvPQKh145BS/knTfeAJW1k1RXQVo5NAoV5ljqGv98cLfbemdvnffeWBN8sOBrrHNOKgl6JZXRBgg98C4ILpXWUmrYGmPALTrWZ9Tjru0wxjOdAeM7CCE99IMxCGbt++Csd/8BFtBHbdtBnwgZOGdrFq054wA41krZNcOqBAt8AgClFGbYQl3Rj2x/6MdqlsA/I4exuJL4WOcdPs3yNIrTtLLE4x4NSdVll/5wYzs0butrFJ+6lkokLPAqLbxYM/H8jM6zuEoHln9EXF1mvkdjTeYLM82kjgj/BW+TY8EftLqZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/83c9a3834c98cbf4d3ae4b4bbc84bab9/3cbba/UC25.png",srcSet:["/think-cp4wa-lab/static/83c9a3834c98cbf4d3ae4b4bbc84bab9/7fc1e/UC25.png 288w","/think-cp4wa-lab/static/83c9a3834c98cbf4d3ae4b4bbc84bab9/a5df1/UC25.png 576w","/think-cp4wa-lab/static/83c9a3834c98cbf4d3ae4b4bbc84bab9/3cbba/UC25.png 1152w","/think-cp4wa-lab/static/83c9a3834c98cbf4d3ae4b4bbc84bab9/d460a/UC25.png 1224w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",{parentName:"li"},"Observe:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When the ",Object(o.b)("inlineCode",{parentName:"p"},"Connectionpoolsize")," hits a limit of 3,200, the User processor time becomes starved. This translates to ",Object(o.b)("strong",{parentName:"p"},"Slow Response Time"),".  The metric Response time, in this case, is not provided to Metric Manager. However, you can conclude that as the system has reached its maximum connection pool size, the service and users that depend on the connection have to wait for the connection to be released; this translates to poor performance."),Object(o.b)("p",{parentName:"li"},"Summary during the customer interaction on this use case: "),Object(o.b)("p",{parentName:"li"},"In typical operation, the system runs close to its limit. That is why the system slows down intermittently and why these slowdowns are hard to diagnose. Only a tiny increase in average load is required to put the system under pressure. Traditional monitoring will struggle to detect these cases because you would need to find and then apply the exact connection pool configuration for each occurrence of this metric (that’s going to be time-consuming and expensive). Then you will need to remember to update this threshold every time an application change is made. Predictive Insights finds this case automatically across every single metric. So you are automatically covered for connection pool size, memory, processor usage, and many others without any configuration."))),Object(o.b)("h3",null,"Customer Quotes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"”",Object(o.b)("em",{parentName:"li"},"Before Predictive Insights (previous name of Metric Manager), it took 30 minutes to decide what to investigate. Now it takes less than 3 minutes."),"”")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mm-uc-2-index-mdx-471546183e73a84c9df3.js.map