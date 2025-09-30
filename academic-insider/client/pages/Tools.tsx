import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "Career Path",
    description:
      "Insert desc here",
  },
  {
    title: "College Application Review",
    description:
      "Insert desc here",
  },
  {
    title: "Notes",
    description:
      "Insert desc here",
  },
  {
    title: "Academic Insider Course",
    description:
      "Insert desc here",
  },
  {
    title: "Scholarships",
    description:
      "Insert desc here",
  },
];

export default function Tools() {
  return (
    <main className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tools</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Description here.
        </p>
      </div>
      <div className="grid gap-4">
        {tools.map((t) => (
          <Card key={t.title} className="w-full">
            <CardContent className="p-6 flex items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground max-w-3xl">{t.description}</p>
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
