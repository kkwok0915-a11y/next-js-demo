"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message || "An unexpected error occurred."}</p>
    </div>
  );
}
