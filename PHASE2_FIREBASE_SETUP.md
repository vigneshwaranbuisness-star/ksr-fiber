# Phase 2: Firebase Configuration & Authentication Setup

## Firebase Project Created

**Project ID:** `ksr-fiber-483b5`

## What's Ready

✅ Firebase Authentication initialized  
✅ Firestore database connected  
✅ Firebase Storage configured  
✅ Login page with Firebase integration  
✅ Forgot password flow  
✅ Role-based routing (Admin/Client)  
✅ Logout functionality  
✅ Toast notifications for user feedback  

## Next Steps: Create the Single Admin Account

### Option 1: Firebase Console (Recommended)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `ksr-fiber-483b5`
3. Go to **Authentication** → **Users**
4. Click **Add user**
5. Create account:
   - Email: `admin@ksrfiber.local`
   - Password: (set a strong password)
   - Click **Create user**

6. Go to **Firestore Database** → **+ Start collection**
7. Create collection: `users`
8. Add first document:
   - Document ID: (copy the UID from the admin user you just created)
   - Fields:
     - `role`: (string) `ADMIN`
     - `createdAt`: (timestamp) now
   - Click **Save**

### Option 2: Cloud Functions (After Phase 3)

After Phase 3, we'll have admin-specific setup functions.

## Testing Login

Once the admin account is created:

1. Run the app:
   ```bash
   npm install
   npm run dev
   ```

2. Visit: `http://localhost:5173`

3. Click "Login"

4. Enter:
   - **ID:** `admin`
   - **Password:** (the password you set in Firebase)

5. You should see the Admin Dashboard

## Important Security Notes

- ✅ Admin password is NOT stored in code
- ✅ Admin password is managed by Firebase Authentication
- ✅ Client IDs map to internal Firebase emails (`clientid@ksrfiber.local`)
- ✅ Roles stored in Firestore (trusted source)
- ⚠️ Firestore rules will be added in Phase 3

## Local Development

The `.env` file now contains your Firebase config:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=ksr-fiber-483b5
VITE_FIREBASE_STORAGE_BUCKET=...
```

The app is ready for Phase 3: Admin Client Management & Secure Firestore Rules
