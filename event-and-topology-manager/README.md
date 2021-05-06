# Introduction.

The event manager is a component of IBM Cloud Pak for Watson AIOps. It equips you with a console that allows you to monitor, troubleshoot and resolve alerts in your application, services, and network infrastructure.

As part of this lab, you will be using a workstation to connect to a shared cluster and walk through some tutorials. You will receive a user-id and password to access the bookmarked pages in a given browser.

As part of the analytics provided by the event manager, you will have the capability of executing:

* [Event Grouping.](eventgrouping.md)
* [Seasonal Correlation.](seasonal-correlation.md)
* [Temporal Correlation.](temporal-correlation.md)
=======
Event manager provides the industry leading advanced event correlation. It uses algorithms like association rule-learning, temporal, spatial clustering and other machine learning (ML) algorithms. It measures accuracy, chesion and completeness of the correlation. This, not only reduces the event flood, but also accelerates the incident diagnosis.

As part of this lab, you will be using the workstation to connect to a shared cluster to walk through some of tutorials provided here. You will be provided an user-id and password to log in to the bookmark in the provided browser.

As part of this tutorial you will 

* [Launch the console](#Launch-the-console)
* [Navigate the Event Viewer ](#Navigate-the-Event-Viewer )
* [Analytics based grouping of the events](#Analytics-based-grouping-of-the-events)


## Launch the console

In the environment provided to you, in the desktop vm, launch the browser. Select the bookmark **EventManager-Console**.  

![console](images/console.png)  

Use the credentials provided to you and select **Login** button.  
```
For example:
userid: user1
password: xxxxxxxxxx
```  
Once you login, you can navigate to the event viewer.  
![after-login](images/home.png)  

## Navigate the Event Viewer  

Click on the flag icon which is highlighted to launch the event viewer. **Note**: change the default to Default filter.  As your user is assigned **operator** role, you will not have the capability to edit the filters and edit the views. Those icons in the console are colored blue. 

![event viewer](images/eventviewer1.png)

You also can act on these events further. If you scroll from left to right, you will find where these 

1. **Search Events**: You will see events that are available in the system as your user-id is provided access to list all the events. Select and click on the search icon ![search](images/search.png) and type **myapp.example.com**.  This will filter the events that match the string.  To remove the search filter you can click on **x** in the search field.

   ![filter](images/filter.png)   

2. **Filter Events**: In the event viewer, you can filter the events by severity. You can use the funnel icon ![funnel](images/funnel.png) to select what events you want to see.   

   For example select **Critical** and **Major** events and select the **Apply filters**.   
   ![apply filter](images/applyfilter.png)  

   Now you will notice it lists only the events which are **Critical** and **Major**.  To change the view, go back to the filter icon and unselect the previously selected events and apply the filter again.  

   ![eventviewer-filter](images/eventviewer2.png)  

3. **View the event details**: Select the event row  which has Node name as front-end-svc.myapp.example.com. **Hint**: You can search for it as listed above. This will launch the **event details** where you can act upon. You can collapse **Actions** and expand Information to view the event fields with values. You can scroll down to see the various fields with the corresponding values.    

   ![event details](images/eventdetails.png)  

## Analytics based grouping of the events

By default, out of the box, example analytics is provided. This is named as **Example_IBM_CloudAnalytics**, listed in the toolbar. This analyzes the events and correlaates them depending various factors like scope based, association rule-learning, temporal, spatial clustering etc.

![analtics](images/example-analytics.png)

You will notice the appearcance of ![down-arrow](images/downarrow.png) icon before the **Sev** column. This means that few events are grouped. You click it to display all the events that grouped, where the events are grouped against `Weekly backup started on Hypervisor hyper.example.com`.  

![expand-events](images/eventviewer3.png)  

### Event Correlation

You can drill down further on how and why these events are correlated. To see this correlation, you have to select the event correlation icon, labeled as **Correlation Information** which is highlighted below. This will add new columns to the event console.

![event correlation](images/eventviewer4.png)  

In the above view each column represent a type a of correlation associated with the event. 

1. Column with icon ![temporal](images/temporal.png) provides the temporal correlation. Events which occur briefly are all grouped together and represented here. 

   Select the first event in group which has Node value as `https://myapp.example.com`.  When you click **.d**, you will see more details on this correlation. In the details section you will when this event happened first and how many instances are grouped. This also shows the instance duration. You will see a calendar showing when this type of event occurred.

   ![temporal correlation](images/temporal-correlation.png)

2. In the event viewer, select the event with node name hyper.example.com, Sev ( severity ) column with puple color, you will see a dot in the **Seasonal** colimn. This represents if the event appears periodically (like, once every week). Any events which are seasonal are represented. Once you click on the dot, you will more information.  

   ![seasonal](images/seasonal.png)  

   You can toggle the view by clicking the information as highlisted above ( in red ) and vice versa.

   ![seasonal-alt](images/seasonal-alt.png)  

3. Column with icon ![scope](images/scopebased.png) provides the scope based event correlation. All the events that fall under a particular scope are correlated and displayed here. In the view below, you will find two types of scope based grouping. They are shown as **Err** and **hyp**. 

   ![scope based correlation](images/scopebased-correlation.png)  

   Once you click on the highlisted event (as pointed by red arrow), the information of the event for scope based correlation opens up. Here, you will see the scope, the number of events and their summary. You will notice the scope is based on *Error rate**. 

   Now click on event which represents scope based correlation as **hyp** in the picture to find the details of this event. 

   ![scope based1](images/scopebased-correlation1.png)

   You will find the scope of this event is different than the earlier one. This event has scope for the hostname of the hypervisor itself.   

4. Column with icon ![topology](images/topology.png) provides the topology based event correlation. If the events have properties ( for example node ) which related, then this will appear. 

   ![topology correlation](images/topology-correlation.png)  

   The topology view that appears here can be zoomed out by clicking on the **More information** link, topology viewer will be launched. You can find the topology of the environment. You can perform various actions from the topology viewer.   

   ![topology viewer](images/topology-viewer.png)

   * Resource Details: Select the node hyper.example.com, right click and select **Resource Details** will show the resource details of the node in the topology.

     ![resource details](images/resource-details.png)  

   * Timeline: Toggling the **Timeline** switch by sliding the button to otherside,time shows the time of the topology. You can slide the bar below to see how the nodes in the topology change over time period. This capability will be veryful when autoscaler is in action for cloud native applications where the pods scale up and down on demand.

     ![timeline](images/timeline.png)

   * Delta: Similarly, you can toggle the **Delta** switch to find the topology variations between a time period. You will a slidable pin which can be moved horizontally.

     ![delta](images/delta.png)  

   * Change Topology appearance: You can change the topology appearance. In the canvas of the topology you will various tools representing, zoom in, zoom out and so on. Select the topology icon and select the format you want. You will see the topology appearance changes.

     ![topology1](images/topology1.png) 

