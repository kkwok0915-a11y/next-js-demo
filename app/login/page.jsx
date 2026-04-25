"use client";

import { LoginForm } from "@/components/login-form";
import { useSessionData } from "@/hooks/SessionHooks";
import apiClient from "@/utils/apiClient";
import { GalleryVerticalEndIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { setUserDetails } = useSessionData();

  const onClickAuthentication = async (e) => {
    try {
      // Disable form reload
      e.preventDefault();
      // Get userEmail
      const userEmail = e.target[0].value;
      // Get password
      const userPassword = e.target[1].value;
      // Check userEmail && userPassword
      if (userEmail && userPassword) {
        // API endpoint
        const apiEndpoint = "/v1/authentication";
        // API body
        const apiBody = { userEmail, userPassword };
        const regRequest = await apiClient.post(apiEndpoint, apiBody, {});
        // Get userId
        const userId = regRequest.data?.user?.id;
        console.log(regRequest.data);
        console.log(userId);
        // Update userDetails
        setUserDetails((prev) => ({
          ...prev,
          userId: userId,
          email: userEmail,
        }));
        // Navigate to dashboard
        router.push("/dashboard");
      } else {
        console.log("Invalid information");
      }
    } catch (error) {
      // Runs if try block fails
      console.error(error);
      alert("Oops! Something went wrong:", error.message);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEndIcon className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmit={onClickAuthentication} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/next.svg"
          alt="Image"
          className="absolute inset-0 h-full w-[full] object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
