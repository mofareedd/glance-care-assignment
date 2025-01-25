# Dashboard Movies Assignment Project
<img width="1512" alt="overview-page-ss" src="https://github.com/user-attachments/assets/ad368c13-572e-4813-a79b-18c488b9d566" />

## Tech Stack

- ⚡ **Next.js 15+**: Take advantage of the latest features and optimizations of the Next.js framework.
- 🔍 **TypeScript**: Develop with strong typing and improved code quality.
- 🚀 **Biome**: Ensure consistent code style and catch errors early.
- 🖼️ **Shadcn UI Library**: Integrate Shadcn UI library for building beautiful user interfaces effortlessly.
- 🎭 **Playwright**: Automate browser testing for comprehensive coverage.

The Movie DB project is structured to facilitate easy navigation and development. Below is an overview of the main directories and their purposes:

## Project Structure

```bash
|-- public                              # Static files
|-- e2e                                 # End-to-end tests for the application
|-- src                                 # Next.js source directory
|   |-- app                             # Next.js App Router
|   |   |   |   
|   |   |-- Dashboard                    # Dashboard routes
|   |   |   |-- page.tsx                # Empty Page redirected to /overview 
|   |   |   `-- overview                # (Module) Overview page
|   |   |       |-- _components          # Components for the overview page
|   |   |       |-- metrics.ts          # Metrics for statistics charts
|   |   |       `-- page.tsx
|   |   |   `-- browse                # (Module) Browse page
|   |   |       |-- _components          # Components for the overview page
|   |   |       `-- page.tsx
|   |   |-- layout.tsx                  # App layout
|   |-- components                      # Global components
|   |   |-- layout                      # Layout components(sidebar, nav, etc..)
|   |   `-- ui                          # Atomic design components
|   |-- libs                            # 3rd-party libraries & Global utilitis
|   |   `-- api.ts                      # API call for fetching moviees
|   |   `-- utils.ts
|   |   `-- types.ts                    # Global types
|   |   `-- constants.ts                #constants used throughout application.

```

## Getting Started

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm dev`

## Scripts

The following scripts are available in the `package.json`:

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs the linter to check for code quality.
- `test`: Runs the Playwright tests.
