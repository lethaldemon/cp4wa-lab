(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{j2hI:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return s})),n.d(a,"default",(function(){return d}));var t=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),c={_frontmatter:s},l=i.a;function d(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Metric Manager."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'Watson AIOps Metric Manager consumes and analyzes your metrics or time-series data and provides **early warning** of *abnormal behavior* which might indicate potential outage, service degradation, or unexpected change. \n\nIt uses AI to build thresholds and baselines dynamically, without the need for configuration. Therefore, you do not need to keep adjusting the baseline as you do in a traditional Performance Manager system.\nWatson AIOps Metric Manager evaluates based on normal behaviors of the data, and it can detect anomalous behavior on KPIs (Key Performance Indicator). Normal behavior is learned through an initial training period to build an analytics model and constant model retraining as new data loaded thereafter. \n\nIf a KPI is deemed anomalous, an event is raised.  Events can be viewed and actioned in the Watson AIOps Event Manager. If required, you can trigger the runbook automation, available in Event Manager, to resolve your potential issue even before it happens.\nIn Operation, once Metric Manager continuously ingests the metric data, as an SRE you will be notified of possible unresolved issues through the consolidated alerts generated by Metric Manager. \n\nHere is a diagram on Watson AIOps Metric Manager.\n\n<img src="./images/mm01.png" alt="Watson AIOps Metric Manager" width="800" align="center"/>\n<br>\n')),Object(r.b)("h3",null,"Lab setup."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'To start the lab, if you have not done so, access the VM image. If it has not been started, start both the `rhdesk` and `VM136_PoC_rh6_9` images.\n**Note:** You can start the VMs by clicking on the `play` icon above each image, either the play symbol at the top to start both images or upon each monitor\'s picture.\n\n<img src="./images/mm02.png" alt="Watson AIOps Lab images" width="500" align="center"/>\n\nLike other Watson AIOps Lab exercises, you will be working in the __rhdesk__ images.\nOnce both images are running, click on the _rhdesk_ image and start your web sessions.\n\nThe following table list the username and password for the lab exercise.\n\n| Component | User Name | Password |\n| --- | :---: | :---: |\n| Linux | `ibmuser` | `engageibm!` |\n| DASH | `ncoadmin` | `ncoadmin` |\n\nLogin as `ibmuser` by clicking on the name displayed. The password is `engageibm!`.\n<br>\n<img src="./images/mm03.png" alt="Watson AIOps Lab images" width="300" align="center"/>\n\n**Note:** In this guide, you can always click on the diagram to see the bigger picture.\n')),Object(r.b)("h3",null,"Lab Exercises"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"Watson AIOps Metric Manager learns the behavior of the metrics that it ingests. To allow you to see the results in this lab, we have replicated a selected data stream from another system and feed it to the CP4WA-Metric Manager data mediation process. The date range of the data feed is from `the 1st of April 2021 00:00 AM` to `the 25th of April 2:55 PM`. The data is coming in 5 minutes intervals. CP4WA-Metric Manager processed the data, as they come, near real-time. Therefore, the lab simulates what the user will see on __the 25th of April 2021 at 3:00 PM__.\n\nThe data comes from a performance manager in a data center. Data includes application and infrastructure performance data.\nThe data comes every 5 minutes. Metric Manager processed related data in a topic. A [reference](./ref/) section had been included to explain the term used. In this lab, the topic is **THINK21**.\n\nMetric Manager generates an event when it detects abnormal behavior that might indicate a potential problem.\n\nA typical use of Metric Manager is to observe and act on the generated events. These events can be pushed to the rest of Watson AIOps and create stories and Chatops notifications. We will be looking only at events and Metric Manager interfaces.\n\nWe will start the first exercise by giving you an overview of the generated anomaly.\n\nMetric Manager performs the analysis without any user configuration.  Once you configured the mediation and started feeding data into Metric Manager, all the algorithm is performed for you automatically.  This allows us to concentrate on the output of these algorithms for these lab exercises. The Metric Manager lab exercise is grouped into Use Cases. \n\nYou will use the Firefox browser to perform the lab exercise. Start firefox by either clicking on the firefox icon on the menu bar or on the desktop.\nThere should already be a bookmark labeled `IBM Dashboard Application` on the firefox Bookmark toolbar area. \n\nLogin as user `ncoadmin` with password `ncoadmin`. then click on the Use Case 1 below.\n\n[Use Case 1: Anomaly Dashboard and Causal Group](./uc1/)\n\n[Use Case 2: Flat line causing Slow Response Time](./uc2/)\n\n[Use Case 3: Dynamic Threshold](./uc3/)\n\n[Use Case 4: Forecast](./uc4/)\n\n[Mediation](./mediation/)\n\n[Reference](./ref/)\n")),Object(r.b)("p",null,Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"./uc1/"}),"Next >")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mm-2-v-ms-readme-md-cec3b2ad604d41079ec0.js.map