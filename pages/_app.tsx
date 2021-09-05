// Imports
import "@styles/global.scss";

// Types
import type { AppProps } from "next/app";

// Export application
export default function MechaProject({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
