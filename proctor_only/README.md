# THINK 2021, Lab:2177.

## Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps.

## PROCTOR ONLY

This is a proctor only section and will not be replicated with the rest of the students material.


### AI Manager

### Event Manager

### Metric Manager

Metric Manager depends on the services running.

They are:
- Db2
- Omnibus
- DASH
- PIUI 

The student is accessing the Metric Manager from the jump server. So the name should resolve.

DASH is accessing PIUI by making HTTPS request, check that the certificate is accepted.


#### For dual VM mode.

WHen there is issues on the lab, check:
1. Can the jump server connect to Metric Manager by hostname?
   From a terminal windows run

```
    ping eolas.ibm.com
```
    If it can not then it become  a standard networking, name resolution.

2.  Can you login to DASH using the password.  If you can not then maybe object server is not running.     

#### Common.

The following are to check that the services are running.

As user scadmin (password scadmin) run
```
db2start  # If db2 already run it tells you that and exit.  if not it will run it.
ps -ef | grep nco_objserv   # you should see one process running.  if not see the next step to start object server.
ps -ef | grep -i jazzsm    # you should see one process.  if no start next section.
```

How to start some services.

Login as user root.

```
service omnibus status    
service omnibut start
```

```
service dash status
service dash start
```

```
if you restart dash you might need to restart piui

service piui stop
service piui start
service piui status
```

####  RACE CONDITION FOUND DURING TESTING
During testing it was found that db2 on the Metric Manager image was not running.
Normally this is caused by IP address not being assigned to the VM.
It is suspected that there is a race condition where db2 has already started and the IP address only being assigned to the image a bit later.

Here is the step to fix it:
1. Login as user `scadmin` password `scadmin`.
2. Open a terminal windows, and perform the following

```
$ db2start
$ su -     # password is `passw0rd`
# service piui stop
# service piui start
```

3. Verify by login in into DASH (username/password: `ncoadmin`/`ncoadmin`) and make sure that you can
   see the iceflakes icon for Metric Manager (Lowest icons on the top group of icons).