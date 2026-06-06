export async function loginUser(email, password) {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      let errorMessage = "Invalid email or password";
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        // ignore JSON parsing errors for error response
      }
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (err) {
    // If it's already an Error with our custom message (e.g. from the !response.ok check), rethrow it
    if (err.message && err.message !== "Failed to fetch" && err.name !== "TypeError") {
      throw err;
    }
    // Otherwise it is likely a network error / CORS issue
    throw new Error("Unable to connect to the backend server. Please make sure the backend is running and CORS is configured.");
  }
}