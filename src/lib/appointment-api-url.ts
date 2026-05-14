/**
 * Use an absolute API URL so the browser always targets the same host as the page (avoids
 * broken relative resolution in some embedded previews). Do not point this at another origin
 * without adding CORS on the API.
 */
export function getAppointmentApiUrl(): string {
  if (typeof window === "undefined") {
    return "/api/appointment";
  }
  return `${window.location.origin}/api/appointment`;
}
