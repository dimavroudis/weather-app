# Weather app

To start the project run `npm run dev`.

## Built with

- React
- Typescript
- Vite
- Tailwind
- Manitine UI
- Rechart.js
- Day.js
- ReactSvg
- React Router

## Project structure

```
/src
  /components
    ...
  /features
    ...
  /types
    ...
  /utils
    ...
  /pages
    ...
```

- `/components` Contains presentational components, which are primarily concerned with how the application looks. These components are designed to be reusable and often function as the building blocks of the application's UI. They typically do not contain business logic or handle state beyond their own UI state.
- `/features` This directory houses the business logic and stateful components of the application, often referred to as "smart" components or containers. These components are aware of the application's state management and may be responsible for data fetching, stateful logic, and integrating various presentational components to create a complete feature.
- `/pages` Contains the application's page components. Each page component corresponds to a route in the application, defining the layout and assembling various components to form a complete page. This directory helps in organizing the application's routes in a clear and intuitive manner.
- `/utils` Contains utility functions and helpers that are used across the application. These can include formatting functions, validators, and any other functions that help reduce code duplication and improve maintainability.
- `/types` Contains TypeScript type definitions and interfaces that are used throughout the application. This directory is crucial for maintaining type safety, making the code more predictable, and enhancing the development experience by providing clear contracts for data structures and function signatures.
