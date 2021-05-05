# THINK 2021, Lab:2177
## Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps
## Metric Manager
### Use Case 4: Forecast

#### Forecast
This use case is similar to the previous use case.  There is a sudden increase (or decrease) in the metrics value.  Metric Manager can perform non-linear forecasting based on the previous value of the metrics. It can then alerts the user based on the forecast value before the increase or decrease of metrics becomes a problem.

#### The Scenario
Metric Manager alerts a customer to an issue with a Response Time metric. On opening the anomaly a forecast of the metric is provided so that the user knows if the problem needs to be addressed immediately or not.

#### The lab exercise

Select the `Responsetime is Higher than expected. Actual: 8141 Expected: 691` for the Node `Worklight17KYNS` and select __ServiceDiagnosis__

<img src="./images/UC41.png" alt="Watson AIOps Metric Manager" width="900" align="center"/>
<br>

Observe:
- This is the reponse time of an application _Worklight17KYNS_.
- The behaviour of Responsetime for the last week can be seen. It is clearly growing sharply in the anomalous area.

Zoom on the red area.

<img src="./images/UC42.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
<br>

Select `Forecast Metrics` from the icons as can be seen in the screenshot.

<img src="./images/UC43.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
<br>

Observe:

- The forecast graph change to refrect the learned data for that metric, from a straight line before to a more irregular shape reflecting the forecasted metrics.
- Hover your mouse to the last metrics on the red area. It shows the timestamp at 2:55 PM. As mentioned at the beginning of this lab, the last data feed timestamp into Metric Manager was 4/25/21 at 2:55 PM.  Metric Manager monitor the data near real time.
 
Hover the mouse on the forecasted metric, until you are above 8,500 values.  

<img src="./images/UC44.png" alt="Watson AIOps Metric Manager" width="500" align="center"/>
<br>

For the purpose of this lab, let us say that you have set the threshold at  at 8,500 miliseconds, or 8.5 seconds. ( The customer from where this data is extracted from actually set the threshold at 9 seconds).  The threshold will be breached at 4:35 PM.  Metric Manager manage to alert the user prior to this value being reached, allowing the customer an __Early Detection__ of potential problem.


#### [<Prev](../uc3)                                         [Next>](../mediation)