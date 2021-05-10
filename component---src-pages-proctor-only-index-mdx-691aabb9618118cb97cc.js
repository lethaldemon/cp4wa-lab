(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{WQZ8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("013z"),s=(n("qKvR"),{}),b={_frontmatter:s},c=o.a;function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"THINK 2021, Lab:2177."),Object(i.b)("h2",null,"Build Intelligent IT Operation with IBM Cloud Pak for Watson AIOps."),Object(i.b)("h2",null,"PROCTOR ONLY"),Object(i.b)("p",null,"This is a proctor only section and will not be replicated with the rest of the students material."),Object(i.b)("h3",null,"AI Manager"),Object(i.b)("h3",null,"Event Manager"),Object(i.b)("h3",null,"Metric Manager"),Object(i.b)("p",null,"Metric Manager depends on the services running."),Object(i.b)("p",null,"They are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Db2"),Object(i.b)("li",{parentName:"ul"},"Omnibus"),Object(i.b)("li",{parentName:"ul"},"DASH"),Object(i.b)("li",{parentName:"ul"},"PIUI ")),Object(i.b)("p",null,"The student is accessing the Metric Manager from the jump server. So the name should resolve."),Object(i.b)("p",null,"DASH is accessing PIUI by making HTTPS request, check that the certificate is accepted."),Object(i.b)("h4",null,"For dual VM mode."),Object(i.b)("p",null,"WHen there is issues on the lab, check:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Can the jump server connect to Metric Manager by hostname?\nFrom a terminal windows run")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"    ping eolas.ibm.com\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"If it can not then it become  a standard networking, name resolution.\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Can you login to DASH using the password.  If you can not then maybe object server is not running.     ")),Object(i.b)("h4",null,"Common."),Object(i.b)("p",null,"The following are to check that the services are running."),Object(i.b)("p",null,"As user scadmin (password scadmin) run"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"db2start  # If db2 already run it tells you that and exit.  if not it will run it.\nps -ef | grep nco_objserv   # you should see one process running.  if not see the next step to start object server.\nps -ef | grep -i jazzsm    # you should see one process.  if no start next section.\n")),Object(i.b)("p",null,"How to start some services."),Object(i.b)("p",null,"Login as user root."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"service omnibus status    \nservice omnibut start\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"service dash status\nservice dash start\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"if you restart dash you might need to restart piui\n\nservice piui stop\nservice piui start\nservice piui status\n")),Object(i.b)("h4",null,"RACE CONDITION FOUND DURING TESTING"),Object(i.b)("p",null,"During testing it was found that db2 on the Metric Manager image was not running.\nNormally this is caused by IP address not being assigned to the VM.\nIt is suspected that there is a race condition where db2 has already started and the IP address only being assigned to the image a bit later."),Object(i.b)("p",null,"Here is the step to fix it:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Login as user ",Object(i.b)("inlineCode",{parentName:"li"},"scadmin")," password ",Object(i.b)("inlineCode",{parentName:"li"},"scadmin"),"."),Object(i.b)("li",{parentName:"ol"},"Open a terminal windows, and perform the following")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ db2start\n$ su -     # password is `passw0rd`\n# service piui stop\n# service piui start\n# exit\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Verify by starting Firefox, then login in into DASH (username/password: ",Object(i.b)("inlineCode",{parentName:"li"},"ncoadmin"),"/",Object(i.b)("inlineCode",{parentName:"li"},"ncoadmin"),") and make sure that you can see the iceflakes icon for Metric Manager (Lowest icons on the top group of icons).")),Object(i.b)("p",null,"Note: if you are already login to DASH before executing the piui stop and start above then you need to logout and then back login to see the iceflake icon."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-proctor-only-index-mdx-691aabb9618118cb97cc.js.map