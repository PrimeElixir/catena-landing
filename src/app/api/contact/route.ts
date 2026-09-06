import { handleContactRequest } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleContactRequest(request, {
    config: {
      enabled: process.env.CONTACT_FORM_ENABLED,
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_EMAIL,
      deploymentEnvironment: process.env.VERCEL_ENV,
    },
    fetch,
  });
}
