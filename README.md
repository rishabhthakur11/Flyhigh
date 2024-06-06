# [FLYHIGH](https://flyyhigh.vercel.app) &middot; [![PRAGYA SINGH](https://img.shields.io/badge/Author-Pragya_Singh-%253C%253E)](https://www.linkedin.com/in/pragyasingh1001)

This is a Flyhigh app created using Next.js for educational purposes. Flyhigh is an app that brings the vibrant and inspiring world of design right to your fingertips. Flyhigh is your go-to platform for sharing, discovering, and celebrating creative brilliance, just like the original Dribbble.

## FLYHIGH FEATURES

- Search & filter functions
- Authentication using Clerk
- MongoDB & Prisma for database
- Edgestore for image upload
- Zustand for state management
- Hosted in Vercel

## Tech/framework used

- Next.js 14
- Shadcn/ui
- Clerk
- Tailwind CSS
- TypeScript
- MongoDB
- Prisma
- Edgestore
- Zustand
- Vercel

## Starting the project

Open the [.env.example](/.env.example) and fill in your Database URL, Edgestore configurations & Clerk Auth Configurations then save it as .env the run the following command:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Demo

The app is hosted on Vercel. [Click here](https://flyyhigh.vercel.app) to visit.
<br>
Direct link: `https://flyyhigh.vercel.app`

## Screenshots

#### Homepage

![Homepage](/screenshots/screenshot-1.png)

#### Work

![Work](/screenshots/screenshot-2.png)

#### Sign in

![Sign in](/screenshots/screenshot-3.png)

#### Sign up

![Sign up](/screenshots/screenshot-4.png)

#### Search

![Search](/screenshots/screenshot-5.png)

#### Profile

![Profile](/screenshots/screenshot-6.png)

#### Upload

![Upload](/screenshots/screenshot-7.png)
