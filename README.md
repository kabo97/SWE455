# Aggregated Greeting Microservice with DevOps CI/CD Pipeline

## 📌 Project Overview

This project demonstrates a multi-service cloud-based microservice architecture using DevOps practices. It consists of:

- **Three microservices** (`server1`, `server2`, `server3`): Each returns a unique greeting message.
- **Aggregator service**: Calls all three microservices and combines their responses.
- **Frontend**: Static webpage with four buttons:
  1. Hello from Server 1
  2. Hello from Server 2
  3. Hello from Server 3
  4. Aggregated Hello (calls aggregator which fetches all)

All components are containerized with Docker and deployed through CI/CD pipelines using GitHub Actions.

---

## 👥 Team Members

| Name           | Role                             | Responsibilities |
|----------------|----------------------------------|------------------|
| Student A      | Developer & Tester               | Implemented microservices, frontend, Docker setup, unit tests |
| Student B      | CI/CD Engineer & Documentation   | GitHub Actions, deployment, security scans, final report |

---

## 🧰 Technology Stack

| Layer             | Tools Used                     |
|-------------------|--------------------------------|
| Backend           | Node.js + Express              |
| Frontend          | HTML + JavaScript              |
| Containerization  | Docker                         |
| Orchestration     | Docker Compose                 |
| CI/CD             | GitHub Actions                 |
| Testing           | Jest                           |
| Linting           | ESLint                         |
| Security Scanning | Trivy / CodeQL                 |
| Deployment        | Render (or Heroku/GitHub Pages)|

---

## 🏗️ Project Structure
project-root/ │ ├── aggregator/ # Aggregation service │ ├── index.js │ └── Dockerfile ├── server1/ │ ├── index.js │ └── Dockerfile ├── server2/ │ ├── index.js │ └── Dockerfile ├── server3/ │ ├── index.js │ └── Dockerfile ├── frontend/ │ ├── index.html │ └── script.js ├── .github/workflows/ # GitHub Actions workflows ├── docker-compose.yml # Service orchestration ├── README.md └── tests/ # Jest tests

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/greeting-microservice.git
cd greeting-microservice

