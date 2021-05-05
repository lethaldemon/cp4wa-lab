# THINK 2021, Lab:2177
## Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps
## Metric Manager
### Use Case 1: Anomaly Dashboard

<img src="./images/UC11.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
<img src="./images/UC12.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>



## Metric Manager Anomaly Dashboard

From the dashboard, click the incident menu (it looks like a flag).
There are three menu options for AIOps Metric Manager: 
Detected Anomalies
MetricManagerMediation
Service Diagnostic Dashboard.
 Select the "Service Diagnostic Dashboard."

You will see an overview of the detected anomalies in the system.  There will be four widgets available:
Anomalies By Hour
Top 10 Anomalous Nodes
Top 10 Anomalous Resource
Top 10 Anomalous Metrics

Spend a few minutes observing the dashboard.  Hover your mouse on the shapes and histogram, and notice the information popup.
Notice the Topic Name THINK21 in the data.  MM analyze the relationship between KPIs (resources and metrics} in the same topic. 

We want to look at the resources in our data set that produces the most Alarms.  "Server:HDD1" has the biggest circle, with alarm counts of 4.   Click on the biggest circle in the Top 10 Anomalous Resources, and you will see the list of the four groups.

<img src="./images/UC13.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>

The `Blkwtrnpersec` comes from the original performance data. It is derived from the `Blocks Written Per Second` attribute of the Linux Disk IO data set (`Disk IO.Blk wrtn per sec`).

Select the first one and click Launch.

<img src="./images/UC14.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>

In the first upper portion 
You can see the four alarms as the red area.  Click the arrow in the box, and you can see the values of the metrics value threshold violation.  This can also be achieved by hovering your mouse on the graph inside the red area.

<img src="./images/UC15.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>

MM as part of its algorithm perform casual 


<img src="./images/UC16.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
<img src="./images/UC17.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
<img src="./images/UC18.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
