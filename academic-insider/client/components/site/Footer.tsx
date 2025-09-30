export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F6bfb46ee811b41269cadc79ecd490073%2Fc49efa29c6ac4200a40aa06d57d6bea9?format=webp&width=128" alt="Academic Insider logo" className="h-8 w-8 rounded-md object-cover" />
            Academic Insider
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Providing high school students with the knowledge and tools they need to excel.
          </p>
        </div>
        <div className="md:justify-self-center">
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/tools" className="hover:text-primary">Tools</a></li>
            <li><a href="/activities" className="hover:text-primary">Activities</a></li>
            <li><a href="/competitions" className="hover:text-primary">Competitions</a></li>
            <li><a href="/scholarships" className="hover:text-primary">Scholarships</a></li>
          </ul>
        </div>
        <div className="md:justify-self-end">
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">Reach us at: hello@academicinsider.org</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {year} Academic Insider. All rights reserved.</p>
          <p>Helping students succeed.</p>
        </div>
      </div>
    </footer>
  );
}
