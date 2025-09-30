import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  { quote: "insert review here", name: "insert name here" },
  { quote: "insert review here", name: "insert name here" },
  { quote: "insert review here", name: "insert name here" },
];

export default function Testimonials({ inverse = false }: { inverse?: boolean }) {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="container py-16" aria-label="Testimonials">
      <div className="text-center mb-10">
        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${inverse ? "text-primary-foreground" : ""}`}>What Students Say</h2>
        <p className={`mt-2 ${inverse ? "text-primary-foreground/80" : "text-muted-foreground"}`}>Real stories from our community</p>
      </div>
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <p className="text-lg leading-relaxed">“{t.quote}”</p>
                  <p className="mt-6 font-semibold text-primary">{t.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
