import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const activities = [
  {
    title: "Debate Club",
    description:
      "Sharpen critical thinking and public speaking through weekly debates and tournaments.",
    image: "/placeholder.svg",
  },
  {
    title: "Robotics Club",
    description:
      "Build autonomous robots and compete in regional challenges while learning engineering fundamentals.",
    image: "/placeholder.svg",
  },
  {
    title: "Volunteer Initiative",
    description:
      "Create impact with community service projects—plan, lead, and track your volunteer hours.",
    image: "/placeholder.svg",
  },
  {
    title: "Science Fair Project",
    description:
      "Design experiments, analyze results, and present findings in a compelling project format.",
    image: "/placeholder.svg",
  },
  {
    title: "School Newspaper",
    description:
      "Report stories, refine writing skills, and collaborate on a monthly publication.",
    image: "/placeholder.svg",
  },
];

export default function Activities() {
  const clubs = activities.slice(0, 3);
  const projects = activities.slice(3);
  return (
    <main className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Activities</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Description here.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Clubs</h2>
      <div className="grid gap-5 mb-10">
        {clubs.map((a) => (
          <Card key={a.title} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 shrink-0 bg-secondary">
                  <img src={a.image} alt="" className="h-40 md:h-full w-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
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

      <h2 className="text-2xl font-semibold mb-4">Passion Projects</h2>
      <div className="grid gap-5">
        {projects.map((a) => (
          <Card key={a.title} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-56 shrink-0 bg-secondary">
                  <img src={a.image} alt="" className="h-40 md:h-full w-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
