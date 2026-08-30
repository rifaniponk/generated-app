import { useCallback, useState } from "react";

export type NewsletterStatus = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useNewsletter() {
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [message, setMessage] = useState("");

  const submit = useCallback((value: string) => {
    const email = value.trim();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return false;
    }
    setStatus("loading");
    // No backend — simulate async handling.
    window.setTimeout(() => {
      setStatus("success");
      setMessage(`You'll hear from us at ${email} the moment there's a good deal.`);
    }, 900);
    return true;
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setMessage("");
  }, []);

  return { status, message, submit, reset };
}
