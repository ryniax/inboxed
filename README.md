# Inboxed

Inboxed is an educational project of a network communicator, inspired by applications such as Discord, Slack and others. Our goal is to create web, desktop and mobile applications concetrated around backend based on web sockets.

![Inboxed Dashboard](./assets/inboxed-dashboard.png)

# Technologies

- Typescript
- Docker
- Express.js
- TypeORM
- PostgreSQL
- Vue 3
- SocketIO

# Project setup instructions list

[Web Setup](#web-setup)<br/>
[Mobile Setup](#mobile-setup)</br>
[Desktop Setup](#desktop-setup)

<hr/>

<a name="web-setup"></a>

## Web Setup

In order to run our web project, you will need Node.js and Docker on your PC. Monorepo is managed by Lerna, so all commands should be run in root directory.

1. First of all, you should install dependencies in root directory by: `npm install`. That command will install Lerna in project, which helps you further.
2. To install dependencies in all apps, run: `npm run bootstrap`.
3. In **apps/api** folder, copy `.env.example` file and change its name to `.env`.
4. Now you can run any application, but you will need a database to work them properly. You can run database in docker by: `docker-compose up`.
5. When database is running, you can run web app by that command:

`npm run dev:web` - run web application, frontend + backend.

<a name="mobile-setup"></a>

## Mobile Setup

In progress.

<a name="desktop-setup"></a>

## Desktop Setup

In progress.
