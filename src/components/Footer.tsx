const Footer = () => (
  <footer className="py-8 bg-primary text-primary-foreground">
    <div className="container text-center">
      <p className="font-display text-lg font-semibold">Nats Brownies</p>
      <p className="text-sm opacity-75 mt-1">Handcrafted with love ❤️</p>
      <p className="text-xs opacity-50 mt-4">© {new Date().getFullYear()} Nats Brownies. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
