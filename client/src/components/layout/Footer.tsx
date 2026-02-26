export function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-16 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-serif mb-6 text-background">Ikigai</h2>
          <p className="text-muted-foreground max-w-sm">
            A global boutique strategic advisory for founders, executives, and investors building at world scale.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs text-muted-foreground">Offices</h4>
          <ul className="space-y-3 text-sm">
            <li>San Francisco</li>
            <li>London</li>
            <li>Singapore</li>
            <li>Mumbai</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-widest text-xs text-muted-foreground">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            <li><a href="mailto:hello@ikigai.express" className="hover:text-primary transition-colors">hello@ikigai.express</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Ikigai Advisory. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}