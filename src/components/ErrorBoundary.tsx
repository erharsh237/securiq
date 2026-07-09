import { Component, type ErrorInfo, type ReactNode } from "react";
import { Sentry } from "../lib/sentry";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Securiq marketing site error:", error, info);
    Sentry.captureException(error, {
      contexts: { react: { componentStack: info.componentStack } },
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
          <img src="/logo.png" alt="Securiq" className="h-8 w-auto opacity-80" />
          <h1 className="mt-6 font-display text-2xl font-semibold text-ink">
            Something went wrong.
          </h1>
          <p className="mt-2 max-w-sm text-ink/60">
            We hit an unexpected error. Try refreshing the page — if it keeps
            happening, let us know.
          </p>
          <a
            href="/"
            className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-pine-dark"
          >
            Back to home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
