import { useState } from "react";
import { useAuth } from "../contexts/authcontext";

export default function UserProfile() {
    const { user } = useAuth();
    const [statusMessage, setStatusMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        try {
            // Profile update logic can be wired to an API endpoint here
            console.log("Profile update data:", data);
            setIsError(false);
            setStatusMessage("Profile updated successfully!");
        } catch (error) {
            setIsError(true);
            setStatusMessage("Failed to update profile. " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="max-w-lg mx-auto px-4 py-10 font-sans text-gray-800">
            <h1 className="text-3xl font-bold text-gray-700 mb-8">My Profile</h1>

            {statusMessage && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className={`mb-6 p-4 rounded-lg border text-sm font-medium ${
                        isError
                            ? "bg-red-50 text-red-700 border-red-200"
                            : "bg-green-50 text-green-700 border-green-200"
                    }`}
                >
                    {statusMessage}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                aria-label="User profile form"
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-5"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="first_name" className="text-sm font-semibold text-gray-600">
                        First Name
                    </label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        defaultValue={user?.first_name || ""}
                        autoComplete="given-name"
                        aria-required="true"
                        required
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="last_name" className="text-sm font-semibold text-gray-600">
                        Last Name
                    </label>
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        defaultValue={user?.last_name || ""}
                        autoComplete="family-name"
                        aria-required="true"
                        required
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-sm font-semibold text-gray-600">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        defaultValue={user?.username || ""}
                        autoComplete="username"
                        aria-required="true"
                        required
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-600">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        defaultValue={user?.phone || ""}
                        autoComplete="tel"
                        aria-required="true"
                        required
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="mt-2 w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 active:scale-95 transition transform disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Saving…" : "Save Changes"}
                </button>
            </form>
        </main>
    );
}
