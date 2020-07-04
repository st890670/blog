# blog

- 前端: React  
- 後端: SpringBoot  
- 資料庫: PostgreSQL  
  
- SpringBoot DEV Port: 8000  
- React DEV Port: 7788  

- 記得到application.properties修改db連線資訊

docker run command: 
```
docker run -d -p 443:8443 --name tomcat-blog-front -v /home/docker/tomcat/blog-front/webapps:/usr/local/tomcat/webapps:z -v /home/docker/tomcat/blog-front/conf:/usr/local/tomcat/conf:z -v /home/docker/tomcat/blog-front/logs:/usr/local/tomcat/logs:z -v /home/docker/blog-attach:/root/blog-attach:z tomcat:9.0.43
```