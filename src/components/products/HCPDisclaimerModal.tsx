"use client";

import { useEffect, useRef } from "react";

type HcpModalProps = {
  isOpen: boolean;
  onSelect: (userType: "hcp" | "public") => void;
};

export default function HCPDisclaimerModal({
  isOpen,
  onSelect
}: HcpModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const hcpButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    hcpButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button"
      );
      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/60 backdrop-blur-sm"
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hcp-modal-title"
        aria-describedby="hcp-modal-description"
        className="w-full max-w-lg rounded-2xl border border-brand-soft bg-white p-8 shadow-lg"
      >
        <h2
          id="hcp-modal-title"
          className="text-2xl font-semibold text-brand-navy"
        >
          Healthcare Professional Notice
        </h2>
        <p
          id="hcp-modal-description"
          className="mt-3 text-sm text-brand-neutral"
        >
          This content contains regulated pharmaceutical information. Please
          confirm your role to continue.
        </p>
        <div className="mt-8 grid gap-3">
          <button
            ref={hcpButtonRef}
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            onClick={() => onSelect("hcp")}
          >
            I am a Healthcare Professional
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-brand-soft bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            onClick={() => onSelect("public")}
          >
            I am a Patient / General Public
          </button>
        </div>
      </div>
    </div>
  );
}
