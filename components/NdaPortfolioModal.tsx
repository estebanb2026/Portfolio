"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { isNdaPasswordValid } from "@/lib/nda-gate";

type NdaPortfolioModalProps = {
  open: boolean;
  onClose: () => void;
  onVerified: () => void;
};

export function NdaPortfolioModal({ open, onClose, onVerified }: NdaPortfolioModalProps) {
  const titleId = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setValue("");
      setError(false);
      const t = window.setTimeout(() => inputRef.current?.focus(), 50);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const submit = useCallback(() => {
    if (isNdaPasswordValid(value)) {
      onVerified();
      onClose();
      setValue("");
      setError(false);
    } else {
      setError(true);
    }
  }, [value, onVerified, onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-sm rounded-xl border border-app-border-glass bg-app-bg/95 p-6 shadow-2xl backdrop-blur-md"
      >
        <h2 id={titleId} className="text-sm font-medium text-app-text">
          NDA design portfolio
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-app-muted">
          Enter the password to open the Figma file in a new tab.
        </p>
        <form
          className="mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <label htmlFor="nda-password" className="sr-only">
            Password
          </label>
          <input
            id="nda-password"
            ref={inputRef}
            type="password"
            autoComplete="off"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            className="w-full rounded-lg border border-app-border-glass bg-app-surface px-3 py-2.5 text-sm text-app-text outline-none ring-0 transition placeholder:text-app-faint focus:border-app-border-glass focus:ring-1 focus:ring-white/10"
            placeholder="Password"
          />
          {error && (
            <p className="mt-2 text-xs text-red-400/90" role="status">
              That password didn&apos;t match. Try again.
            </p>
          )}
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-xs font-mono-label uppercase tracking-wide text-app-muted transition hover:text-app-text"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg border border-app-border-glass bg-app-glass/60 px-4 py-2 text-xs font-mono-label uppercase tracking-wide text-app-text transition hover:border-white/20 hover:bg-white/5"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
