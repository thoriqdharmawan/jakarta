# Jakarta Project

A web application powered by Vue 3, Vite, and other modern frontend technologies. This project uses several libraries and tools to streamline the development process, including Vue, Vite, Bootsrap, Axios, and a mock server (json-server).

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Development Environment](#development-environment)
- [Code Formatting and Linting](#code-formatting-and-linting)

## Project Overview

The Jakarta project is a modern web application built with **Vue 3**. It leverages **Vite** for fast development and build processes and uses **json-server** to simulate a backend API for development purposes.

### Key Features:

- **Vue 3** for building the UI.
- **Vite** for an optimized development and production environment.
- **json-server** to simulate a RESTful API.
- **Axios** for making HTTP requests.
- **V-Calendar** for integrating calendar functionality.
- **Vue3 Carousel** for creating carousels.
- **ESLint** and **Prettier** for code quality and formatting.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:thoriqdharmawan/jakarta.git
   ```

2. **Install dependencies**:

   Navigate into the project directory and run:

   ```bash
   yarn
   ```

## Run the Project

To start the development server and mock API, run the following command:

1. **Clone the repository**:

   ```bash
   yarn dev
   ```

   This will start the Vite development server and json-server in parallel. Once the command runs successfully, the project will be accessible at:

   - Frontend (Vite server): http://localhost:5173
   - Mock API (json-server): http://localhost:3000

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn dev`

Runs the application in development mode using Vite, along with a mock server provided by `json-server`.

- Starts Vite dev server.
- Starts a json-server instance using `db.json`.

### `yarn build`

Builds the application for production, optimizing the code and assets for faster loading times.

### `yarn preview`

Preview the production build locally.

### `yarn lint`

Runs ESLint to lint the codebase and automatically fix issues where possible.

### `yarn format`

Runs Prettier to format the code in the `src/` directory.

## Dependencies

The project uses the following libraries and packages:

### Core Dependencies:

- **bootstrap**: A library for styling.
- **@popperjs/core**: A library for positioning tooltips and popovers.
- **axios**: A promise-based HTTP client for making requests to the backend.
- **v-calendar**: A flexible calendar and date picker component for Vue.
- **vue**: The core framework used for building the application.
- **vue3-carousel**: A carousel component for Vue 3.

### Development Dependencies:

- **@eslint/js**: JavaScript linting rules for ESLint.
- **@vitejs/plugin-vue**: Vite plugin for Vue 3.
- **@vue/eslint-config-prettier**: ESLint configuration to work well with Prettier.
- **concurrently**: Allows running multiple npm scripts concurrently.
- **eslint**: Linting utility for JavaScript.
- **eslint-plugin-vue**: ESLint plugin for Vue.js.
- **json-server**: A tool for creating a fake REST API with a JSON database.
- **prettier**: Code formatter.
- **vite**: A next-generation, fast build tool for modern web applications.
- **vite-plugin-vue-devtools**: Vite plugin for integrating Vue Devtools during development.

## Development Environment

### Vite

Vite is used as the build tool for the project. It provides fast development feedback and supports features like hot module replacement (HMR) for efficient development.

### json-server

`json-server` is used to mock a backend API during development. It serves a `db.json` file as a RESTful API, making it easier to simulate interactions with a backend without needing a real server.

### Axios

Axios is used for making API requests to the `json-server` or any other API you connect to. It's configured to make HTTP requests and handle responses.

### Prettier

Prettier is configured to automatically format the code according to specified style rules. To format the code in the `src/` directory, run:

```bash
yarn format
```
