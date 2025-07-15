import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    user: "",
    isAuthenticated: false,
    isSigningUp: false,
    isSigningIn: false,
    loading: true,
    isLoggingOut: false,

    // Initialize auth state from localStorage
    initialize: () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (token && user) {
            try {
                const parsedUser = JSON.parse(user);
                set({
                    user: parsedUser,
                    isAuthenticated: true,
                    loading: false
                });
            } catch (error) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                set({ loading: false });
            }
        } else {
            set({ loading: false });
        }
    },

    signup: async (formData) => {
        set({ isSigningUp: true, error: null });
        try {

            const response = await axiosInstance.post("/auth/register", formData);

            set({ isSigningUp: false, user: response.data.user });
            const { token, user } = response.data;

            const { password, resetPasswordToken, resetPasswordExpires, ...safeUser } = user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(safeUser));
            console.log("User data:", safeUser);

            toast.success(response.data.message || 'Registration successful!');
            return response.data;
        } catch (error) {
            console.error('Full error:', error);

            let errorMessage = 'Registration failed';
            if (error.response) {
                console.error('Response data:', error.response.data);
                errorMessage = error.response.data.error ||
                    error.response.data.message ||
                    errorMessage;

                // Handle file size error specifically
                if (error.response.status === 413) {
                    errorMessage = 'File too large. Maximum 5MB allowed.';
                }
            }

            set({ isSigningUp: false, error: errorMessage });
            toast.error(errorMessage);
            throw error;
        }
    },
    login: async (data) => {
        set({ isSigningIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            const { token, user } = res.data;

            // eslint-disable-next-line no-unused-vars
            const { password, resetPasswordToken, resetPasswordExpires, ...safeUser } = user;
            // Save to localStorage

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(safeUser));
            console.log("User data:", safeUser);

            set({
                user: safeUser, // Store the entire user object without sensitive data
                isAuthenticated: true
            });
            toast.success("Logged in successfully");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.error || "Login failed");
            return false;
        } finally {
            set({ isSigningIn: false });
        }
    },

    signInWithGoogle: async (googleData) => {
        try {
            const response = await axiosInstance.post('/auth/google', googleData);
            const { accessToken, user } = response.data;

            // Save to localStorage
            localStorage.setItem('accessToken', accessToken);

            // Update store state
            set({ user, isAuthenticated: true });

            return true;
        } catch (error) {
            console.error('Google Sign-In Error', error);
            return false;
        }
    },

    logout: () => {
        set({ isLoggingOut: true })
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ user: null, isAuthenticated: false, isLoggingOut: false });
        return Promise.resolve();
    },

    setUser: (userObj) => set({ user: userObj, isAuthenticated: true }),
}));