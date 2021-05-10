(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Dbwc:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return m}));var n=t("wx14"),i=t("zLVn"),b=(t("q1tI"),t("7ljp")),l=t("013z"),r=(t("qKvR"),{}),p={_frontmatter:r},c=l.a;function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(b.b)(c,Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Mediation"),Object(b.b)("p",null,"  Metric Manager can ingest data from 4 generic sources:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Kafka ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"REST Interface")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Files, for example, CSV files.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"JDBC."),Object(b.b)("p",{parentName:"li"},"For Cloud environment, either Kafka or REST are much more common. Files and JDBC are used mostly in the more traditional on-premise environment.\nUsing these common integration types, to speed up connecting Metric Manager to your Performance Manager application, both IBM and the communities have created mediation packs. The following list some of the mediation packs: ")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"AppDynamics.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Aternity.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"AWS Cloudwatch.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"BMC TSIM.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"CA .")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Cisco Prime .")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"DC RUM.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Dynatrace.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"ExtraHop.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"IBM Integration Bus.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"IBM Performance Management.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"IBM Spectrum Control.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Juniper Networks Cloud Analytics Engine.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Logstash.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"MF (HP) APM.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Microsoft Azure.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Microsoft SCOM.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Nagios XI Mediation Pack.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"NetIQ AppManager.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Network Manager (ITNM).")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Network Node Manager i.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"New Relic.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Omegamon.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Oracle OEM.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Pivotal Cloud Foundry.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"SAP Hana.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Solarwinds.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Splunk.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Statseeker.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"VMware vCenter.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Zabbix."),Object(b.b)("p",{parentName:"li"},"The latest list and more detail about the mediation packs can be found at this ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/docs/en/oapi/1.3.6?topic=resources-mediation-packs"}),"IBM documentation"),"."))),Object(b.b)("h3",null,"The lab exercise."),Object(b.b)("p",null,"  Metric Manager generates Information Events as it is ingesting the mediation data. You can see the mediation progress and completion by going to the ",Object(b.b)("inlineCode",{parentName:"p"},"Event Viewer")," pages of Watson AIOps Event Manager."),Object(b.b)("p",null,"  For this lab, a page has been created. Select the Flag (incident) icons, and select the ",Object(b.b)("inlineCode",{parentName:"p"},"MetricManagerMediation"),"."),Object(b.b)("p",null,"  An Event Viewer screen will be displayed with ",Object(b.b)("inlineCode",{parentName:"p"},"MetricManagerInfo")," Filter preselected.  "),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA40lEQVQY002Q227EIAxE8/+fuK2qKmqVQILNVUDz0rOw3a4fEBnPGccs22a/13Xb98NaEdmtGGOccyVG934rsn4Y87nJ7evNBz2dOJHzPDF4r4sLSdQH73vvSCnFWuu9hxSjj6nk/NNrqy0EJE83j+KyHKE49TEEYFVNKaGSrSKllD6qtTaZRNBfoS/W58OJquCAifE+2Vo77/MTHyeTiZ7YTFx2fcCoAHPyMYrlOTFNADiPydz/J/MMbI8wdk64YQji5AmngpW/wDCzXmBRnuK6Lnpkz/9/Fiswky4wcTDXKPhffVKM2j0QADgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Watson AIOps Metric Manager",title:"Watson AIOps Metric Manager",src:"/think-cp4wa-lab/static/280faf3f0aa0d2c06f6ae8b07e146ea7/3cbba/mediation_2.png",srcSet:["/think-cp4wa-lab/static/280faf3f0aa0d2c06f6ae8b07e146ea7/7fc1e/mediation_2.png 288w","/think-cp4wa-lab/static/280faf3f0aa0d2c06f6ae8b07e146ea7/a5df1/mediation_2.png 576w","/think-cp4wa-lab/static/280faf3f0aa0d2c06f6ae8b07e146ea7/3cbba/mediation_2.png 1152w","/think-cp4wa-lab/static/280faf3f0aa0d2c06f6ae8b07e146ea7/d547e/mediation_2.png 1233w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(b.b)("p",null,"  Observe:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"All alerts are information alerts, they are of lower severity."),Object(b.b)("li",{parentName:"ul"},"The beginning of the training time is shown by the ",Object(b.b)("inlineCode",{parentName:"li"},"New model traning started"),"."),Object(b.b)("li",{parentName:"ul"},"As the training is being performed, you can see the progression: 25%, 50%, 75%."),Object(b.b)("li",{parentName:"ul"},"Once the training is completed, a ",Object(b.b)("inlineCode",{parentName:"li"},"New model produced")," information is generated.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mm-mediation-index-mdx-a4b2e1e774e214f0b37e.js.map