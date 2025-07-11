"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function useFormSubmit(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const router = useRouter();

  const submitForm = async (formData) => {
    for (let field in formData) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field`);
        return;
      }
    }

    // ✅ Mobile number validation
    const mobileRegex = /^[0-9]{10}$/; // Adjust as per your requirement
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        alert("Failed to submit form");
        throw new Error("Failed to submit form");
      }

      const data = await res.json();
      setResponse(data);
      router.push("/thankyou");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, error, response };
}

export default useFormSubmit;
