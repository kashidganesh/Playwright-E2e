# 🚀 Playwright Automation Project on AWS with Jenkins CI/CD

## 📘 Overview
This project demonstrates how to **run Playwright end-to-end tests** on an **AWS EC2 instance** using **Jenkins** for Continuous Integration and Continuous Delivery (CI/CD).  
The setup integrates **GitHub**, **Node.js**, and **Jenkins** to automate Playwright test execution and reporting in a cloud environment.

---

## 🧰 Tech Stack
- **Playwright** – End-to-end browser automation  
- **Node.js** – JavaScript runtime for Playwright  
- **Jenkins** – CI/CD automation tool  
- **AWS EC2 (Ubuntu)** – Cloud platform to host Jenkins  
- **GitHub** – Version control and source code hosting  

---

## ⚙️ Setup Instructions

### 1️⃣ Create and Configure AWS EC2 Instance
1. Launch an **Ubuntu EC2 instance** on AWS.  
2. Connect to the instance via SSH.  
3. Update the system:
   ```bash
   sudo apt update


2️⃣ Install Java (Required for Jenkins)

Jenkins is built on Java, so install OpenJDK 11:

sudo apt install openjdk-11-jre
java -version

3️⃣ Install Jenkins on AWS EC2

Add the Jenkins repository key and source list:

curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
/usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null


Update and install Jenkins:

sudo apt-get update
sudo apt-get install jenkins


Enable and start Jenkins:

sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins


Retrieve the Jenkins initial admin password:

sudo cat /var/lib/jenkins/secrets/initialAdminPassword

4️⃣ Access Jenkins Dashboard

Open your browser and go to:

http://<EC2-Public-IP>:8080


Paste the password above and complete the initial setup wizard.

5️⃣ Install Node.js on EC2

Since Playwright requires Node.js, install it on your EC2 instance:

sudo apt install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs


Verify the installation:

node -v
npm -v

6️⃣ Install Playwright

Once Node.js is installed, install Playwright globally or within your project:

npm init -y
npm install -D @playwright/test
npx playwright install


(Optional) You can verify Playwright by running a sample test:

npx playwright test

7️⃣ Integrate Jenkins with GitHub

Push your Playwright project to a GitHub repository.

In Jenkins:

Create a new Pipeline project.

Connect it to your GitHub repository.

Use your Jenkinsfile from the repo for build instructions.

8️⃣ Configure NodeJS in Jenkins

Go to Manage Jenkins → Global Tool Configuration.

Under NodeJS installations, add a version (e.g., Node18).

Reference this name inside your pipeline.