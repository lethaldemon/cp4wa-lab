# THINK 2021, Lab:2177
## Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps
## Metric Manager
### Use Case 1: Anomaly Dashboard


## Metric Manager Anomaly Dashboard

You start this lab exercise by already logged in as user `scadmin` in the `DASH`.
From the dashboard, click the incident menu (it looks like a flag).

<img src="./images/UC11.png" alt="Watson AIOps Metric Manager" width="300" align="center"/>
<br>

There are three menu options related to Metric Manager: 
- Detected Anomalies
- MetricManagerMediation
- Service Diagnostic Dashboard.

For now, select the "Service Diagnostic Dashboard."

<img src="./images/UC12.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<br>

You will see an overview of the detected anomalies in the system.  There will be four widgets available:
- Anomalies By Hour
- Top 10 Anomalous Nodes
- Top 10 Anomalous Resource
- Top 10 Anomalous Metrics

Observe by:
- Spend a few minutes observing the dashboard.  
- Hover your mouse on the shapes and histogram, and notice the information popup.
- Notice the Topic Name THINK21 in the data.  Metric Manager analyze the relationship between KPIs (resources and metrics} in the same topic. 

We want to look at the resources in our data set that produces the most Alarms.  `Server:HDD1` has the biggest circle, with alarm counts of 4.  Let us look at the resource that produces the most anomaly. Click on the biggest circle in the __Top 10 Anomalous Resources__, and you will see the list of the four groups.

The `Blkwtrnpersec` comes from the original performance data. It is derived from the `Blocks Written Per Second` attribute of the Linux Disk IO data set (`Disk IO.Blk wrtn per sec`).

<img src="./images/UC13.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<br>

Select the first raw and click Launch.

<img src="./images/UC14.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<br>

In the first upper portion 
You can see the four alarms as the red area.  Click the arrow in the box, and you can see the values of the metrics value threshold violation.  This can also be achieved by hovering your mouse on the graph inside the red area.

<img src="./images/UC15.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>

Metric Manager as part of its algorithm perform casual group ( See the [reference](./ref/) section).

<img src="./images/UC16.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<img src="./images/UC17.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<img src="./images/UC18.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
