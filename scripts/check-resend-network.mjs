/**
 * Quick check: can this machine reach Resend's API over HTTPS?
 * Run: npm run check:resend
 */
const url = "https://api.resend.com";

fetch(url, { method: "GET", redirect: "manual" })
  .then((res) => {
    console.log(`OK — reached ${url} (HTTP ${res.status}). Your network allows Resend.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(`FAIL — cannot reach ${url}`);
    console.error(err?.message || err);
    console.error("\nFix outbound HTTPS/DNS for Node, or test the form on Vercel after deploy.");
    process.exit(1);
  });
