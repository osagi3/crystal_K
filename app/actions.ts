"use server";

export type EnquiryState = {
  success: boolean;
  error: string | null;
};

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const intent = String(formData.get("intent") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !intent || !message) {
    return { success: false, error: "Please complete every field." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  console.log("[enquiry]", {
    name,
    email,
    intent,
    message,
    at: new Date().toISOString(),
  });

  return { success: true, error: null };
}
