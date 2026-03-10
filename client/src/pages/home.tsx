import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Truck,
  Shield,
  Clock,
  DollarSign,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Container,
  Wrench,
  Package,
  Menu,
  X,
  Star,
  Target,
  Eye,
  Check,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Fleet" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3" data-testid="logo-link">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-lg">N</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-foreground">Noor Ul Hana</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Transport LLC</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="nav-cta"
              className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium text-center mt-2"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(265_70%_60%_/_0.08)_0%,_transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <motion.div style={{ opacity, y }} className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-primary/80" data-testid="hero-badge">Dubai, UAE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight mb-8"
          data-testid="hero-title"
        >
          <span className="block text-foreground">Delivering</span>
          <span className="block text-gradient italic mt-2">Reliability.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-light"
          data-testid="hero-subtitle"
        >
          Premium logistics and transportation solutions moving your business forward across the UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            data-testid="hero-cta-services"
            className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300"
          >
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            data-testid="hero-cta-contact"
            className="flex items-center gap-3 border border-white/10 text-foreground px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/5 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center" data-testid={`hero-stat-${stat.label.toLowerCase().replace(" ", "-")}`}>
              <p className="text-2xl sm:text-3xl font-serif text-gradient font-semibold">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronRight size={16} className="rotate-90" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary/70">Who We Are</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-8"
              data-testid="about-title"
            >
              A Decade of{" "}
              <span className="text-gradient italic block">Trusted Transport</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground leading-relaxed mb-6 text-base"
              data-testid="about-description"
            >
              Noor Ul Hana Transport LLC is a UAE-based logistics and transportation company providing reliable, efficient, and cost-effective transport solutions across various industries. With a strong commitment to professionalism and timely delivery, we ensure safe movement of goods, construction materials, and commercial cargo across the UAE.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-muted-foreground leading-relaxed text-base"
            >
              Our experienced team and well-maintained fleet allow us to handle a wide range of transportation requirements including container transport, construction logistics, and general material movement.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} custom={0} className="glass rounded-2xl p-8" data-testid="mission-card">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To provide reliable and cost-effective transportation solutions while ensuring safety, efficiency, and complete customer satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="glass rounded-2xl p-8" data-testid="vision-card">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Eye size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To become a trusted logistics and transportation partner in the UAE by delivering consistent service quality and innovative transport solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Package,
    title: "Sand, Aggregate & Raw Materials",
    description: "Reliable delivery of construction and industrial materials across the UAE.",
  },
  {
    icon: Truck,
    title: "Light & Heavy Truck Cargo",
    description: "Versatile transport of goods using our fleet of light and heavy trucks.",
  },
  {
    icon: Container,
    title: "Container Transportation",
    description: "Safe movement of containers between ports, warehouses, and project sites.",
  },
  {
    icon: Wrench,
    title: "Equipment & Machinery",
    description: "Specialized trailers for moving heavy equipment and industrial machinery.",
  },
  {
    icon: Shield,
    title: "Construction Logistics",
    description: "Dedicated transport solutions tailored for construction projects and materials.",
  },
  {
    icon: Package,
    title: "Flatbed & Trailer Transport",
    description: "Transportation of heavy equipment, machinery, and oversized cargo.",
  },
  {
    icon: Truck,
    title: "Fodder & Animal Feed",
    description: "Safe and timely transportation of animal feed and fodder products.",
  },
  {
    icon: Package,
    title: "Loose Cargo Transport",
    description: "Efficient handling and delivery of loose cargo for commercial clients.",
  },
];

function Services() {
  return (
    <section id="services" className="py-32 relative" data-testid="services-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(265_70%_60%_/_0.05)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} custom={0} className="text-[11px] uppercase tracking-[0.3em] text-primary/70">
            What We Offer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mt-4"
            data-testid="services-title"
          >
            Our <span className="text-gradient italic">Services</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 cursor-default"
              data-testid={`service-card-${i}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                <service.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-2 leading-snug">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const fleet = [
  { name: "Flatbed Trailers", sizes: "40, 45, 50 ft", status: "Available Now" },
  { name: "Curtain Side Trailers", sizes: "Multiple sizes", status: "Available Now" },
  { name: "Container Transport Trailers", sizes: "20 & 40 ft", status: "Coming Soon" },
  { name: "Heavy Equipment Vehicles", sizes: "Various", status: "Coming Soon" },
  { name: "Staff Buses", sizes: "Multiple capacities", status: "Coming Soon" },
];

function Fleet() {
  return (
    <section id="fleet" className="py-32 relative" data-testid="fleet-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} custom={0} className="text-[11px] uppercase tracking-[0.3em] text-primary/70">
              Our Capabilities
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mt-4 mb-6"
              data-testid="fleet-title"
            >
              Our <span className="text-gradient italic">Fleet</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground leading-relaxed text-base max-w-md"
            >
              Well-maintained vehicles and trailers ready to handle any transportation requirement across the UAE.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-3"
          >
            {fleet.map((item, i) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                custom={i}
                className="group flex items-center justify-between glass rounded-xl px-6 py-5 hover:bg-white/[0.06] transition-all duration-500"
                data-testid={`fleet-item-${i}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.sizes}</p>
                  </div>
                </div>
                <span
                  className={`text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
                    item.status === "Available Now"
                      ? "text-violet-400 bg-violet-400/10 border border-violet-400/20"
                      : "text-muted-foreground bg-white/5 border border-white/10"
                  }`}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Star,
    title: "Experience",
    description: "Over a decade of reliable service across the UAE.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Ensuring your cargo reaches on schedule, every time.",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Competitive solutions without compromising quality.",
  },
  {
    icon: Shield,
    title: "Commitment",
    description: "Dedicated to excellence and customer satisfaction.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="py-32 relative" data-testid="why-us-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(265_70%_60%_/_0.05)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} custom={0} className="text-[11px] uppercase tracking-[0.3em] text-primary/70">
            Our Advantage
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mt-4"
            data-testid="why-us-title"
          >
            Why Choose <span className="text-gradient italic">Noor Ul Hana</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              custom={i}
              className="text-center group"
              data-testid={`reason-card-${i}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-500">
                <reason.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} custom={0} className="text-[11px] uppercase tracking-[0.3em] text-primary/70">
              Get in Touch
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mt-4 mb-8"
              data-testid="contact-title"
            >
              Let's <span className="text-gradient italic">Connect</span>
            </motion.h2>

            <motion.div variants={fadeUp} custom={2} className="space-y-6">
              <a
                href="tel:+971553423828"
                data-testid="contact-phone"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium mt-0.5">+971 55 342 3828</p>
                </div>
              </a>

              <a
                href="mailto:info@noorulhana.com"
                data-testid="contact-email"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium mt-0.5">info@noorulhana.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4" data-testid="contact-address">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Address</p>
                  <p className="text-sm font-medium mt-0.5">Ras Al Khor Industrial Second,<br />Dubai, United Arab Emirates</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.form
              variants={fadeUp}
              custom={0}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
              data-testid="contact-form"
            >
              <div>
                <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                  placeholder="Enter your name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                  placeholder="Enter your email"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                  placeholder="Tell us about your transport needs"
                  data-testid="input-message"
                />
              </div>
              <button
                type="submit"
                data-testid="button-submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <Check size={16} />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-sm">N</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Noor Ul Hana Transport LLC
            </p>
          </div>
          <div className="flex items-center gap-8">
            {["About", "Services", "Fleet", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                data-testid={`footer-link-${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
