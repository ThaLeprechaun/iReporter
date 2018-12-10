[![Build Status](https://travis-ci.com/ThaLeprechaun/iReporter.svg?branch=develop)](https://travis-ci.com/ThaLeprechaun/iReporter) [![Coverage Status](https://coveralls.io/repos/github/ThaLeprechaun/iReporter/badge.svg?branch=coveralls-configuration)](https://coveralls.io/github/ThaLeprechaun/iReporter?branch=coveralls-configuration)    [![Maintainability](https://api.codeclimate.com/v1/badges/babe67753a5b2d2d0a2b/maintainability)](https://codeclimate.com/github/ThaLeprechaun/iReporter/maintainability)

# iReporter
----
**Introduction**
iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. It also enables users to report on things that need government intervention.

**API Endpoints**

| HTTP  Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/redflags | To get all red-flag records |
| GET | /api/v1/redflags/:id | To get a specific red-flag record |
| POST | /api/v1/redflags | To create a red-flag record |
| DELETE | /api/v1/redflags/:id | To delete a specific red-flag record |
| PATCH | /api/v1/redflags/:id/location | To edit the location of a specific red-flag record |
| PATCH | /api/v1/redflags/:id/comment | To edit the comment of a specific red-flag record |

- Heroku app can be found [here](https://ireporter-usman.herokuapp.com/)

- Link to gh-page can be found [here](https://thaleprechaun.github.io/iReporter)

- Pivotal Tracker board can be found [here](https://www.pivotaltracker.com/n/projects/2226706)
