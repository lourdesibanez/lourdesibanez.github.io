---
title: "CodeIgniter to Laravel Migration"
kicker: "Backend · Seeker Parking"
summary: "Migrating the Entry Control module from a legacy CodeIgniter architecture to a REST API built with Laravel."
cardSummary: "From CodeIgniter to a Laravel REST API: endpoints, migrations and Swagger documentation."
order: 2
categories: [backend]
tags: ["Laravel", "REST API", "Backend"]
cover: { src: "/assets/seeker/seeker.svg", alt: "Seeker Parking logo", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/seeker/seeker.svg", alt: "Seeker Parking logo" } ] }
facts:
  - { label: "Type", value: "Backend migration" }
  - { label: "Company", value: "Seeker Parking" }
  - { label: "Stack", value: "Laravel · MySQL" }
---

## The context

Seeker Parking is the company I currently work for: we digitize parking and event management. The Entry Control module —the one that records when each vehicle comes in and goes out— had been running for years on old technology that was getting harder and harder to maintain and grow. My job was to move that module to a more modern stack while keeping the service running for users without any downtime.

## My role

- Rebuilt the old module's features in the new system
- Adapted the database to the new structure without losing any existing data
- Added the logic to record entries, exits and vehicle changes within a single ticket
- Documented how each part works so the rest of the team can use it

## Why it matters

Modernizing this module makes it easier to spot and fix bugs, simpler to add new features down the road, and lowers the risk of the system failing right when a customer needs to register an entry.
