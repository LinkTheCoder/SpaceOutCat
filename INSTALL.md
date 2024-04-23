# Install 📦

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Prerequisites

- Node.js (versions 18 or higher)
- Npm

## Getting Started

Fork/clone the repository, install its dependencies and run the local dev server
on the root directory:

```console
git clone https://github.com/LinkTheCoder/SpaceOutCat.git
cd SpaceOutCat
npm install
npm run dev
```

You can now access http://localhost:3000 on your browser.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

<hr>

# Github Actions 🏃

This project has ci/cd.yml & playwright.yml that are executed on push & pull request.

ci/cd.yml
Installs, Load environment variables, Builds & Runs Unit/Integration Tests

playwright.yml
Runs the e2e test

Actions secrets and variables
Is available in the repository inside the section secrets and variables then Actions.

This is one option to be able to use variables trough Github Actions.

<hr>

# Firebase 🔥

This project use Firebase as real time database.

_To learn about how to setup Firebase check out tutorials or their docs: [Firebase Documentation](https://firebase.google.com/docs/)_

## .env

For local development create a `.env` file on the root of your project called `.env.local` file with your Firebase API key:

```console
NEXT_PUBLIC_FIREBASE_API_KEY=YourKey
```
For production save your key in a server. 
Vercel for example has ```Environment Variables``` available to save keys. You can read more in their docs: [Vercel Documentation](https://vercel.com/docs/projects/environment-variables )

## firebaseConfig.js

Once you have created a Firebase project you will receive several id's and web links that needs to be added to the Firebase config file in the project to be able connect with the database.

```const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'project.domain.com',
  projectId: 'ID',
  storageBucket: 'project.domain.com',
  messagingSenderId: 'MS ID',
  appId: 'APP ID',
  measurementId: 'M ID',
};
```
<hr>

# Learn Next.js 📖

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<hr>

# Tailwind CSS ✨

For styling `Tailwind CSS` is used.

Theme extension for colors, font, plugins and more can be found in `tailwind.config.js`.
In this project `Tailwind form` plugin is added.

## tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		colors: {
		primary: '#ba68c8',
		secondary: '#171717'
	}
	},
	fontFamily: {
		sans: ['Montserrat', 'sans-serif'],
	}
  },
  plugins: [require("@tailwindcss/forms")],
}
```

# Testing 🚧

This project has installed `React Testing Library`, `Jest` & `Playwright`

## Unit & Integration Test

Run all tests in the `test` folder
```console
npm run test
```

Auto run all tests after every edits in the test files
```console
npm run test:watch
```

## E2E
For tutorial how to use Playwright visit their docs: [Playwright Documentation](https://playwright.dev/docs/intro)
```console
npx playwright test
```
```console
npx playwright show-report
```
```console
npx playwright test --ui
```

# Deploy on Vercel 🖥️

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
