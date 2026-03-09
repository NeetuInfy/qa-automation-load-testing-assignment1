# qa-automation-load-testing-assignment1# QA Automation & Load Testing Assignment

## Overview
This repository contains automation and load testing scripts for testing an EdTech learning application.

The project includes:
- End-to-End automation using Playwright
- Load testing using k6
- API test plan using JMeter
- Environment configuration using .env file


## Project Structure

/e2e  
Playwright automation script for learner journey

/load/jmeter  
JMeter API test plan and results screenshot

/load/k6  
k6 load testing script and threshold results

/config  
Environment configuration file


## Environment Setup

Create a .env file using the example configuration.

Example:

BASE_URL=https://practice-app.example.com
SEARCH_KEYWORD=testing


## Install Dependencies

Install Node.js packages:

npm init -y  
npm install @playwright/test  
npm install dotenv  

Install Playwright browsers:

npx playwright install


## Run Automation Test

Run the Playwright test script:

npx playwright test e2e/learner-flow.spec.js

This script performs the learner journey:
1. Navigate to application
2. Register new user
3. Login with created account
4. Search for course
5. Open course details
6. Add course to basket
7. Verify basket count increases


## Run k6 Load Test

Run the load test script:

BASE_URL=https://practice-app.example.com k6 run load/k6/search-load-test.js

Load test configuration:
- 20 virtual users
- Ramp up 10 seconds
- Run for 30 seconds
- Ramp down 10 seconds

Thresholds:
- 95% requests under 2 seconds
- Error rate below 1%


## JMeter Test Plan

The JMeter test plan tests the search API.

Configuration:
- 10 concurrent users
- Duration 60 seconds

Assertions included:
- Status code = 200
- Response time < 2 seconds
- Response body contains search keyword


## Metrics

k6 metrics can be exported to Prometheus.

Example metric:
http_req_duration

This metric measures the time taken for API requests.


## Notes

All load tests are executed against the practice application environment and not production systems.

Environment configuration is used to avoid hardcoding URLs.
