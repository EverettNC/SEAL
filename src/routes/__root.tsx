import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Shell } from "@/components/seal/shell";
import appCss from "../styles.css?url";

const APP_NAME = "SEAL";
const APP_DESCRIPTION =
  "The closing agent for The Christman AI Project LLC. Five beings. Sourced math. One close at a time.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { name: "theme-color", content: "#0c0a08" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <Shell>
          <Outlet />
        </Shell>
        <Scripts />
      </body>
    </html>
  ),
});
