// Auto-generated pages data
// Generated on: 2025-11-16T06:18:47.910Z

const articlesData = {
    "technical": {
        "allure": {
            "type": "article",
            "title": "Allure",
            "sections": [
                {
                    "content": "3. Now we can see the report: (after 4th command in 1st picture) <br>",
                    "image": "allure3.png"
                }
            ]
        },
        "annotations": {
            "type": "article",
            "title": "Annotations",
            "sections": [
                {
                    "content": "<br>And you can utilize metadata: <br>",
                    "image": "annotation3.png"
                }
            ]
        },
        "apache": {
            "type": "article",
            "title": "Apache",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Apache HttpClient</h1>",
                    "image": "apache.png"
                }
            ]
        },
        "api": {
            "type": "article",
            "title": "Api",
            "sections": [
                {
                    "content": "<p><a href=\"restful.html\" class=\"btn-custom\"> 1. Restful APIs <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"jersey.html\" class=\"btn-custom\"> 2. Jersey with Jackson<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"apache.html\" class=\"btn-custom\"> 3. Apache HttpClient<span class=\"ion-ios-arrow-forward\"></span></a></p>\t\t\t\t\n\t\t\t\t\t\t\t\t<p> <a href=\"codingextra.html\" class=\"btn-custom\"> 4. Awaitility <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"graphql.html\" class=\"btn-custom\"> 5. GraphQL <span class=\"ion-ios-arrow-forward\"></span></a></p>"
                }
            ]
        },
        "architecture": {
            "type": "article",
            "title": "Architecture",
            "sections": [
                {
                    "content": "<br>For example, if you have common operations repeated in all test case classes, why not have a base class and collect methods there? Or before start anything, if you have to something, why no add a predefined listener? Additionaly, to build a standart in our project, we have to decide our data structure. What types of classes will we have to implement our test code? What about:\n\t\t\t\t<ul>\t\t\t\t\t\n\t\t\t\t\t<li>DTO</li>\t\t\t\t\t\n\t\t\t\t\t<li>Resource</li>\t\t\t\t\t\n\t\t\t\t\t<li>Result</li>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t</ul>",
                    "image": "architect.jpg"
                }
            ]
        },
        "async": {
            "type": "article",
            "title": "Async",
            "sections": [
                {
                    "heading": "1. Sync and Async Code together",
                    "content": "In this simple code, what I want to see is:<br>1<br>2<br>wait 3 secs<br>3<br>4<br>test passes.<br><br>\n\t\t\t\t\t\t\t\t\tBut what I has is, I already get the 3 & 4 logs before waiting for 3 seconds. Which means <code>cy.wait(3000)</code> was not waited to be completed before moving to next call.",
                    "image": "mixedorder.png"
                },
                {
                    "heading": "2. 'Then'",
                    "content": "This time what we do is, ensuring that wait is completed before moving to log3. What I see in the console is:\n\t\t\t\t\t\t\t\t\t<br>1<br>2<br>4<br>wait 3 secs<br>3<br>test passes.<br><br>So, log3 is waiting for the previous call, but log4 is still running before them.",
                    "image": "then.png"
                },
                {
                    "heading": "3. Promises",
                    "content": "In Cypress, we can create 'Promises' which promise to return properly. When I execute the above code, what I see is: \n\t\t\t\t\t\t\t\t\t<br>1<br>2<br>4<br>test passes<br>wait 3 secs<br>3<br><br> Even the test finished before wait and log3. Seems like I could not wait for promise properly.",
                    "image": "promise.png"
                },
                {
                    "heading": "4. Tasks",
                    "content": "Instead of calling the promise function, we can just start it as a 'task'. For this purpose, we have to register this task name in the plugins file.",
                    "image": "task.png"
                },
                {
                    "heading": "5. 'Wrap'",
                    "content": "If I wait for promise to be resolved, I see test passes after the promise: \n\t\t\t\t\t\t\t\t\t<br>1<br>2<br>4<br>wait 3 secs<br>3<br>test passes.<br><br> It is basically same with the second section: connecting log3 and wait with 'then'.",
                    "image": "wrap.png"
                },
                {
                    "heading": "6. 'Wrap' and 'Then'",
                    "content": "If I continue to next calls after the promise is resolved, finally I get what I want: \n\t\t\t\t\t\t\t\t\t<br>1<br>2<br>wait 3 secs<br>3<br>4<br>test passes.<br><br>",
                    "image": "wrapthen.png"
                }
            ]
        },
        "bdd": {
            "type": "article",
            "title": "Bdd",
            "sections": [
                {
                    "content": "<br>Final Step! Start these two runners. As you noticed, we have some tags. Related cases will be executed! Create gradle tasks for these two runners and start them: <br>\n\t\t\t\tgradle myTask2 myTask3 --rerun-tasks --info\t<br>",
                    "image": "cucumbertestng.png"
                },
                {
                    "heading": "Data Driven Testing",
                    "content": "<br>\n\t\t\t\tIn belly feature file, we have defined exactly same scenario with different data. Then why dont we apply Data Driven Testing: <br>",
                    "image": "cucumberddt.png"
                }
            ]
        },
        "benchmarking": {
            "type": "article",
            "title": "Benchmarking",
            "sections": [
                {
                    "content": "How many ways are there to choose?<br>"
                }
            ]
        },
        "binary": {
            "type": "article",
            "title": "Binary",
            "sections": [
                {
                    "content": "<br>For the worst case, we have to perform k operations, by which 2^k=n. (n is the lenght of the array)<br>\n\t\t\t\tTherefore, k=log2n, which implies complexity is log(n).",
                    "image": "binary.svg"
                }
            ]
        },
        "binarysearch": {
            "type": "article",
            "title": "Binarysearch",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Binary Search</h1>\t\t\t\t\n\t\t\t\tProblem:\n\t\t\t\t<div style=\"font-size:11px;\">\n\t\t\t\t\tImplementation of the indexOf searching. <br>\t <br>",
                    "image": "binarySearch.png"
                }
            ]
        },
        "challenges": {
            "type": "gallery",
            "title": "Challenges",
            "images": [
                {
                    "src": "technical/challenge.jpeg",
                    "caption": "First Missing Number",
                    "link": "detectMissing.html",
                    "size": "col-md-6"
                },
                {
                    "src": "technical/challenge.jpeg",
                    "caption": "Find Day of the Week",
                    "link": "dayofweek.html",
                    "size": "col-md-6"
                },
                {
                    "src": "technical/challenge.jpeg",
                    "caption": "Binary Search",
                    "link": "binarysearch.html",
                    "size": "col-md-6"
                },
                {
                    "src": "technical/challenge.jpeg",
                    "caption": "Longest Sequence in an Array",
                    "link": "longestsequence.html",
                    "size": "col-md-6"
                },
                {
                    "src": "technical/challenge.jpeg",
                    "caption": "Consequtive Sums",
                    "link": "consequtive.html",
                    "size": "col-md-6"
                },
                {
                    "src": "technical/challenge.jpeg",
                    "caption": "Complexity of binary search",
                    "link": "binary.html",
                    "size": "col-md-6"
                }
            ]
        },
        "cicd": {
            "type": "article",
            "title": "Cicd",
            "sections": [
                {
                    "content": "<a href=\"cicdFlow.html\" class=\"btn-custom\"> 1. CICD Lifecycle<span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn-custom\"> 2. Jenkins<span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t<div style=\" font-size:12px; text-align:left;\">\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"jenkinsSetup.html\" class=\"btn-custom\"> a. Setup & Configurations <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"#\" class=\"btn-custom\"> b. Creating Items <span class=\"ion-ios-arrow-forward\"></span></a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  <a href=\"freestyle.html\" class=\"btn-custom\"> i. Freestyle <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  <a href=\"pipeline.html\" class=\"btn-custom\"> ii. Pipeline <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  <a href=\"localrepo.html\" class=\"btn-custom\"> iii. Local Repo <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"email.html\" class=\"btn-custom\"> c. Sending Emails <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"jenkinsparameters.html\" class=\"btn-custom\"> d. Running with Parameters <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"cron.html\" class=\"btn-custom\"> e. Cron Expressions <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"poll.html\" class=\"btn-custom\"> f. Polling SCM Changes <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t\t<br>&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"subset.html\" class=\"btn-custom\"> g. Running a Subset <span class=\"ion-ios-arrow-forward\"></span></a>"
                }
            ]
        },
        "cicdflow": {
            "type": "article",
            "title": "Cicdflow",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">CICD Flow</h1>",
                    "image": "cicdFlow.png"
                }
            ]
        },
        "cloudwatch": {
            "type": "article",
            "title": "Cloudwatch",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">AWS CloudWatch</h1>",
                    "image": "cwLogo.png"
                },
                {
                    "heading": "Account",
                    "content": "<br>\n\t\t\t\t\t\t\t\t\tAs told in <a href=\"s3.html\"> S3 Buckets Page </a>, we need an amazon account. In your account, create an Access Key & Secret Key and keep them in a config file. <br>Then, read config file from resources folder.<br><br>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<h2>Connect to Account</h2>\t\t\n\t\t\t\t\t\t\t\t\tNow, we can connect using credentials:<br>",
                    "image": "cwinitialize.png"
                },
                {
                    "heading": "Upload Data",
                    "content": "<br>\t\t\n\t\t\t\tAnd, we can upload data:<br>",
                    "image": "cwuploaded.png"
                }
            ]
        },
        "codingextra": {
            "type": "article",
            "title": "Codingextra",
            "sections": [
                {
                    "content": "<br> <h2 class=\"mb-4\">Callable</h2>\t\n\t\t\t\t\t\t\t\t\tLet's examine how it works: <br>\n\t\t\t\t\t\t\t\t\t<br>",
                    "image": "await5.png"
                }
            ]
        },
        "consequtive": {
            "type": "article",
            "title": "Consequtive",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Consequtive Sums</h1>\t\t\t\t\n\t\t\t\tProblem:\n\t\t\t\t<div style=\"font-size:11px;\">\n\t\t\t\t\tGiven a number N, find the number of ways to represent this number as a sum of 2 or more consecutive natural numbers. <br>\t <br>",
                    "image": "challanges_consequtive.png"
                }
            ]
        },
        "cron": {
            "type": "article",
            "title": "Cron",
            "sections": [
                {
                    "content": "<br>Examples<br>",
                    "image": "cron4.png"
                }
            ]
        },
        "crypto": {
            "type": "article",
            "title": "Crypto",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">AWS KMS</h1>",
                    "image": "kms.png"
                },
                {
                    "heading": "History of Cryptography",
                    "content": "<br>Apart from curiosity, sometimes they tried to learn information which others hide from them to make use of it. <br>Privacy is of great importance in this terms, and we faced challanges even in wars. They developed different ways of attacks to learn secrets of others. Some of them are:\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Side Channel Attacks\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>CAT (Cache Attack)</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../img/technical/cat.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>Differential fault analysis</li>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>Brute Force</li>\n\t\t\t\t\t\t\t\t\t\t<li>Chosen Ciphertext Attack</li>\n\t\t\t\t\t\t\t\t\t\t<li>Man in the middle</li>\n\t\t\t\t\t\t\t\t\t\t<img src=\"../img/technical/mim.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<li>DoS</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<h4>Encryption</h4>\t\t\n\t\t\t\t\t\t\t\t\tThat is why, encryption algorithms are developed on the other hand. Here is a snashot about the growth of encryption algorithms:",
                    "image": "cryhist.png"
                },
                {
                    "heading": "AES",
                    "content": "<br> We can examine these algorithms in two main classes: Symmetric & Asymmetric\n\t\t\t\t\t\t\t\t\t<br><br>\t\n\t\t\t\t\t\t\t\t\tAES is the mostly used symmetric algorithm. In symmetric algorithms, there is only one key: both for encryption and decryption.\n\t\t\t\t\t\t\t\t\t<br>Here is a sample implementation:<br>",
                    "image": "encryption.png"
                },
                {
                    "heading": "KMS",
                    "content": "<br> Then, lets implement the code:\t<br>",
                    "image": "createkey.png"
                },
                {
                    "heading": "RSA",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\tRSA is an asymmetric algorithm. Now, we will have a key pair instead of one: Public & private keys: One for encryption and other for decryption.\n\t\t\t\t\t\t\t\t\t<br>Here is a sample implementation:<br>",
                    "image": "rsa.png"
                }
            ]
        },
        "cypress101": {
            "type": "article",
            "title": "Cypress101",
            "sections": [
                {
                    "content": "<br><br>A Sample test would look like:",
                    "image": "sampletest.png"
                }
            ]
        },
        "cypress102": {
            "type": "article",
            "title": "Cypress102",
            "note": "Content needs manual extraction"
        },
        "cypress201": {
            "type": "article",
            "title": "Cypress201",
            "note": "Content needs manual extraction"
        },
        "dataprovider": {
            "type": "article",
            "title": "Dataprovider",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">DataProvider</h1>",
                    "image": "dataprovider.png"
                }
            ]
        },
        "dayofweek": {
            "type": "article",
            "title": "Dayofweek",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Day of The Week</h1>\t\t\t\t\n\t\t\t\tProblem:\n\t\t\t\t<div style=\"font-size:11px;\">\n\t\t\t\t\tAfter a certain number of days, which day of the week will it be? For instance, 2 days after Wednesday, it will be Friday. <br>\t <br>",
                    "image": "dayofweek.png"
                }
            ]
        },
        "detectmissing": {
            "type": "article",
            "title": "Detectmissing",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">First Missing Number in an Array</h1>\t\t\t\t\n\t\t\t\tProblem:\n\t\t\t\t<div style=\"font-size:11px;\">\n\t\t\t\t\tGiven an integer array, find first positive number which does not exist in the array. <br>\t <br>",
                    "image": "missing.png"
                }
            ]
        },
        "docker": {
            "type": "article",
            "title": "Docker",
            "sections": [
                {
                    "content": "<br>\t<br>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tWhen editing files, we should modify in insert mode:",
                    "image": "dockerVIfile.png"
                }
            ]
        },
        "email": {
            "type": "article",
            "title": "Email",
            "sections": [
                {
                    "content": "<br>Email is sent:<br>",
                    "image": "email3.png"
                }
            ]
        },
        "environment": {
            "type": "article",
            "title": "Environment",
            "sections": [
                {
                    "content": "</br>Yellow highlighted frameworks are report generating ones. Please check <a href=\"reporting.html\"> Reporting Page </a>.",
                    "image": "environment.png"
                }
            ]
        },
        "freestyle": {
            "type": "article",
            "title": "Freestyle",
            "sections": [
                {
                    "content": "<br>\tWe can connect projects together: One triggers another:\t<br>",
                    "image": "pipeline.png"
                }
            ]
        },
        "galen": {
            "type": "article",
            "title": "Galen",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Galen Framework</h1>\n\t\t\t\t\t\t\t\t\tGalen is a frontend verification framework. You can construct a gspec file, in which you state what you expect (expected images, expected menu items etc.) At the end, actual page structure is compared to the expected model.</a>. <br>",
                    "image": "galenreport.png"
                }
            ]
        },
        "gauge": {
            "type": "article",
            "title": "Gauge",
            "sections": [
                {
                    "heading": "Defining Scenarios",
                    "content": "<h1 class=\"mb-4\">Gauge Framework</h1>\t\n\t\t\t\t\t\t\t\t\n\t\t\t\tLets start with installation: <a href=\"https://github.com/getgauge/gauge/releases/download/v1.0.6/gauge-1.0.6-windows.x86_64.exe\" target=\"_blank\"> Windows Installer</a><br>\t\t\t\t\n\t\t\t\tLets implement our cases. High level snearios is stored in spec files. <br>In this case, we have 1 specification and 2 scenarios. Inner steps of scenarios are defined in concept files. <br>And the implementation of steps are performed in java files. <br>",
                    "image": "gauge2.png"
                },
                {
                    "heading": "Execution over Maven",
                    "content": "<br>\t\n\t\t\t\tOK, curious about the results. First do it with maven. Perform any of: <br>\n\t\t\t\tmvn test <div style=\"color:red;font-size:10px;\">Run all specifications.",
                    "image": "gauge4.png"
                },
                {
                    "heading": "Execution over Gradle",
                    "content": "<br>\t\n\t\t\t\tgradle gauge --rerun-tasks --info<div style=\"color:red;font-size:10px;\">Run all specifications."
                }
            ]
        },
        "github": {
            "type": "article",
            "title": "Github",
            "sections": [
                {
                    "heading": "Basics",
                    "content": "<br><h4>Jobs</h4>\t\n\t\t\t\t\t\t\t\t\tAfter defining when/under what condition the workflow starts, next step is defining job to run. Each job runs on a virtual machine and perform one or more action steps. Steps can wither run an executable or call a published Docker container image. A sample job including a step using docker image and a step running a script can be seen in the image below.",
                    "image": "githubjobs.png"
                },
                {
                    "heading": "Workflow Parameters",
                    "content": "If you are using Cypress, this is the way to run tests parallelly.",
                    "image": "github_parallel_run.png"
                }
            ]
        },
        "googleApi": {
            "type": "article",
            "title": "GoogleApi",
            "sections": [
                {
                    "content": "</br>\t\n\t\t\t\t\t\t\t\t\tWe can code....",
                    "image": "javaGoogle.png"
                }
            ]
        },
        "gradle": {
            "type": "article",
            "title": "Gradle",
            "sections": [
                {
                    "content": "<br><br>They will appear in the workspace when you refresh gradle<br>",
                    "image": "gradle6.png"
                }
            ]
        },
        "gradlemain": {
            "type": "article",
            "title": "Gradlemain",
            "sections": [
                {
                    "content": "<p> <a href=\"gradle.html\" class=\"btn-custom\"> Initialization <span class=\"ion-ios-arrow-forward\"></span></a></p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p> <a href=\"gradletest.html\" class=\"btn-custom\"> Triggering All Tests over Gradle <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"gradlesingletest.html\" class=\"btn-custom\"> Triggering A Single Test over Gradle <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"gradlesuite.html\" class=\"btn-custom\"> Triggering A Suite <span class=\"ion-ios-arrow-forward\"></span></a></p>"
                }
            ]
        },
        "gradlesingletest": {
            "type": "article",
            "title": "Gradlesingletest",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Executing a Single Test via Gradle</h1>\n\t\t\t\t\t\t\t\t\t--tests parameter: <br>",
                    "image": "gradlesingle.png"
                }
            ]
        },
        "gradlesuite": {
            "type": "article",
            "title": "Gradlesuite",
            "sections": [
                {
                    "heading": "TestNG",
                    "content": "<br>And fill xml file: <br>",
                    "image": "xmltestng.png"
                },
                {
                    "heading": "JUnit",
                    "content": "<br>And we are ready to run: gradle test<br><br>\n\t\t\t\t\n\t\t\t\tInclude classes you want to run:  <br>",
                    "image": "junitsuite.png"
                },
                {
                    "heading": "TestNG & JUnit",
                    "content": "<br>\n\t\t\t\tCreate a task:  <br>",
                    "image": "gradleTask.png"
                }
            ]
        },
        "gradletest": {
            "type": "article",
            "title": "Gradletest",
            "sections": [
                {
                    "content": "<br>Now, ready to fire: (21 tests: 9 failed :O)<br>",
                    "image": "gradle.png"
                }
            ]
        },
        "grafana": {
            "type": "article",
            "title": "Grafana",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Grafana</h1>\n\t\t\t\tOn Grafana, you can create dashboards which pull data from CloudWatch or some other data sources:  <br>",
                    "image": "grafana.png"
                }
            ]
        },
        "graphql": {
            "type": "article",
            "title": "Graphql",
            "sections": [
                {
                    "content": "<br><h2 class=\"mb-4\">Benefits</h2>\n\t\t\t\t\t\t\t\t\tSo the key advantages are:\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Ask for what you want! No need to pull all attributes</li>\n\t\t\t\t\t\t\t\t\t\t<li>Get many resurces in a single request: No need to query all entities one by one.</li>\t\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<br><h2 class=\"mb-4\">Testing</h2>\n\t\t\t\t\t\t\t\t\tAs we have already seen in the video above, we should set what we are interested in, in our query. A sample Cypress implementation for getting jobs with a keyword in a location would look like:<br><br>",
                    "image": "gqcypress.png"
                }
            ]
        },
        "html": {
            "type": "article",
            "title": "Html",
            "sections": [
                {
                    "content": "<br><h2 class=\"mb-4\">Elements</h2>\n\t\t\t\tTherefore, you can see some elements on the page, such as:\t\t\t\t\n\t\t\t\t<ul>\n\t\t\t\t\t<li> head                   </li>\n\t\t\t\t\t<li> body \n\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t<ul>                  \n\t\t\t\t\t\t\t<li> \theader              </li>\n\t\t\t\t\t\t\t<li> \tparagraph           </li>\n\t\t\t\t\t\t\t<li> \tlink                </li>\n\t\t\t\t\t\t\t<li> \timage               </li>\n\t\t\t\t\t\t\t<li> \tiframe              </li>\n\t\t\t\t\t\t\t<li> \tforms               </li>\n\t\t\t\t\t\t\t<li> \tinputs              </li>\n\t\t\t\t\t\t\t<li> \tbuttons \n\t\t\t\t\t\t\t<ul>\t\t\n\t\t\t\t\t\t\t\t<li> \t\tradion button   </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li> \tlist  \n\t\t\t\t\t\t\t<ul>\t\t\n\t\t\t\t\t\t\t\t<li> \t\tunordered       </li>\n\t\t\t\t\t\t\t\t<li> \t\tordered         </li>\n\t\t\t\t\t\t\t</ul></li>\n\t\t\t\t\t\t\t<li> \ttable \n\t\t\t\t\t\t\t<ul>\t\t\n\t\t\t\t\t\t\t\t<li> \t\trow             \n\t\t\t\t\t\t\t\t\t<ul><li> \t\t\tcolumn      </li></ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t </ul></li>\n\t\t\t\t\t\t</ul>",
                    "image": "html_javascript.png"
                }
            ]
        },
        "htmlunit": {
            "type": "article",
            "title": "Htmlunit",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">HTML Unit</h1>\n\t\t\t\tHTML Unit can be regarded as GUI-less browser:",
                    "image": "gargoyle.png"
                }
            ]
        },
        "java": {
            "type": "article",
            "title": "Java",
            "sections": [
                {
                    "content": "<a href=\"benchmarking.html\" class=\"btn-custom\"> 1. Decide your Automation Environment: Benchmarking <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn-custom\"> 2. For sure, You decided to do: Test Automation with Java <span class=\"ion-ios-arrow-forward\"></span></a>\n\t\t\t\t\t\t\t\t\t<div style=\" font-size:12px; text-align:left;\">\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"setup.html\" class=\"btn-custom\"> a. Setup your Development Environment <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"javabasics.html\" class=\"btn-custom\"> b. Java 101 <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"javainter.html\" class=\"btn-custom\"> c. Java 102 <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"javaadvanced.html\" class=\"btn-custom\"> d. Java 201 <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"java8.html\" class=\"btn-custom\"> e. Java8 <span class=\"ion-ios-arrow-forward\"></span></a><br>"
                }
            ]
        },
        "java8": {
            "type": "article",
            "title": "Java8",
            "sections": [
                {
                    "content": "Some of Java8 Features",
                    "image": "methodParametrization.png"
                }
            ]
        },
        "javaadvanced": {
            "type": "article",
            "title": "Javaadvanced",
            "sections": [
                {
                    "heading": "Serialization",
                    "content": "<h1 class=\"mb-4\">Java: Deep Dive</h1>\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\tSerialization is for storing the objects with their fields.<br>",
                    "image": "serialize.png"
                },
                {
                    "heading": "Binding",
                    "content": "<br><h4>Dynamic binding</h4>\n\t\t\t\tWith nonstatic methods:<br>",
                    "image": "dynamicbind.png"
                },
                {
                    "heading": "Thread",
                    "content": "<br><h4>Synchronization</h4>\n\t\t\t\tEffect of Synchronization:<br>",
                    "image": "sync.png"
                },
                {
                    "heading": "Introspection",
                    "content": "<br>\n\t\t\t\tWe can inspect object via Reflection API:",
                    "image": "reflect.png"
                },
                {
                    "heading": "Time and space complexity & O-notation",
                    "content": "<br><\n\t\t\t\tTime complexity is the measure which gives insights about the computation duration of a problem.<br>\n\t\t\t\tSpace complexity is the measure which gives insights about space/memory consumption of a problem.<br>\n\t\t\t\tO-notation is a metric for time complexity. In the following example, count is N*(N-1)/2: for N=5, count=10. Then we conclude is: complexity of it is O(N^2)<br>",
                    "image": "onotation.png"
                },
                {
                    "heading": "Sorting algorithms",
                    "content": "<br><a href=\"binary.html\">What is the time complexity of binary search?</a>\t<br><br>\n\t\t\t\t\n\t\t\t\tFor sorting, there a number of solutions, such as:\n\t\t\t\t<ul>\t\t\t\t\t\n\t\t\t\t\t<li>Bubble Sort    </li>\n\t\t\t\t\t<li>Insertion sort </li>\n\t\t\t\t\t<li>Selection sort </li>\n\t\t\t\t\t<li>Heap sort      </li>\n\t\t\t\t\t<li>Quick Sort     </li>\n\t\t\t\t\t<li>Merge sort     </li>\n\t\t\t\t\t<li>Shell Sort     </li>\n\t\t\t\t\t<li>Counting Sort  </li>\n\t\t\t\t\t<li>Bucket Sort    </li>\n\t\t\t\t\t<li>Radix sort     </li>\n\t\t\t\t</ul>\n\t\t\t\tAs an example, the implementation of bubble sorting is as follows:",
                    "image": "bubble.png"
                }
            ]
        },
        "javabasics": {
            "type": "article",
            "title": "Javabasics",
            "sections": [
                {
                    "content": "Ready to code? Not too fast.<br>",
                    "image": "toofast.gif"
                },
                {
                    "heading": "Terms",
                    "content": "Let's first remember Java Basics. <br>\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t<i><b><u> Compiling     : </b></u></i>is the act of turning source code into object code. <br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> Linking       : </b></u></i>is the act of combining object code with libraries into a raw executable. <br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> Building      : </b></u></i>is the sequence composed of compiling and linking, with possibly other tasks such as installer creation.<br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> A .java file  : </b></u></i>contains your Java source code<br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> A .class file : </b></u></i>contains the Java bytecode produced by the Java compiler. It runs on the JVM to execute a Java application.<br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> A Jar file    : </b></u></i>is an archive of otherfile, most likely class files.<br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> JDK           : </b></u></i>Java Development Kit is a software development environment used for developing Java applications and applets. It includes the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc) and other tools needed in Java development.<br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> JRE           : </b></u></i>stands for “Java Runtime Environment” and may also be written as “Java RTE.” The Java Runtime Environment provides the minimum requirements for executing a Java application; it consists of the Java Virtual Machine (JVM), core classes, and supporting files.<br>\t\n\t\t\t\t\t\t\t\t\t<i><b><u> JVM           : </b></u></i>whenever you write java command on the command prompt to run the java class, an instance of JVM is created.<br>",
                    "image": "javaEnv.png"
                },
                {
                    "heading": "Primitive Datatypes",
                    "content": "<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\t* Initialize like: new Integer(2) (do not confuse with new Integer[2])<br>\n\t\t\t\t\t\t\t\t\t\t* Wrapper class is a class whose object wraps or contains a primitive data types. (ex: Integer)<br>\n\t\t\t\t\t\t\t\t\t\t* Casting : Assigning a value with a type to another type. A smaller type is automatically casted to a larger value.<br>",
                    "image": "cast.png"
                },
                {
                    "heading": "Operators",
                    "content": "<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t<br>Pre/Post Increment/Decrement is worth being practiced: <br>",
                    "image": "increment.png"
                },
                {
                    "heading": "Access Modifiers",
                    "image": "access.png"
                },
                {
                    "heading": "4 Main OOP Concepts",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<h4>4. Abstraction</h4>\n\t\t\t\tIt is a hybrid approach: Some attributes/methods are reusable (common), but some others are different in various instances. Both circle & rectangle have \"color\"s, but different \"area\"s.",
                    "image": "abstract2.png"
                },
                {
                    "heading": "A few more remarks",
                    "content": "<br>\n\t\t\t\t\t\t\t\t\t<h4>Break</h4>\t\t\n\t\t\t\t\t\t\t\t\t\"Break\" stops the loop of a \"For\", \"while\" or \"switch\".",
                    "image": "static.png"
                }
            ]
        },
        "javainter": {
            "type": "article",
            "title": "Javainter",
            "sections": [
                {
                    "heading": "Start with a remark: Comparison",
                    "content": "<h1 class=\"mb-4\">Java: A step further</h1>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tFor comparisons, use \"equals\"<br>",
                    "image": "comparison.png"
                },
                {
                    "heading": "Immutable",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\tImmutable objects can not be updated after they are created.<br>",
                    "image": "immutable.png"
                },
                {
                    "heading": "More Objects",
                    "content": "<br><br>Static sized: Arrays, Dynamic sized: Collections<br>\n\t\t\t\tThey are very similar to use but have slight differences.<br>",
                    "image": "collection.png"
                },
                {
                    "heading": "Operators",
                    "content": "<br><div style=\"font-size:12px;\">Size vs Length:",
                    "image": "sizelength.png"
                }
            ]
        },
        "javascript": {
            "type": "article",
            "title": "Javascript",
            "sections": [
                {
                    "heading": "Background",
                    "content": "For testing web applications, we can use several options. Among those options, although interchangably used, some of them are framework where others are tools or libraries. Generally tools are applications with user interface, frameworks are complete applications and libraries provide specific functionality.\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\tNowadays, E2E test automation frameworks are very popular since they do not require extra library dependencies. Since most of them are JS based, the basic components of the execution environment should be known:\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Nodejs is the event driven JS runtime env</li>\n\t\t\t\t\t\t\t\t\t\t<li>Npm is the node package manager</li>\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t<li>Nvm is the Node version manager</li>\n\t\t\t\t\t\t\t\t\t</ul>  \n\n\t\t\t\t\t\t\t\t\tOne more quick note is the development technologies. UI Testers should be hearing several technical stack terms about the products. They can be developed by various JS frameworks. Some of them are:\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>React: Published in 2013 by Meta, provides reusable components, it is a rendering view library. </li>\n\t\t\t\t\t\t\t\t\t\t<li>Angular: Published in 2010 by google, provides client side rendering, whole framework including routing and calling services. </li>\n\t\t\t\t\t\t\t\t\t\t<li>Vue: Published in 2014, client side rendering view model.</li>\n\t\t\t\t\t\t\t\t\t</ul>",
                    "image": "npmtrends.png"
                },
                {
                    "heading": "Languages",
                    "content": "Modern test frameworks support most of the programming languages. If test code is supposed to be (not necessarily) aligned with the application code, it can be either Javascript or Typescript. But which one is better? Actually not too much different, let's see:<br><br>\n\t\t\t\t\t\t\t\t\t<h4>Javascript</h4>\n\t\t\t\t\t\t\t\t\tJs is a language developed for web programming in 1995. It supports only dynamic typing.<br><br>\n\t\t\t\t\t\t\t\t\t<h4>Typescript</h4>\n\t\t\t\t\t\t\t\t\tTS is an OOP language which was developed for large scale applications in 2012 by Microsoft. It is a superset of JS and needs to be compiled before execution. It supports both static and dynamic typing. Strong typed structure throws error for the dynamic typing such as <code>let var = 'a';var = 1; </code> [but still runs]<br><br>\n\t\t\t\t\t\t\t\t\tI had alread noted the scopes and types <a href=\"cypress201.html\">here</a>. Fore quick notes about Modules and functions, please see <a href=\"typescript.html\">here</a>.<br><br>\n\t\t\t\t\t\t\t\t\t<h2>Test Frameworks</h2>\n\t\t\t\t\t\t\t\t\tThe test framework selection is an important and a difficult decision. Not easy to write, so please see <a href=\"https://youtu.be/N0aZn0-t6kM\" target=\"_blank\" rel=\"noopener noreferrer\">my recording</a>."
                }
            ]
        },
        "jenkinsparameters": {
            "type": "article",
            "title": "Jenkinsparameters",
            "sections": [
                {
                    "content": "<br>And when we build, set the parameters:<br>",
                    "image": "parameter3.png"
                }
            ]
        },
        "jenkinssetup": {
            "type": "article",
            "title": "Jenkinssetup",
            "sections": [
                {
                    "content": "<br>Set paths:<br>",
                    "image": "jenkinsConfigurations.png"
                }
            ]
        },
        "jersey": {
            "type": "article",
            "title": "Jersey",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Jersey Client</h1>",
                    "image": "jersey.png"
                },
                {
                    "heading": "Request & Responses",
                    "image": "jersey2.png"
                },
                {
                    "heading": "Response Mapping",
                    "content": "<br>\tAnother library to map response is Google Gson:",
                    "image": "gson.png"
                }
            ]
        },
        "jira": {
            "type": "article",
            "title": "Jira",
            "sections": [
                {
                    "content": "<br>This is the same operation over code:<br>",
                    "image": "jira.png"
                }
            ]
        },
        "jmeter": {
            "type": "article",
            "title": "Jmeter",
            "sections": [
                {
                    "content": "<br> <h2 class=\"mb-4\">Analysis </h2>Over the report, different analysis can be performed such as Percentiles <br>",
                    "image": "jmeter8.png"
                }
            ]
        },
        "junit": {
            "type": "article",
            "title": "Junit",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">JUnit</h1>\t\t\t\t<br>",
                    "image": "junit.png"
                }
            ]
        },
        "junitmain": {
            "type": "article",
            "title": "Junitmain",
            "sections": [
                {
                    "content": "<p> <a href=\"junit.html\" class=\"btn-custom\"> JUnit <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"parametrized.html\" class=\"btn-custom\"> Parametrized <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"suite.html\" class=\"btn-custom\"> Test Suite <span class=\"ion-ios-arrow-forward\"></span></a></p>"
                }
            ]
        },
        "karate": {
            "type": "article",
            "title": "Karate",
            "sections": [
                {
                    "content": "<br>After we run mvn test command, we get the Karate Output:<br>\t<br>",
                    "image": "karateOutput.png"
                }
            ]
        },
        "localrepo": {
            "type": "article",
            "title": "Localrepo",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Jenkins Local Repo</h1>\n\t\t\t\t\t\t\n\t\t\t\tWhen we clone a project from remote repo, it is downloaded unders Jenkins workspace:\t<br>",
                    "image": "localrepo.png"
                }
            ]
        },
        "locators": {
            "type": "article",
            "title": "Locators",
            "sections": [
                {
                    "content": "<br>CSS selector works similarly:<br>",
                    "image": "locator3.png"
                }
            ]
        },
        "longestsequence": {
            "type": "article",
            "title": "Longestsequence",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Longest Sequence in an Array</h1>\t\t\t\t\n\t\t\t\tProblem:\n\t\t\t\t<div style=\"font-size:11px;\">\n\t\t\t\t\tIn an integer array, find the longest sequence which has maximum 2 different values. <br>\t <br>",
                    "image": "longestseq.png"
                }
            ]
        },
        "maven": {
            "type": "article",
            "title": "Maven",
            "sections": [
                {
                    "content": "<br>After dependencies are added, maven install command can be executed for their download:<br>",
                    "image": "maven5.png"
                }
            ]
        },
        "mavenEclipse": {
            "type": "article",
            "title": "MavenEclipse",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Executing Tests via Maven over Eclipse</h1>\n\t\t\t\tRun project as maven test: <br>",
                    "image": "triggermavenovereclipse.png"
                }
            ]
        },
        "mavenmain": {
            "type": "article",
            "title": "Mavenmain",
            "sections": [
                {
                    "content": "<p> <a href=\"maven.html\" class=\"btn-custom\"> Initialization <span class=\"ion-ios-arrow-forward\"></span></a></p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<p><a href=\"mavenEclipse.html\" class=\"btn-custom\"> Triggering Tests over IDE<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t<p><a href=\"maventest.html\" class=\"btn-custom\"> Triggering All Tests over Maven Command<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t<p><a href=\"mavensingletest.html\" class=\"btn-custom\"> Triggering A Single Test Class over Maven Command<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t<p><a href=\"mavensuite.html\" class=\"btn-custom\"> Triggering a Suite<span class=\"ion-ios-arrow-forward\"></span></a></p>"
                }
            ]
        },
        "mavensingletest": {
            "type": "article",
            "title": "Mavensingletest",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">-DTest Parameter</h1>\n\t\t\t\tmvn -Dtest=TestNgTests test <br>",
                    "image": "mavensingle.png"
                }
            ]
        },
        "mavensuite": {
            "type": "article",
            "title": "Mavensuite",
            "sections": [
                {
                    "heading": "TestNG",
                    "content": "<br>And fill xml file: <br>",
                    "image": "xmlsuite.png"
                },
                {
                    "heading": "JUnit",
                    "content": "<br>\n\t\t\t\tInclude classes you want to run:  <br>",
                    "image": "mavenjunit.png"
                }
            ]
        },
        "maventest": {
            "type": "article",
            "title": "Maventest",
            "sections": [
                {
                    "content": "<br>You can add Allure reporting as well:<br>",
                    "image": "allure.png"
                }
            ]
        },
        "mockito": {
            "type": "article",
            "title": "Mockito",
            "sections": [
                {
                    "content": "OK then, lets check implementation:<br>",
                    "image": "mockito2.png"
                }
            ]
        },
        "parametrized": {
            "type": "article",
            "title": "Parametrized",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Parametrized</h1>\n\t\t\t\tParametric Execution:<br>",
                    "image": "junitParametrized.png"
                }
            ]
        },
        "performance": {
            "type": "article",
            "title": "Performance",
            "sections": [
                {
                    "content": "For API requests, we can use again RestAssured to check timings:",
                    "image": "perfapi.png"
                }
            ]
        },
        "pipeline": {
            "type": "article",
            "title": "Pipeline",
            "sections": [
                {
                    "content": "<br>Allure results are pulled from remote repo:\t<br>",
                    "image": "allureResults.png"
                }
            ]
        },
        "pipenv": {
            "type": "article",
            "title": "Pipenv",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Running PyTest Environment Independently</h1>"
                },
                {
                    "heading": "1. Make paths relative",
                    "image": "independent.gif",
                    "content": "Let's remember the famous saying: \"It is running on my machine.\" Sometimes, we implement test code and everything runs perfectly. But when we move to another machine or maybe on Pipelines, we are missing lots of libraries and dependencies. Here is the way to manage it. <br><br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:14px;\">\n\t\t\t\t\t\t\t\t\t\tPaths can make trouble since clones can be placed in different folders. Two most possible things we may use are locating a file relatively to the root path and relatively to the working directory.<br>\n\t\t\t\t\t\t\t\t\t\t<p style=\"color:red;\">path=os.path.join(os.path.expanduser('~'),   'somefile')\n\t\t\t\t\t\t\t\t\t\t\tpath=os.path.join(os.path.dirname(__file__), 'somefile')</p>"
                },
                {
                    "heading": "2. Manage Dependencies",
                    "content": "Then the only thing we have to do is to run: <p style=\"color:red;\">pipenv run pytest</p>",
                    "image": "pipenv.png"
                }
            ]
        },
        "playwright": {
            "type": "article",
            "title": "Playwright",
            "sections": [
                {
                    "heading": "Assertions",
                    "image": "pw_assertions.png"
                },
                {
                    "heading": "Locators",
                    "image": "pw_locators.png"
                }
            ]
        },
        "poll": {
            "type": "article",
            "title": "Poll",
            "sections": [
                {
                    "content": "<br>And when we push to the related branch, pipeline is triggered.<br>",
                    "image": "poll3.png"
                }
            ]
        },
        "postman": {
            "type": "article",
            "title": "Postman",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Postman</h1>",
                    "image": "postman.png"
                }
            ]
        },
        "publishpackage": {
            "type": "article",
            "title": "Publishpackage",
            "sections": [
                {
                    "heading": "1. Npm init",
                    "content": "After the settings are done and having an account on npm, the command <code>npm login</code> is executed. This will forward you to the browser to login. After login is completed, you can verify your session via <code>npm whoami</code>.\t<br><br>\n\t\t\t\t\t\t\t\t\tAfter npm account is ready, <code>npm init</code> command starts creating a package.json file by asking to fill in several attributes. You can pass -y flag to set all fields to default values. Eventually when the package is publisg these attributes will be seen on the npm repo like author, version and dependency values. A sample package.json file would look like: <br><br>",
                    "image": "packagejson.png"
                },
                {
                    "heading": "2. Implementation with Typescript",
                    "content": "Suppose we have a test case, where implemented several steps. We can move some of those steps into another class as function. (One paranthesis about the implementation: Quick note regarding the types vs interfaces. Both can be used to declare typed objects. But refer this <a href=\"https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220\" target=\"_blank\" rel=\"noopener noreferrer\">link</a> for more details.) Let's create a new file under a seperate folder (src/my_functions.ts) and export functions. Later, they can be imported into any project and used to perform those steps. On the image below, there is a test implemented from scratch on the left, where some steps are moved to exported functions in a new file on the right. [Please dont mind the quality of the implementation, that is not our concern as of now. There are locators inside the test, locators are not selected properly, code is not efficient. But we might have another blog to discuss about the code quality.]",
                    "image": "cytest.png"
                },
                {
                    "heading": "3. Compiling TS",
                    "content": "Be aware the included and excluded folders. OutDir can be set to either a different or the same folder as src. (but of course different is better) Now, we are ready to compile! <code>npx tsc</code>. After compiling we will see the generated files in the OutDir. You may have some errors like unresolved cy commands. Since you are running outside the cypress folder, it is not in the relevant namescape. But no worries, the dependency will be imported into some other projects and already be executed with Cypress.",
                    "image": "generatedFiles.png"
                },
                {
                    "heading": "4. Publish the Package",
                    "content": "Since compiled files are under the output folder shown in tsconfig, we can exclude src folder from the published package. For this purpose, .npmignore file is used. Now we are ready for the publish. First let's address our entry file in the package.json file. <code>\"main\": \"src/index.js\"</code>. Beware that it is not .ts anymore, since we compiled it is js file now. Now we can do <code>npm publish</code>. If you set the package name which is already taken, you will get an error. (it might be fixed later, but at first it was confusing to me, i got 403 when i tried to publish a conflicting package name.)",
                    "image": "npmrepo.png"
                },
                {
                    "heading": "5. Using the Package in Other Projects",
                    "content": "<h4>Cypress Custom Commands</h4>\t\n\t\t\t\t\t\t\t\t\tAfter the dependency is installed, we are ready to use the served functions. But first we can register those function calls as the custom commands in the commands file: <br><code>import {registerCommand} from 'mesutplugin'<br>registerCommand()</code> <br><br>\n\t\t\t\t\t\t\t\t\t[REMINDER: Files and folder are pointed in config file. commands file is for custom commands. Index file is for before,beforeEach and all fixtures. Plugins file is for enabling some auto actions. Inside commands file, fixture can be written as well.]\n\n<br><br>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tNow, instead of implementing all the steps from scratch, we can just call the relevant functions:",
                    "image": "test_with_custom_commands.png"
                }
            ]
        },
        "pytest": {
            "type": "article",
            "title": "Pytest",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Run PyTest in VS Code</h1>"
                },
                {
                    "heading": "1. Create Tests",
                    "image": "pytest.gif",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tAfter tests are implemented, we will run them. For this purpose, they have to be discovered as tests. By default, it is configured to find methods starting by “test_” are regarded as test cases. But this can be customized."
                },
                {
                    "heading": "3. Discover Tests",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tThis can be done over Command Palette (Ctrl + Shift + P): Python Discover Tests",
                    "image": "detect.png"
                },
                {
                    "heading": "4. Run/Debug",
                    "content": "<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\t<br>For running pytest with fixtures, check: \n\t\t\t\t\t\t\t\t\t\t<a href=\"pytestfixtures.html\" class=\"btn-custom\"> PyTest Fixtures <span class=\"ion-ios-arrow-forward\"></span></a><br>",
                    "image": "rundebug.png"
                }
            ]
        },
        "pytestfixture": {
            "type": "article",
            "title": "Pytestfixture",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Run PyTest in VS Code</h1>"
                },
                {
                    "heading": "1. ConfTest.py",
                    "image": "autouse.png",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tThe first thing to do to work with fixtures is to add a conftest.py file. When the pytest test is triggerred, firstly, methodin the conftest is executed if we mark if as autouse=True."
                },
                {
                    "heading": "2. Test Body",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tWhen test class extends TestBase, Test Fixture in the baseClass is triggered since autorun is selected as true. In this way; before and after test methods are executed. One more thing is groups: pytest.mark. In this way you can run a specific group. (- m parameter) After registering marks on pytest.ini, you can select them in the execution:",
                    "image": "markings.png"
                },
                {
                    "heading": "3. Hooks in Conftest.py",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tHooks are called after each stage in the test: before(setup), test, after(teardown). At this moment status of the test case can be parsed.",
                    "image": "hooks.png"
                },
                {
                    "heading": "4. Function Fixture",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tAfter test function execution finishes, fixtures, marked as function scopes are called. If the test is failed, we can capyure the screenshot over selenium driver and save the file with the name of the test case which called the fixture.",
                    "image": "allureattach.png"
                },
                {
                    "heading": "5. Allure Reporting and Decorators",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tAllure cmdline tool should be installed. (allure –version should work)<br>\n\t\t\t\t\t\t\t\t\t\tTest steps are added in the code. For this, allure-pytest should be installed. (NOT pytest-allure-adaptor)",
                    "image": "decorator.png"
                },
                {
                    "heading": "6. Adding screenshot to the Allure Report",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\tScreenshots can be saved as a png file already, but if you want to see them directly on Allure report, they can be attached to the report itself.",
                    "image": "alluress.png"
                },
                {
                    "heading": "7. Starting allure server",
                    "content": "<br>\t\n\t\t\t\t\t\t\t\t\t<div style=\"font-size:12px;\">\n\t\t\t\t\t\t\t\t\t\t<br>Execute pytest with --alluredir parameter: All files are collected under the directory that we showed.\n\t\t\t\t\t\t\t\t\t\t<br>After that, server is started to show the graps:",
                    "image": "pytestallure.png"
                },
                {
                    "heading": "8. A final tip",
                    "content": "<a href=\"pipenv.html\" class=\"btn-custom\"> Dependency Management for Python <span class=\"ion-ios-arrow-forward\"></span></a><br>",
                    "image": "allurelog.png"
                }
            ]
        },
        "python": {
            "type": "article",
            "title": "Python",
            "sections": [
                {
                    "content": "<div style=\" font-size:25px; text-align:left;\">\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"pythonsetup.html\" class=\"btn-custom\"> a. Setup your Development Environment <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"pythonexecution.html\" class=\"btn-custom\"> b. Execution <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"pythonbasics.html\" class=\"btn-custom\"> c. Python 101 <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"pythonlog.html\" class=\"btn-custom\"> d. Python 102: Basic Logging & Graphs <span class=\"ion-ios-arrow-forward\"></span></a><br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; <a href=\"pythonml.html\" class=\"btn-custom\"> e. Introduction to ML with with Python <span class=\"ion-ios-arrow-forward\"></span></a><br>",
                    "image": "python.gif"
                }
            ]
        },
        "pythonbasics": {
            "type": "article",
            "title": "Pythonbasics",
            "sections": [
                {
                    "heading": "Coding in Python",
                    "content": "<br><h4>19. Pass</h4>\t<br>\n\t\t\t\t\t\t\t\t\t\"pass\" is not doing anything. But can be regarded as a reminder like TODO. In this case: We override the constructer of super, but nothing is implemented:",
                    "image": "pypass.png"
                }
            ]
        },
        "pythonexecution": {
            "type": "article",
            "title": "Pythonexecution",
            "sections": [
                {
                    "content": "<br><h1>Execution Options</h1>\n\t\t\t\t\t\t\t\t\tThere are different options to run Python code. <br> <br>",
                    "image": "run.gif"
                },
                {
                    "heading": "1. Code over Interpreter/Shell",
                    "content": "<br><h4>C. Files</h4>\n\t\t\t\t\t\t\t\t\tWe can execute python files immediately with python command. <br> <br>",
                    "image": "pythonfile.png"
                },
                {
                    "heading": "2. Python Related Jobs",
                    "content": "<br><br><h4>B. Conversion</h4>\n\t\t\t\t\t\t\t\t\tSometimes we need to convert files to other formats for reporting or for other functionalities. Especially notebooks (ipynb) are needed to be converted to other formats like simple python (py) files or html pages. The command for the conversion is: <br> <br>\t\n\t\t\t\t\t\t\t\t\tjupyter nbconvert --to python module01.ipynb\t\t\t<br> <br>",
                    "image": "pythonconvert.png"
                }
            ]
        },
        "pythonlog": {
            "type": "article",
            "title": "Pythonlog",
            "sections": [
                {
                    "heading": "Logging & Graphs in Python",
                    "content": "<br>\n\t\t\t\tWarm up with starting text logging: <br> <br>",
                    "image": "pythonStrings.png"
                },
                {
                    "heading": "matplotlib.pyplot",
                    "content": "<br> <h4>Show Image from disk</h4>",
                    "image": "pythonprintImage.png"
                },
                {
                    "heading": "Pandas",
                    "content": "<br> \n\t\t\t\t\t\t\t\t\t<h4>Histogram / Scatter Matrix</h4>",
                    "image": "pythonHistogram.png"
                }
            ]
        },
        "pythonml": {
            "type": "article",
            "title": "Pythonml",
            "sections": [
                {
                    "heading": "Machine Learning with Python",
                    "content": "<br>\n\t\t\t\t\t\t\t\t\tWe will practice with sklearn library.<br><br>",
                    "image": "pythonml.png"
                }
            ]
        },
        "pythonsetup": {
            "type": "article",
            "title": "Pythonsetup",
            "sections": [
                {
                    "content": "<br>Create the project, and set implementor and all other configurations correctly:<br>",
                    "image": "pythonSetup2.png"
                }
            ]
        },
        "readyApi": {
            "type": "article",
            "title": "ReadyApi",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">ReadyAPI</h1>"
                }
            ]
        },
        "repo": {
            "type": "article",
            "title": "Repo",
            "sections": [
                {
                    "heading": "Authentication",
                    "content": "<br>Finally, if we want to use SourceTree, we should add the key to it also:<br><br>",
                    "image": "sshSrcTree.png"
                },
                {
                    "heading": "Git Bash",
                    "content": "<br><br>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t$ git init\n\t\t\t\t\t\t\t\t\t<br>$ git status\n\t\t\t\t\t\t\t\t\t<br>$ git add .\n\t\t\t\t\t\t\t\t\t<br>$ git status\n\t\t\t\t\t\t\t\t\t<br>$ git commit -am \"first commit\"\n\t\t\t\t\t\t\t\t\t<br>$ git status\n\t\t\t\t\t\t\t\t\t<br>$ git remote add origin https://github.com/mesutdurukal/playground.git\n\t\t\t\t\t\t\t\t\t<br>$ git push origin master\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<br>$ git branch MesutPlayground\n\t\t\t\t\t\t\t\t\t<br>$ git checkout MesutPlayground\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<h2 class=\"mb-4\">SourceTree</h2>",
                    "image": "srctree.png"
                }
            ]
        },
        "reporting": {
            "type": "article",
            "title": "Reporting",
            "sections": [
                {
                    "content": "<br>\t<br>\n\t\t\t\t\t\t\t\t\t<h2 class=\"mb-3\">8. Allure </h2>",
                    "image": "allure3.png"
                }
            ]
        },
        "restassured": {
            "type": "article",
            "title": "Restassured",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">RestAssured</h1>",
                    "image": "restassured.png"
                }
            ]
        },
        "restful": {
            "type": "article",
            "title": "Restful",
            "sections": [
                {
                    "heading": "What is a Restful API?",
                    "content": "<br>After the request, we get the response. In addition to body and response message, response code is very important:<br>",
                    "image": "restfulresponse.png"
                }
            ]
        },
        "s3": {
            "type": "article",
            "title": "S3",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">AWS S3 Buckets</h1>",
                    "image": "s3.png"
                },
                {
                    "heading": "Account",
                    "content": "<br> As told in <a href=\"crypto.html\"> Encryption Page </a>, the best way to keep the credentials in the framework is, store them in a config file in encrypyed form.\n\t\t\t\t\t\t\t\t\t<br> Let's read config file from resources folder. To be able to find it, resource folders should be added to build path:<br><br>",
                    "image": "config.png"
                },
                {
                    "heading": "Connect to Account",
                    "content": "<br>\t\t\n\t\t\t\t\t\t\t\t\tNow, we can connect using credentials:<br>",
                    "image": "connect.png"
                },
                {
                    "heading": "Operations",
                    "content": "<br>\t\t\n\t\t\t\t\t\t\t\t\tAnd, we can upload/download/delete file:<br>",
                    "image": "download.png"
                }
            ]
        },
        "selenide": {
            "type": "article",
            "title": "Selenide",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Selenide</h1>\n\t\t\t\t\t\t\t\t\tSelenide is a Selenium wrapper, which eases frontend automation.<br>",
                    "image": "selenide.png"
                }
            ]
        },
        "selenium": {
            "type": "article",
            "title": "Selenium",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Selenium</h1>\n\t\t\t\t\t\t\t\t\t<a href=\"locators.html\"> Locators </a>",
                    "image": "selenium2.png"
                }
            ]
        },
        "serenity": {
            "type": "article",
            "title": "Serenity",
            "sections": [
                {
                    "content": "<br>\t<br>\n\t\t\t\t\t\t\t\t\tScreenshots are taken as well: \t<br>\t<br>",
                    "image": "serenityss.png"
                }
            ]
        },
        "setup": {
            "type": "article",
            "title": "Setup",
            "sections": [
                {
                    "content": "3. Set your certificate (if there is any)<br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; %JAVA_HOME%\\bin\\keytool.exe<br>\n\t\t\t\t\t\t\t\t\t\t&nbsp; &nbsp; &nbsp; &nbsp; %JAVA_HOME%\\jre\\lib\\security\\cacerts<br>\n\t\t\t\t\t\t\t\t\t4. Install Eclipse<br>\n\t\t\t\t\t\t\t\t\t5. Set formatter<br>",
                    "image": "formatter.png"
                }
            ]
        },
        "softassertion": {
            "type": "article",
            "title": "Softassertion",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">Soft Asssertion</h1>\n\t\t\t\tIf you use soft assertion, in the line of failure, the execution does not stop. At the end, when you assert all, test fails. <br>",
                    "image": "softassert.png"
                }
            ]
        },
        "sqs": {
            "type": "article",
            "title": "Sqs",
            "sections": [
                {
                    "content": "<a href=\"https://www.qs-tag.de/index.php?id=6124\" target=\"_blank\">Software QS Tag, Frankfurt, Oct 2019</a><br>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tFrom presentation \"How to ensure Testing Robustness in Microservice Architectures and Cope with Test Smells\""
                }
            ]
        },
        "subset": {
            "type": "article",
            "title": "Subset",
            "sections": [
                {
                    "content": "<br>To learn more about setting the xml file, check <a href=\"mavensuite.html\"> Page </a>",
                    "image": "subset2.png"
                }
            ]
        },
        "suite": {
            "type": "article",
            "title": "Suite",
            "sections": [
                {
                    "content": "<br>You can set the JUnit runner version over Run/Debug configurations:<br>",
                    "image": "runner.png"
                }
            ]
        },
        "testinput": {
            "type": "article",
            "title": "Testinput",
            "sections": [
                {
                    "content": "<br>\n\t\t\t\t\t\t\t\t\tThen, how should we handle test input management? In <a href=\"parametrized.html\"> JUnit Parametrized Tests </a>, <a href=\"dataprovider.html\"> TestNG DataProvider </a> and <a href=\"bdd.html\"> Data Driven Testing </a> pages, I tell some approaches. But those are still a limited number of embedded parameters. There are some libraries which generate random input for you. I will share how one of them works:",
                    "image": "faker2.png"
                }
            ]
        },
        "testng": {
            "type": "article",
            "title": "Testng",
            "sections": [
                {
                    "content": "<br>They will be executed accordingly<br>",
                    "image": "testng3.png"
                }
            ]
        },
        "testnghtmlout": {
            "type": "article",
            "title": "Testnghtmlout",
            "sections": [
                {
                    "content": "<h1 class=\"mb-4\">TestNG Html Output</h1>",
                    "image": "testnghtml.png"
                }
            ]
        },
        "testngmain": {
            "type": "article",
            "title": "Testngmain",
            "sections": [
                {
                    "content": "<p> <a href=\"testng.html\" class=\"btn-custom\"> TestNG<span class=\"ion-ios-arrow-forward\"></span></a></p>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p> <a href=\"testngxml.html\" class=\"btn-custom\"> Running tests over xml file <span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"testnghtmlout.html\" class=\"btn-custom\">  Results html<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"dataprovider.html\" class=\"btn-custom\"> DataProvider<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"softassertion.html\" class=\"btn-custom\">  Soft Assertions<span class=\"ion-ios-arrow-forward\"></span></a></p>\n\t\t\t\t\t\t\t\t<p> <a href=\"annotations.html\" class=\"btn-custom\"> Annotations<span class=\"ion-ios-arrow-forward\"></span></a></p"
                }
            ]
        },
        "testngxml": {
            "type": "article",
            "title": "Testngxml",
            "sections": [
                {
                    "content": "<br>A way of automatically generating xml file is:<br>",
                    "image": "converttestng.png"
                }
            ]
        },
        "typescript": {
            "type": "article",
            "title": "Typescript",
            "sections": [
                {
                    "heading": "Architecture",
                    "content": "<h4>EMCAScript</h4>\n\t\t\t\t\t\t\t\t\tEMCAScript (ES6) modules are introduced as the standard of JavaScript. New NodeJS versions already support ES6, but for the old versions it mightbe needed to declare in the config files (\"type\": \"module\") In this approach, modules can be exported and imported from different classes. Either named or default exports can be used in ES6.\t<br><br>\n\t\t\t\t\t\t\t\t\t<h5>Default Exports</h5>\n\t\t\t\t\t\t\t\t\tThere can be only one default export in a module, implying the default import. It can be imported with any name. (This great <a href=\"https://medium.com/@timoxley/named-exports-as-the-default-export-api-670b1b554f65\" target=\"_blank\" rel=\"noopener noreferrer\">blog</a> describes where to use default and named exports.)\t<br><br>\n\t\t\t\t\t\t\t\t\t<h5>Named Exports</h5>\n\t\t\t\t\t\t\t\t\tMultiple exports can be done with named exports. In this way, the exact names should be used for the imports. A very simple example is as follows:",
                    "image": "es6.png"
                },
                {
                    "heading": "Functions",
                    "content": "Functions can be declared in several ways, but a modern usage in ES6 is the array functions. (There are differences between regular functions and array functions. See the  <a href=\"https://levelup.gitconnected.com/7-differences-between-arrow-functions-and-regular-functions-in-javascript-9152883a839f\" target=\"_blank\" rel=\"noopener noreferrer\">article</a> for details.) A sample array function is shown below.",
                    "image": "arrayFunction.png"
                }
            ]
        },
        "xray": {
            "type": "article",
            "title": "Xray",
            "sections": [
                {
                    "content": "<br>And how did we construct resultDto? After each test, we filled over result:<br>",
                    "image": "xray3.png"
                }
            ]
        }
    }
};


// Helper function to get article data
function getArticleData(category, pageId) {
    if (articlesData[category] && articlesData[category][pageId]) {
        return articlesData[category][pageId];
    }
    return null;
}
