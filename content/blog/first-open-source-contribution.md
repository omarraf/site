---
title: "Small Contributions, Sustainable Impacts"
date: "2024-11-04"
excerpt: "My first open source contribution to the Open Energy Dashboard"
tags: ["open-source", "development", "sustainability", "testing"]
---

## Introduction

This past month, I had the chance to contribute to the Open Energy Dashboard (OED)
alongside two teammates. Our task was to create a specific test case to improve the platform's
reliability, but navigating a large and established codebase came with its own set of
challenges. In the end, our test case not only added value to the project but also strengthened
our skills in open-source collaboration. In this post, I'll walk through the challenges, insights,
and growth we experienced along the way.

## About Open Energy Dashboard

The Open Energy Dashboard (OED) is an open-source project dedicated to providing a
high-quality, free dashboard that supports sustainability eﬀorts and addresses climate change.
The dashboard is designed to help organizations and individuals monitor and analyze energy
usage eﬀectively.

OED embodies the spirit of humanitarian open source for the greater good. Instead of creating
a proprietary solution for a single organization, OED aims to be a versatile tool accessible to a
wide range of users. It fills a gap left by existing dashboards that are often limited in
functionality, non-portable, or come with a price tag.

Typical users of OED include sustainability coordinators, energy managers, and environmental
researchers who need to track and analyze energy consumption data. For example, a university
campus could use OED to monitor energy usage across diﬀerent buildings, identify
ineﬃciencies, and implement strategies to reduce their carbon footprint.

![Initial view of the dashboard](/oed_initial.png "Initial view of the dashboard.")
![bar graph](/oed_demo.png "Bar graph displaying energy consumption for dorm floors in kWh") 

## The Issue

I worked on Issue [#962](https://github.com/OpenEnergyDashboard/OED/issues/962) in the Open Energy Dashboard repository, specifically implementing
the 'BG9' test case. The issue involved creating new tests for the readings module, specifically
focusing on bar group quantity tests. Testing is crucial for ensuring the reliability and accuracy
of the Open Energy Dashboard. By adding comprehensive tests, we can guarantee that new
features work as intended and that existing functionalities remain unaﬀected by future changes.

To begin, I studied the [design documentation](https://github.com/OpenEnergyDashboard/DesignDocs/blob/main/testing/testing.md). The
testing documentation provided valuable information on how test data is generated, structured,
and validated within the system. It detailed the necessary steps for defining units, conversions,
and meter data, and explained how to use expected values from CSV files to verify test
outcomes. This comprehensive overview helped me understand the testing requirements and
procedures, leading me to the specific files where the tests needed to be implemented.

Following the directions from the design documentation, I located
`readingsBarGroupQuantity.ts`, the primary file responsible for tests related
to the readings bar group quantity functionality. This file was the ideal place to implement the
new BG9 test case, allowing me to cover scenarios involving mixed reading intervals and unit
conversions.

## Codebase Overview

- **Client (React):** The user interface, where users interact with the dashboard to view and
analyze energy data.
- **Server (Node.js with Express, using TypeScript):** Manages API requests, handles data
processing, and communicates with the database.
- **Database(PostgreSQL):** Stores historical and real-time energy data, as well as user settings
and configurations.
- **Visualization (Plotly.js):** Handles the dynamic creation of charts and graphs based on
user-selected parameters.
- **Testing (Mocha and Chai)** Provides automated testing to verify the accuracy of
implemented features.
- **Docker Containers:** Encapsulate the application components for consistent deployment
across various environments.

![Workflow of OED](/OED-Workflow.png "OED Workflow")



## Solution

We successfully implemented the BG9 test case within the
`readingsBarGroupQuantity.ts` file. This test aimed to verify that the readings
module correctly handled mixed reading intervals and unit conversions, specifically converting
energy usage from kilowatt-hours (kWh) to megajoules (MJ).


**Steps Taken:**

1. Read the docs and past tests
2. Wrote the test with TypeScript
3. Verified results using Docker

To verify the test, I ran it within the Docker environment, and all tests, including BG9, passed
successfully. Below is a screenshot showing the test results:

![Test results passing in Docker](/tests_passing_oed.png "Test results passing in Docker")

You can view the [pull request here](https://github.com/OpenEnergyDashboard/OED/pull/1365).

## Conclusion

Contributing to OED was a fulfilling experience. I learned how to work in a large open-source project, follow community standards, and meaningfully collaborate. Most importantly, I contributed to a tool used by real people working toward sustainability. Huge thanks to my teammates for making the experience memorable.