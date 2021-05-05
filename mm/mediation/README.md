# THINK 2021, Lab:2177.
## Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps.
## Metric Manager.
### Mediation.

Metric Manager can ingest data from 4 generic sources:
- Kafka 
- REST Interface
- Files, for example, CSV files.
- JDBC.

For Cloud environment, either Kafka or REST are much more common. Files and JDBC are used mostly in the more traditional on-premise environment.
Using these common integration types, to speed up connecting Metric Manager to your Performance Manager application, both IBM and the communities have created mediation packs. The following list some of the mediation packs: 

- AppDynamics.
- Aternity.
- AWS Cloudwatch.
- BMC TSIM.
- CA .
- Cisco Prime .
- DC RUM.
- Dynatrace.
- ExtraHop.
- IBM Integration Bus.
- IBM Performance Management.
- IBM Spectrum Control.
- Juniper Networks Cloud Analytics Engine.
- Logstash.
- MF (HP) APM.
- Microsoft Azure.
- Microsoft SCOM.
- Nagios XI Mediation Pack.
- NetIQ AppManager.
- Network Manager (ITNM).
- Network Node Manager i.
- New Relic.
- Omegamon.
- Oracle OEM.
- Pivotal Cloud Foundry.
- SAP Hana.
- Solarwinds.
- Splunk.
- Statseeker.
- VMware vCenter.
- Zabbix.

The latest list and more detail about the mediation packs can be found at this [IBM documentation](https://www.ibm.com/docs/en/oapi/1.3.6?topic=resources-mediation-packs).

#### The lab exercise.

Metric Manager generates Information Events as it is ingesting the mediation data. You can see the mediation progress and completion by going to the `Event Viewer` pages of Watson AIOps Event Manager.

For this lab, a page has been created. Select the Flag (incident) icons, and select the `MetricManagerMediation`.

An Event Viewer screen will be displayed with `MetricManagerInfo` Filter preselected.  

<img src="./images/mediation_2.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<br>

Observe:

- All alerts are information alerts, they are of lower severity.
- The beginning of the training time is shown by the `New model traning started`.
- As the training is being performed, you can see the progression: 25%, 50%, 75%.
- Once the training is completed, a `New model produced` information is generated.


#### [<Prev](../uc4)                                         [Reference>](../ref/)
