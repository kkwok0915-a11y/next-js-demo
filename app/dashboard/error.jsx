"use client"; // Error components must be Client Components

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message || "An unexpected error occurred."}</p>
    </div>
  );
}
