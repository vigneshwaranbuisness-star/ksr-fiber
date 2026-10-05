# KSR FIBER

This project is the beginning of the KSR FIBER Cable TV billing and customer management application.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Firebase setup

1. Create a Firebase project.
2. Enable Authentication, Firestore, Storage, Hosting, and Cloud Functions.
3. Copy `.env.example` to `.env` and add your Firebase values.
4. Configure Firestore security rules and Storage rules.
5. Create the single admin account in the Firebase console.

## Structure

- `src/pages/public` - public pages
- `src/pages/admin` - admin dashboard and admin pages
- `src/pages/client` - client dashboard and client pages
- `src/firebase` - Firebase configuration
- `src/context` - application state
- `src/services` - Firebase service entry points
- `src/components` - reusable UI pieces

## Important note

This scaffold includes the premium dark UI, route system, and Firebase-ready structure. Full business logic for admin creation, client billing, and payment approval is implemented in later phases using Firebase Cloud Functions and Firestore security rules.
