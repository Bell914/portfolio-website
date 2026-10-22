# Photo Caption Contest plan

## Required outcome

An Express API backed by PostgreSQL through Sequelize. It serves four contest images, exposes image and caption endpoints, supports bcrypt-based registration/login/logout, requires authentication to submit captions, caches image reads locally, documents the API with Swagger, and is deployable to Render.

## Milestones

1. Configure Sequelize and create the PostgreSQL database.
2. Define User, Image, and Caption models and run migrations.
3. Add the four image records and database-backed image/caption routes.
4. Add authentication and authorization, then verify all routes with Postman or equivalent HTTP tests.
5. Add localized caching and Swagger documentation.
6. Push only project files (with `.env` and other secrets ignored) and deploy after Render authorization and database connectivity are available.

## Current constraints

Local PostgreSQL and Docker are unavailable in the current permission context. Database-backed runtime tests and Render deployment must wait until an authorized PostgreSQL runtime and Render access are available.
