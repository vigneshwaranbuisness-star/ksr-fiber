import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export const loginUser = async (identifier, password) => {
  const email = `${identifier}@ksrfiber.local`;
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return signOut(auth);
};

export const sendPasswordReset = async (identifier) => {
  const email = `${identifier}@ksrfiber.local`;
  return sendPasswordResetEmail(auth, email);
};

export const createUserAccount = async (identifier, password) => {
  const email = `${identifier}@ksrfiber.local`;
  return createUserWithEmailAndPassword(auth, email, password);
};
