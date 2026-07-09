import { Cloud, GitBranch } from "lucide-react";

export function ProviderTag({ provider }: { provider: string }) {
  const icon =
    provider === "github" ? (
      <GitBranch size={13} strokeWidth={2} />
    ) : provider === "aws" ? (
      <Cloud size={13} strokeWidth={2} />
    ) : (
      <Cloud size={13} strokeWidth={2} />
    );

  return (
    <span className="inline-flex items-center gap-1.5 text-2xs font-mono uppercase tracking-wider text-base-300">
      {icon}
      {provider}
    </span>
  );
}
