import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig"; // Import Firebase config

const auth = getAuth(app);
const db = getFirestore(app);

// Load user from localStorage
const storedUser = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: storedUser,
  loading: false,
  error: null,
  isAuthenticated: !!storedUser,
  isAdmin: false,
};

// Function to convert Firebase error codes to user-friendly messages
const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please use a different email or try logging in.";
    case "auth/invalid-email":
      return "The email address is invalid. Please check and try again.";
    case "auth/weak-password":
      return "Your password is too weak. Please use a stronger password with at least 6 characters.";
    case "auth/user-not-found":
      return "No account found with this email. Please check your email or sign up.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again or reset your password.";
    case "auth/too-many-requests":
      return "Too many unsuccessful login attempts. Please try again later or reset your password.";
    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled. Please try again.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection and try again.";
    default:
      return errorCode || "An error occurred. Please try again later.";
  }
};

// Async Thunks for Firebase Auth
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userData = { uid: user.uid, email, name, isAdmin: false };

      // Save user in Firestore DB with email as document ID
      await setDoc(doc(db, "users", email), userData);

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.code));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userData = { uid: user.uid, email };

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.code));
    }
  }
);

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      };

      // Save user in Firestore DB with email as document ID
      await setDoc(doc(db, "users", user.email), userData, { merge: true });

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.code));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      return null;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error.code));
    }
  }
);

// Redux Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true; // Set to true on successful registration
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true; // Set to true on successful login
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true; // Set to true on successful Google login
        state.error = null;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false; // Set to false on logout
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
