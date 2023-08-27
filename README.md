# Cloud Deployed Dockerized Hotel Scheduler Spring Angular App

---

## About the Project

---

### Introduction

This project involves refining a hotel scheduling application by integrating advanced features such as multithreaded language translation and time zone messaging. The enhanced application is then containerized using Docker, ready for cloud deployment. The application is built using a Spring backend and an Angular frontend and is designed to meet the evolving requirements of modern hotel management.
## Changes Made

For clarity and easy reference, the following notes detail the changes made to the codebase for each specified requirement:

- **Localization & Internationalization**: Integrated resource bundles for both English and French. Used different threads to display welcome messages in both languages.

- **Currency Display**: Adjusted the frontend to showcase reservation prices in U.S. dollars ($), Canadian dollars (C$), and euros (€) on distinct lines.

- **Time Zone Conversion**: Implemented a method to convert times between Eastern Time (ET), Mountain Time (MT), and Coordinated Universal Time (UTC) zones and displayed the converted times on the frontend.

- **Docker Integration**: Crafted a Dockerfile to generate a single image encompassing all code, including the modifications. Added a docker-compose file to streamline deployment.

- **Cloud Deployment with Azure**: Described steps for deploying the containerized app to Azure, including using Azure SQL Database, Azure Monitor, Azure Virtual Network, Azure Key Vault, and integrating with a CI/CD pipeline.

---

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Java 20 (or the version you're using, adjust accordingly)
- Node.js
- Angular CLI
- Spring Boot
- Maven

### Installation/Setup

1. Clone the repo:
   ```bash
   git clone https://gitlab.com/muritalatolanrewaju/Cloud-Deployed-Dockerized-Hotel-Scheduler-Spring-Angular.git
    ```
   

2. Navigate to the root directory:
   ```bash
   cd Cloud-Deployed-Dockerized-Hotel-Scheduler-Spring-Angular
   ```

3. Install the Angular CLI:
   ```bash
   npm install -g @angular/cli
   ```

4. Install the Angular dependencies:
   ```bash
    npm install
    ```

5. Install the Spring Boot dependencies:
    ```bash
     mvn install
     ```

6. Build the Angular application:
    ```bash
     ng build
     ```

7. Build the JAR file using Maven if it's not already built `src/main/docker/artifact/cloud_hotel_app-1.0.0.jar`:
   ```bash
    mvn clean package
   ```

### Usage

1. Navigate to the docker directory:
   ```bash
    cd src/main/docker
    ```

2. Using Docker Compose, build and run the Docker image:
   ```bash
    docker compose up
    ```

2. Navigate to the application in your browser:

> http://localhost:8080/

---

### Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions are **greatly appreciated**.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

---

### License

Distributed under the GNU License. See `LICENSE` for more information.

---

### Acknowledgements

- Spring Boot
- Angular
- Docker
- Azure
- Maven
- Java
- Node.js
- JetBrains