![Build Status](http://18.221.157.116:8080/jenkins/buildStatus/icon?job=p1-frontend/main&subject=%5Bmain%5D%20took%20$%7Bduration%7D%20about%20$%7BstartTime%7D%20ago)


## flashcards-frontend-ui
description..


tomcat is hosting our webapp on 8080

we'll actually request our webapp from some other process running on 3000
this process will map all front end routes like /ui, /ui/Login to /ui
and forward the request to tomcat on 8080.

we'll fix cors by making this proxy a nodejs express server.