import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    title: "STEM Excellence Scholarship",
    description:
      "For students demonstrating outstanding achievement and leadership in STEM fields.",
  },
  {
    title: "Community Impact Grant",
    description:
      "Supports students leading meaningful service projects in their communities.",
  },
  {
    title: "First-Gen Scholar Award",
    description:
      "Resources and funding for first-generation college-bound students.",
  },
];

export default function Scholarships() {
  return (
    <main className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Scholarships</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Description here.
        </p>
      </div>
      <div className="grid gap-4">
        {scholarships.map((s) => (
          <Card key={s.title} className="w-full">
            <CardContent className="p-6 flex items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground max-w-3xl">{s.description}</p>
              </div>
              <Button asChild>
                <a href="#" onClick={(e) => e.preventDefault()} aria-disabled>
                  Open Form
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
