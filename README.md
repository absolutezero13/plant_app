# Plant App

Plant App is an Expo and React Native application for plant discovery, identification onboarding, care content, and a mocked premium subscription flow. It uses Expo Router for navigation, Redux Toolkit for user state, AsyncStorage for persistence, and Axios for API access.

## Requirements

- Node.js 20.19.4, 22.13.0, or a newer supported release
- npm
- Xcode and an iOS Simulator for iOS development
- Android Studio, the Android SDK, and an emulator for Android development

## Installation

Install dependencies:

```bash
npm install
```

Create and launch the native iOS app:

```bash
npm run ios
```

Create and launch the native Android app:

```bash
npm run android
```

To start Metro separately:

```bash
npm start
```

## Checks

Run the focused unit tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run linting:

```bash
npm run lint
```

## Project structure

```text
src/
  app/          Expo Router routes and navigation layouts
  components/   Shared UI components
  constants/    Design tokens and app-wide constants
  hooks/        Shared typed hooks
  screens/      Screen implementations, local components, and assets
  services/     API, endpoint, and typed storage services
  store/        Redux store and user state
  types/        Shared TypeScript declarations
```

Route files stay intentionally small and render the matching screen from `src/screens`. Screen-specific components and image variants live beside their screen rather than in a global asset folder.

## Data flow

`ApiService` is the generic Axios client. Endpoint-specific services request `unknown`, validate the server payload at runtime, and return typed app data. Category images are nullable because the API may omit them. The home screen handles loading, error, and successful states independently for questions and categories.

The application currently reads:

- `GET /getCategories`
- `GET /getQuestions`

Redux Toolkit owns login and subscription state. The relevant user state is restored from and persisted to AsyncStorage through the typed `StorageService`.

## Navigation

- Welcome
- Onboarding
- Paywall
- Main tabs: Home, Diagnose, Scan, My Garden, and Profile

The root layout decides whether to show the authentication/onboarding flow or the main tab flow from the persisted user state.
