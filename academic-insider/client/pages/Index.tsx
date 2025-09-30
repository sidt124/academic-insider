import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/sections/Testimonials";

export default function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F6bfb46ee811b41269cadc79ecd490073%2F8b69e35c29f747cea33ea22167078c60?format=webp&width=1600"
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "hsla(var(--background),0.6)" }}
          />
        </div>
        <div className="container py-24 md:py-32 flex items-center justify-center text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Academic Insider
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Our mission is providing high school students with the knowledge and tools they need to excel. Learn smarter, build a standout profile, and apply confidently.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/tools" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95">Get Started</a>
              <a href="#subscribe" className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">Subscribe</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Unlock Your Full Potential With Our Support</h2>
            <p className="mt-2 opacity-80">Actionable guidance tailored for high school success</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Study Tips"
              description="Evidence-based strategies to study smarter, not longer."
              descClassName="opacity-80"
              cardClassName="bg-white text-foreground"
            />
            <FeatureCard
              title="Tutoring"
              description="Personalized 1:1 and group sessions for the subjects that matter most."
              descClassName="opacity-80"
              cardClassName="bg-white text-foreground"
            />
            <FeatureCard
              title="Extracurriculars"
              description="Find, plan, and scale clubs and passion projects that stand out."
              descClassName="opacity-80"
              cardClassName="bg-white text-foreground"
            />
            <FeatureCard
              title="College Application Guidance"
              description="Profiles, essays, and timelines—apply confidently with expert support."
              descClassName="opacity-80"
              cardClassName="bg-white text-foreground"
            />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="rounded-2xl border bg-card p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-extrabold">Our Impact</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Stat label="weekly newsletter readers" value="500+" />
            <Stat label="social media impressions" value="7 million+" />
            <Stat label="opportunities" value="300+" />
          </div>
        </div>
      </section>

      <section className="py-6 bg-primary text-primary-foreground">
        <Testimonials inverse />
      </section>

      <section id="subscribe" className="container pt-16 pb-20">
        <div className="rounded-2xl border bg-gradient-to-tr from-primary/5 via-accent/5 to-background p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Subscribe to our newsletter</h3>
          <p className="mt-2 text-muted-foreground">Get weekly opportunities, study tips, and guidance in your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  cardClassName,
  descClassName,
}: {
  title: string;
  description: string;
  cardClassName?: string;
  descClassName?: string;
}) {
  return (
    <Card className={cardClassName}>
      <CardContent className="p-6">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className={`text-sm mt-1 ${descClassName ?? "text-muted-foreground"}`}>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-background p-6 text-center">
      <div className="text-3xl font-extrabold text-primary">{value}</div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12"
        aria-label="Email address"
      />
      <Button type="submit" className="h-12 px-6">Subscribe</Button>
      {submitted && (
        <p className="sm:ml-3 text-sm text-green-600">Thanks! You're subscribed.</p>
      )}
    </form>
  );
}
