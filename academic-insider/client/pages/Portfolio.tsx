import { useEffect } from "react";

const embeds = [
  "https://www.instagram.com/p/CwQf7n1O7xU/",
  "https://www.instagram.com/p/CvHc1P2r3zB/",
  "https://www.instagram.com/reel/Cx9n2YtA1kQ/",
  "https://www.instagram.com/p/CuY8Tm0M2fL/",
  "https://www.instagram.com/reel/Cy3AbcdE4Fg/",
];

export default function Portfolio() {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
      return;
    }
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
    return () => {
      try {
        document.body.removeChild(s);
      } catch {}
    };
  }, []);

  return (
    <main className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Portfolio</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">Showcase of our social content. Embeds below can be replaced with your own Instagram posts or reels.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {embeds.map((url) => (
          <blockquote
            key={url}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{ background: "#FFF", border: 0, margin: 0, padding: 0 }}
          />
        ))}
      </div>
    </main>
  );
}
