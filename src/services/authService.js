import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export const loginWithClientId = async (clientId, password) => {
  const email = `${clientId}@ksrfiber.local`;
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithAdminId = async (adminId, password) => {
  const email = `${adminId}@ksrfiber.local`;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const resetPasswordForUser = async (identifier) => {
  const email = `${identifier}@ksrfiber.local`;
  return sendPasswordResetEmail(auth, email);
};
