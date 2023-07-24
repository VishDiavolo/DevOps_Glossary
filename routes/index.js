var express = require('express');
var router = express.Router();

const itemList = [
  { 'id': 1, 'title': 'DevOps', 'description': 'DevOps is a set of practices that combine software development (Dev) and IT operations (Ops) to enhance collaboration, automation, and continuous integration and delivery.', 'reference': 'https://www.atlassian.com/devops#:~:text=DevOps%20is%20a%20set%20of,and%20collaboration%2C%20and%20technology%20automation.'},
  { 'id': 2, 'title': 'Agile', 'description': 'Agile is a project management and product development approach that focuses on iterative and incremental work delivery, emphasizing customer collaboration and adaptability.', 'reference': 'https://www.atlassian.com/devops#:~:text=DevOps%20is%20a%20set%20of,and%20collaboration%2C%20and%20technology%20automation.'},
  { 'id': 3, 'title': 'Microservices', 'description': 'Microservices is an architectural style that structures an application as a collection of loosely coupled services, allowing for easier development, scaling, and maintenance.', 'reference': 'https://www.bmc.com/blogs/devops-microservices/'},
  { 'id': 4, 'title': 'API ', 'description': 'API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.', 'reference': 'https://www.mulesoft.com/resources/api/what-is-an-api#:~:text=API%20is%20the%20acronym%20for,data%20within%20and%20across%20organizations.'},
  { 'id': 5, 'title': 'Continuous Delivery/Continuous Integration', 'description': 'CI/CD stands for Continuous Integration and Continuous Delivery. It is a DevOps approach that involves frequent code integration, automated testing, and rapid deployment.', 'reference': 'https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-continuous-delivery-integration.html'},
  { 'id': 6, 'title': 'DevSecOps', 'description': 'DevSecOps is a collaboration framework that expands the impact of DevOps by adding security practices to the software development and delivery process.', 'reference': 'https://www.dynatrace.com/monitoring/solutions/devsecops-ciso/?utm_source=google&utm_medium=cpc&utm_term=devsecops&utm_campaign=anz-appsec-application-security&utm_content=none&utm_campaign_id=11848445955&gclsrc=aw.ds&gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zOntJ94C3Nf13rmIr_mavYFIkqSVmqOLmuEX0DBOy8ovqnBoN1q8VUaAutqEALw_wcB'},
  { 'id': 7, 'title': 'kanban', 'description': 'Kanban is a popular framework used to implement agile and DevOps software development. It requires real-time communication of capacity and full transparency of work.', 'reference': 'https://www.atlassian.com/agile/kanban#:~:text=Kanban%20is%20a%20popular%20framework,of%20work%20at%20any%20time.'},
  { 'id': 8, 'title': 'Pull Request', 'description': 'also referred to as a merge request is an event that takes place in software development when a contributor/developer is ready to begin the process of merging new code changes with the main project repository.', 'reference': 'https://www.pagerduty.com/resources/learn/what-is-a-pull-request/#:~:text=A%20pull%20request%20%E2%80%93%20also%20referred,with%20the%20main%20project%20repository.'},
  { 'id': 9, 'title': 'AWS', 'description': 'AWS (Amazon Web Services) is a cloud computing platform that offers a wide range of cloud services, including computing power, storage, and databases, among others.', 'reference': 'https://aws.amazon.com/what-is-aws/'},
  { 'id': 10, 'title': 'Infrastructure as Code (IaC)', 'description': 'IaC is a practice where infrastructure is defined and managed using code and version control, enabling automated and consistent provisioning of resources.', 'reference': 'https://www.hashicorp.com/resources/what-is-infrastructure-as-code'},
    
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Glossary', items: itemList });
});

module.exports = router;
