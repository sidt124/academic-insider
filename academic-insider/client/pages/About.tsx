import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "name", role: "ceo", image: "/placeholder.svg" },
  { name: "name", role: "cfo", image: "/placeholder.svg" },
  { name: "name", role: "cmo", image: "/placeholder.svg" },
  { name: "name", role: "coo", image: "/placeholder.svg" },
  { name: "name", role: "cto", image: "/placeholder.svg" },
];

export default function About() {
  return (
    <main className="container py-12">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Us</h1>
        <h2 className="mt-6 text-2xl font-semibold">Our Story</h2>
        <p className="mt-3 text-muted-foreground">
          Add description here.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <Card key={m.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/2] bg-secondary">
                <img src={m.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">insert name</h3>
                <p className="text-sm text-muted-foreground">insert role</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
