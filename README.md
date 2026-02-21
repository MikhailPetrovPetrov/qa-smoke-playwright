# QA Automation – Smoke Tests

## About

This repository contains automated smoke tests for the demo e-commerce application.
The tests cover core user scenarios such as login and basic product interactions
to ensure application stability and functionality.

The project demonstrates Playwright-based UI automation with Page Object Model (POM)
architecture and is intended for quality assurance and testing purposes.

## Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- Assertions (Playwright expect)
- Git

## Project Purpose

- Smoke testing of core user flows
- Validation of login and basic product operations
- Early detection of regressions
- Example of maintainable QA automation architecture

## Project Structure

/tests        – test scenarios  
/pages        – Page Object Models  

## Getting Started

Install dependencies:

npm install

Run all tests:

npx playwright test

Run specific test:

npx playwright test tests/login.spec.ts

Generate report:

npx playwright show-report

## Test Coverage

- Login (smoke)
- Basic product interaction
- Core user flows

## Reports

Playwright HTML reports are generated after test runs.
Use the command below to view them:

npx playwright show-report