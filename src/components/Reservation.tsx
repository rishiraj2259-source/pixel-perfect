import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/restaurant";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  request: string;
};

const emptyForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  request: "",
};

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

export function Reservation() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 7)
      nextErrors.phone = "Please enter a valid phone number.";
    if (!values.date) nextErrors.date = "Please choose a date.";
    if (!values.time) nextErrors.time = "Please choose a time.";
    if (!values.guests || Number(values.guests) < 1)
      nextErrors.guests = "Please enter the number of guests.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setValues(emptyForm);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Reservations"
          title="Book a table at HUNGRY KYA!"
          description="Tell us when you are coming and we will have the table ready. For parties over ten, give us a call."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Your full name"
                    value={values.name}
                    onChange={(event) => update("name", event.target.value)}
                  />
                </Field>

                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={(event) => update("email", event.target.value)}
                  />
                </Field>

                <Field id="phone" label="Phone" error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClass}
                    placeholder="+1 (503) 555-0148"
                    value={values.phone}
                    onChange={(event) => update("phone", event.target.value)}
                  />
                </Field>

                <Field id="guests" label="Number of Guests" error={errors.guests}>
                  <input
                    id="guests"
                    type="number"
                    min={1}
                    max={20}
                    className={fieldClass}
                    value={values.guests}
                    onChange={(event) => update("guests", event.target.value)}
                  />
                </Field>

                <Field id="date" label="Date" error={errors.date}>
                  <input
                    id="date"
                    type="date"
                    className={fieldClass}
                    value={values.date}
                    onChange={(event) => update("date", event.target.value)}
                  />
                </Field>

                <Field id="time" label="Time" error={errors.time}>
                  <input
                    id="time"
                    type="time"
                    className={fieldClass}
                    value={values.time}
                    onChange={(event) => update("time", event.target.value)}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field id="request" label="Special Request">
                    <textarea
                      id="request"
                      rows={4}
                      className={`${fieldClass} resize-y`}
                      placeholder="Birthday, allergies, seating preference…"
                      value={values.request}
                      onChange={(event) => update("request", event.target.value)}
                    />
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
              >
                Request a Table
              </button>

              {submitted ? (
                <p
                  role="status"
                  className="mt-5 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  Your table request has been received! Our team will confirm by phone or email
                  shortly.
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5 rounded-3xl bg-charcoal p-7 text-charcoal-foreground">
              <h3 className="text-2xl font-semibold">Visit us</h3>

              <InfoRow icon={<MapPin className="size-5" aria-hidden="true" />} label="Address">
                {contactInfo.address}
              </InfoRow>
              <InfoRow icon={<Phone className="size-5" aria-hidden="true" />} label="Phone">
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary">
                  {contactInfo.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="size-5" aria-hidden="true" />} label="Email">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="size-5" aria-hidden="true" />} label="Opening hours">
                <ul className="space-y-1">
                  {contactInfo.hours.map((entry) => (
                    <li key={entry.days} className="flex flex-wrap gap-x-2">
                      <span>{entry.days}:</span>
                      <span className="text-charcoal-foreground/70">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-t border-charcoal-foreground/10 pt-5 first-of-type:border-none first-of-type:pt-0">
      <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-charcoal-foreground/85">{children}</div>
      </div>
    </div>
  );
}
