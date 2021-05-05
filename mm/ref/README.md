# THINK 2021, Lab:2177
## Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps
## Metric Manager
### Reference: Metric Manager Terminology and Concept

Some of the concepts of Metric Manager.
- __Training__.  Training is the number of weeks (default 2) by which Watson AIOps Metric Manager builds its analytics model and learns the behaviour for the metric groups, metrics and resources defined in the mediation model.
- __Aggregation Interval__, The aggregation interval is the time period by which metric data is grouped to be aggregated. Data is normalized to the same interval so it can be processed by the algorithms. Usually, the aggregation interval needs to be set to the data collection interval, or to the smallest common multiple of data collection intervals if several data sources are fed to a single algorithm. Typical values are 5 minutes, 15 minutes, or 1 hour.
- __Mediation Model__. The mediation model is the model created using the mediation tool. This is an XML file with a .pamodel extension that is deployed to the Watson AIOps Metric Manager database. It describes to the analytics component the metric groups, metrics and resources to be extracted and from what datasource. These models must be deployed to a topic.
- __Analytics Model__. The analytics model learns behaviour and automatically detects trends and behaviour of metrics and resources using custom algorithms developed in conjunction with research from the Watson project.
- __Topic__, A topic is a method by which Watson AIOps Metric Manager can separate data logically by geograpic location, application or any other grouping which makes sense to the user. 
- __Anomaly vs Alarm__. An anomaly is when a KPI deviates from its normal behaviour. Metric Manager learns, defines and refines normal behaviour during training. An anomaly may be temporary.  An alarm is when Metric Manager sees a KPI (or multiple KPIs) have deviated to a level where it is a problem and must be investigated.
- __Baseline__, A baseline is a guide to display the upper and lower values within which a KPI can appear without it being anomalous. A baseline is learned during training. It is shown in the Watson AIOps Metric Manager UI with a green shaded area.
We have 2 different types of baseline. One that changes with the KPI value which is seasonal. The other that remains a flatline even though the KPI values fluctuate which is non-seasonal.
The baseline is constantly being recalculated. The baseline is defined using the analytics model. The analytics model, once trained, begins retraining immediately. A baseline is created each time we create an analytics model. The first analytics model is, by default, based off 4 weeks of data. After the first model is created retraining of the Analytics model occurs by default with each new day of data.
- __Steady state__ is when you are loading for the latest interval which is in near real time. You are in steady state if you are loading your latest data close to now time through mediation and are scoring. Training may happen in steady state but it will take until the end of training period before alarms will appear.
- __A causal group__ is the group of related metrics (max of 6) that are deemed to be related to an anomalous KPI. When you launch an alarm the causal group is displayed in the related metrics tab.
- __Consolidated alarm__ is multiple alarms can be grouped together into one consolidated alarm in the AEL. Each can have a causal group of 6 max which may lead to many related metrics.
