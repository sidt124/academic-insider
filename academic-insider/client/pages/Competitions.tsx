import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const competitions = [
  {
    title: "Science Olympiad",
    description:
      "Compete across STEM events from anatomy to robotics with a collaborative team.",
    image: "/placeholder.svg",
  },
  {
    title: "Math Challenge",
    description:
      "Sharpen problem-solving with AMC/AIME style contests and practice sessions.",
    image: "/placeholder.svg",
  },
  {
    title: "Hackathon",
    description:
      "Build software projects in 24–48 hours and pitch to judges for prizes.",
    image: "/placeholder.svg",
  },
];

export default function Competitions() {
  return (
    <main className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Competitions</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Description here.
        </p>
      </div>
      <div className="grid gap-5">
        {competitions.map((c) => (
          <Card key={c.title} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 shrink-0 bg-secondary">
                  <img src={c.image} alt="" className="h-40 md:h-full w-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <a href="#" onClick={(e) => e.preventDefault()} aria-disabled>
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
