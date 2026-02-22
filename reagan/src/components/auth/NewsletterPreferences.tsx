"use client";

import type { FieldErrors, UseFormRegister } from "react-hook-form";

export type NewsletterPreferenceKey =
  | "caseStudies"
  | "researchTrials"
  | "corporateUpdates"
  | "regulatoryAnnouncements";

export type NewsletterPreferencesValues = Record<
  NewsletterPreferenceKey,
  boolean
>;

export type NewsletterPreferencesProps = {
  register: UseFormRegister<any>;
  errors?: FieldErrors;
};

const preferences: Array<{
  key: NewsletterPreferenceKey;
  label: string;
  description: string;
}> = [
  {
    key: "caseStudies",
    label: "Patient Case Studies",
    description: "Clinical stories and patient-centered outcomes."
  },
  {
    key: "researchTrials",
    label: "Research & Clinical Trials",
    description: "Pipeline progress, study updates, and trial milestones."
  },
  {
    key: "corporateUpdates",
    label: "Corporate Updates",
    description: "Company news, partnerships, and leadership insights."
  },
  {
    key: "regulatoryAnnouncements",
    label: "Regulatory Announcements",
    description: "Compliance updates and regulatory communications."
  }
];

export default function NewsletterPreferences({
  register
}: NewsletterPreferencesProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
        Newsletter Preferences
      </legend>
      <div className="space-y-3">
        {preferences.map((pref) => (
          <label
            key={pref.key}
            className="flex items-start gap-3 rounded-lg border border-brand-soft bg-white px-4 py-3"
          >
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-brand-soft text-brand-primary focus:ring-brand-primary"
              {...register(`preferences.${pref.key}`)}
            />
            <span className="space-y-1">
              <span className="block text-sm font-semibold text-brand-navy">
                {pref.label}
              </span>
              <span className="block text-xs text-brand-neutral">
                {pref.description}
              </span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
