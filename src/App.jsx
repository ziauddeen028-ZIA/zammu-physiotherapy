import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, MapPin, Clock, Star, ChevronRight,
  ArrowRight, CheckCircle, Heart, Award, Users, Activity,
  Zap, Shield, Stethoscope, Brain, Baby, User, Bone,
  Dumbbell, MoveHorizontal, RefreshCw, MessageCircle, Calendar, Wand2, Sparkles, Leaf, Plus,
} from "lucide-react";

import myImage from './assets/zammu.png';
import logo from './assets/zammu logo.png';
import img1 from "./assets/img1.jpeg"
import img2 from "./assets/img2.jpeg"
import img3 from "./assets/img3.jpeg"
import img4 from "./assets/img4.jpeg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"

const images = [
  { src: img1, alt: "Zammu Physio Care" },
  { src: img2, alt: "Physiotherapy Treatment" },
  { src: img3, alt: "Clinic Interior" },
  { src: img4, alt: "Patient Care" },
  { src: img5, alt: "Rehabilitation Therapy" },
  { src: img6, alt: "Exercise Therapy" },
]

/* ─────────────────────────────────────────
   DESIGN TOKENS
   Typography scale anchored to readability:
   Body copy  → 15–16px / lh 1.75
   Small copy → 13–14px / lh 1.7
   Labels     → 12px    / lh 1.5
   ───────────────────────────────────────── */
const C = {
  primary: "#7FAF9B",
  dark: "#4A7A6D",   // slightly deeper for better contrast on white
  mint: "#BFD8CF",
  bg: "#F7FBF9",
  section: "#EEF6F2",
  border: "#C8DDD6",   // slightly darker border for visibility
  text: "#1E2D28",   // deepened from #2E3A36 → proper dark
  sub: "#3D5249",   // mid-dark for subheadings
  muted: "#546860",   // lifted from #6B7B75 — far more readable
  faint: "#7A9690",   // for truly secondary labels only
  white: "#FFFFFF",
  accent: "#A8C5B8",
  paleGold: "#D4A96A",   // deeper gold for star contrast
  statsBg: "#3D6B5E",   // deeper stats bar
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

function Section({ children, className = "", id = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      id={id} ref={ref}
      variants={stagger} initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
function GalleryItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative overflow-hidden rounded-xl group cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-56 md:h-64 object-cover transition-all duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
    </motion.div>
  )
}

function Gallery() {
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? images : images.slice(0, 6)

  return (
    <section id="gallery" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14 mt-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">
            Inside Zammu Physio Care
          </p>

          <h2 className="section-title font-heading">
            <span className="serif text-[2rem] lg:text-[2.6rem] leading-[1.2] mb-4">Our Gallery</span>
          </h2>

          <p className="text-textLight text-sm mt-2 font-sans">
            Take a look inside our modern physiotherapy clinic and treatment spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-3 pb-10">
          {visibleImages.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>


      </div>
    </section>
  )
}

/* ─── DATA ─── */
const NAV = ["Home", "Services", "About", "Process", "Testimonials", "Contact"];

const SERVICES = [
  { icon: MoveHorizontal, title: "Cervical Spondylosis", desc: "Targeted neck therapy to restore full cervical range and banish chronic stiffness.", tag: "Spine" },
  { icon: Activity, title: "Neck & Shoulder Pain", desc: "Precise manual therapy for acute and chronic neck-shoulder discomfort.", tag: "Pain Relief" },
  { icon: Dumbbell, title: "Frozen Shoulder", desc: "Gentle progressive rehab for adhesive capsulitis and full shoulder freedom.", tag: "Mobility" },
  { icon: Zap, title: "Elbow & Wrist Pain", desc: "Rehabilitation for tennis elbow, carpal tunnel, and repetitive strain conditions.", tag: "Upper Limb" },
  { icon: Bone, title: "Disc Problems", desc: "Advanced therapy for disc herniation, bulges, and degenerative spinal conditions.", tag: "Spine" },
  { icon: MoveHorizontal, title: "Knee & Heel Pain", desc: "Biomechanical analysis and personalised treatment for knee and heel conditions.", tag: "Lower Limb" },
  { icon: Heart, title: "Arthritis Care", desc: "Evidence-based management for osteo and rheumatoid arthritis — less pain, more movement.", tag: "Chronic Care" },
  { icon: RefreshCw, title: "Pre & Post Surgery Rehab", desc: "Structured recovery programs before and after joint and spinal surgeries.", tag: "Rehab" },
  { icon: Brain, title: "Neuro Rehab (Stroke)", desc: "Specialised neurological rehabilitation for stroke recovery and motor restoration.", tag: "Neuro" },
  { icon: Wand2, title: "Bell's Palsy", desc: "Focused facial nerve therapy to restore symmetry and muscle function.", tag: "Neuro" },
  { icon: Baby, title: "Pediatrics Care", desc: "Gentle, child-friendly therapy for CP, delayed development, and orthopaedic needs.", tag: "Paeds" },
  { icon: User, title: "Women's Health & Fitness", desc: "Pelvic floor therapy, prenatal care, postnatal rehab, and women's wellness programs.", tag: "Women" },
];

const HIGHLIGHTS = [
  { icon: Users, label: "Physiotherapy for All Ages", desc: "Tailored expert care from infants to seniors — every body, every stage." },
  { icon: Award, label: "Best Quality Treatment", desc: "Evidence-based protocols updated with the latest clinical modalities." },
  { icon: Shield, label: "Chronic Pain Management", desc: "Long-term, personalised strategies designed to break the pain cycle." },
  { icon: Dumbbell, label: "Strength & Mobility Training", desc: "Rebuild strength, balance, and functional movement at every level." },
  { icon: Leaf, label: "Home Advice Included", desc: "Every patient receives personalised home programs for lasting recovery." },
];

const STEPS = [
  { n: "01", title: "Initial Consultation", desc: "A thorough 1:1 assessment of your condition, history, and wellness goals — no rush, no shortcuts.", icon: MessageCircle },
  { n: "02", title: "Custom Care Plan", desc: "A bespoke, evidence-based treatment protocol crafted precisely for your body and lifestyle.", icon: Stethoscope },
  { n: "03", title: "Active Therapy", desc: "Hands-on sessions blending manual therapy, therapeutic exercise, and advanced clinical modalities.", icon: Activity },
  { n: "04", title: "Home Wellness", desc: "Personalised home programs and lifestyle guidance to keep you moving and pain-free long after discharge.", icon: Heart },
];

const REVIEWS = [
  { name: "Priya Menon", sub: "Pallavaram Resident", body: "My chronic neck pain is completely gone after just 6 sessions. The personalised care here is truly unmatched — I feel like a different person.", stars: 5, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face" },
  { name: "Rajan Krishnamurthy", sub: "Software Engineer, Chennai", body: "Recovered from a disc problem in 8 weeks. Incredibly skilled therapists, a wonderfully calm environment, and results that genuinely last.", stars: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
  { name: "Anitha Selvam", sub: "Teacher, Pallavaram", body: "Post-surgery rehab after my knee replacement was seamless. The warmth and attention from the entire team made recovery faster than I imagined.", stars: 5, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face" },
];

const STATS = [
  { v: "5+ years", l: "Experience" },
  { v: "5,000+", l: "Patients Treated" },
  { v: "All Ages", l: "Patients Welcomed" },
  { v: "Ortho and Neuro", l: "Specialisations" },
];

/* ─── SMALL COMPONENTS ─── */
function Badge({ children, soft }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11.5px] font-700 tracking-[0.12em] uppercase leading-none ${soft
      ? "bg-[#EEF6F2] text-[#3D6B5E] border border-[#C8DDD6]"
      : "bg-[#7FAF9B]/18 text-[#3D6B5E] border border-[#7FAF9B]/35"
      }`} style={{ fontWeight: 700, letterSpacing: "0.1em" }}>
      {children}
    </span>
  );
}

/* Primary button — deep sage, white text, readable at all sizes */
function PrimaryBtn({ children, href, className = "", onClick }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-semibold leading-none text-white transition-all duration-250 shadow hover:shadow-md hover:-translate-y-px active:translate-y-0 ${className}`;
  const style = { background: `linear-gradient(135deg, ${C.primary}, ${C.dark})` };
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button className={cls} style={style} onClick={onClick}>{children}</button>;
}

/* Ghost button — white bg, visible sage border, sage text */
function GhostBtn({ children, href, className = "" }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[14px] font-semibold leading-none transition-all duration-250 hover:-translate-y-px ${className}`;
  const style = { color: C.dark, border: `1.5px solid ${C.dark}40` };
  const hoverStyle = { color: C.dark, border: `1.5px solid ${C.dark}` };
  if (href) return (
    <a href={href} className={cls} style={style}
      onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={e => Object.assign(e.currentTarget.style, style)}>
      {children}
    </a>
  );
  return <button className={cls} style={style}>{children}</button>;
}

/* ─── APP ─── */
export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const text = `
Hello Zammu Physio Care,

New Appointment Request

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Condition: ${formData.message}

Please contact me.
  `;

    const whatsappURL = `https://wa.me/916382273687?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  // Scroll listener
  if (typeof window !== "undefined") {
    const tracked = useRef(false);
    if (!tracked.current) {
      tracked.current = true;
      window.addEventListener("scroll", () => setScrolled(window.scrollY > 50), { passive: true });
    }
  }
  if (showIntro) {
    return (
      <div
        className="min-h-screen relative overflow-hidden flex items-center justify-center px-5 sm:px-8 lg:px-10 py-16"
        style={{
          background:
            "linear-gradient(135deg, #f7fbf9 0%, #e5f3ed 45%, #cfe5db 100%)",
        }}
      >
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full bg-[#7FAF9B]/30 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Floating Card Left */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="hidden xl:block absolute left-20 top-40"
        >
          <div
            className="backdrop-blur-xl rounded-3xl p-5"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <div className="text-4xl mb-2">🩺</div>

            <p
              className="text-sm font-semibold"
              style={{ color: C.text }}
            >
              Expert Care
            </p>
          </div>
        </motion.div>

        {/* Floating Card Right */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="hidden xl:block absolute right-20 bottom-40"
        >
          <div
            className="backdrop-blur-xl rounded-3xl p-5"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <div className="text-4xl mb-2">💪</div>

            <p
              className="text-sm font-semibold"
              style={{ color: C.text }}
            >
              Pain Recovery
            </p>
          </div>
        </motion.div>
        {/* Floating Card Top Right */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="hidden xl:block absolute right-32 top-28"
        >
          <div
            className="backdrop-blur-xl rounded-3xl p-5"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <div className="text-4xl mb-2">🏃</div>

            <p
              className="text-sm font-semibold"
              style={{ color: C.text }}
            >
              Better Mobility
            </p>
          </div>
        </motion.div>

        {/* Floating Card Bottom Left */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="hidden xl:block absolute left-28 bottom-32"
        >
          <div
            className="backdrop-blur-xl rounded-3xl p-5"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <div className="text-4xl mb-2">🦴</div>

            <p
              className="text-sm font-semibold"
              style={{ color: C.text }}
            >
              Joint Therapy
            </p>
          </div>
        </motion.div>

        {/* Floating Card Center Right */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="hidden 2xl:block absolute right-10 top-1/2"
        >
          <div
            className="backdrop-blur-xl rounded-3xl p-5"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <div className="text-4xl mb-2">⚡</div>

            <p
              className="text-sm font-semibold"
              style={{ color: C.text }}
            >
              Fast Recovery
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-4xl text-center"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            src={logo}
            alt="Zammu Physio Care"
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain mx-auto mb-2 sm:mb-3"
          />
          <motion.h2
            variants={fadeUp}
            className="italic text-[1rem] sm:text-[1.8rem] lg:text-[2.5rem] leading-none tracking-[-0.03em] mb-2 sm:mb-4 font-[300] sm:font-[700] lg:font-[500]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              color: C.text,
            }}
          >
            Zammu Physio Care
          </motion.h2>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: C.dark }}
            />

            <span
              className="text-[10px] sm:text-[11px] lg:text-[12px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: C.dark }}
            >
              Caring is our Passion
            </span>
          </div>

          {/* Heading */}
          <h1
            className="serif text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[0.95] tracking-tight"
            style={{
              color: C.text,
              fontWeight: 600,
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            Heal <br />
            Recover <br />
            Move Freely
          </h1>

          {/* Paragraph */}
          <p
            className="text-[15px] sm:text-[16px] lg:text-[18px] leading-7 max-w-xl mx-auto mt-5 mb-9 px-2"
            style={{ color: C.sub }}
          >
            Premium physiotherapy care designed to relieve pain,
            restore movement, and improve your quality of life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setShowIntro(false)}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white text-[15px] font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.dark})`,
                boxShadow: `0 14px 40px ${C.primary}55`,
              }}
            >
              Explore Website →
            </button>

            <a
              href="tel:6382273687"
              className="
    w-full sm:w-auto
    px-6 sm:px-8
    py-3.5 sm:py-4
    rounded-full
    text-[14px] sm:text-[15px]
    font-medium sm:font-semibold
    transition-all duration-300
    hover:scale-105
    flex items-center justify-center gap-2
  "
              style={{
                background: "rgba(255,255,255,0.72)",
                color: C.text,
                border: `1px solid ${C.border}`,
                backdropFilter: "blur(12px)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
              }}
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className="overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        ::placeholder { color: #7A9690; opacity: 1; }
      `}</style>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(247,251,249,0.97)" : "transparent",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[74px]">

          {/* Logo */}


          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowIntro(true)}
            className="flex items-center gap-3"
          >
            {/* Logo Image */}
            <img
              src={logo}
              alt="Zammu Physio Care"
              className="w-11 h-11 object-contain rounded-xl"
            />

            <div className="leading-tight">
              <div
                className="text-[16px] font-bold tracking-tight"
                style={{ color: C.text }}
              >
                Zammu <span style={{ color: C.dark }}>Physio</span> Care
              </div>

              <div
                className="text-[10px] font-medium tracking-[0.18em] uppercase"
                style={{ color: C.faint, marginTop: 1 }}
              >
                Caring is our Passion
              </div>
            </div>
          </motion.div>

          {/* Nav links — darker, heavier */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="hidden lg:flex items-center gap-8">
            {NAV.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[14px] font-semibold tracking-wide transition-colors duration-200"
                style={{ color: C.sub }}
                onMouseEnter={e => e.target.style.color = C.dark}
                onMouseLeave={e => e.target.style.color = C.sub}>
                {l}
              </a>
            ))}
          </motion.div>

          {/* Right CTA */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="hidden lg:flex items-center gap-4">
            <a href="tel:6382273687" className="flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: C.dark }}>
              <Phone size={14} strokeWidth={2.5} /> 6382273687
            </a>
            <PrimaryBtn href="tel:6382273687"><Calendar size={14} strokeWidth={2.5} /> Book Now</PrimaryBtn>
          </motion.div>

          <button onClick={() => setOpen(p => !p)} className="lg:hidden p-2 rounded-lg" style={{ color: C.text }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="lg:hidden px-5 py-5 space-y-1 border-t"
              style={{ borderColor: C.border, background: "rgba(247,251,249,0.99)" }}>
              {NAV.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="flex items-center py-3 text-[15px] font-semibold border-b"
                  style={{ color: C.sub, borderColor: C.section }}>
                  {l}
                </a>
              ))}
              <div className="pt-3">
                <PrimaryBtn href="tel:6382273687" className="w-full py-4 text-[15px]">
                  <Phone size={15} /> Call 63822 73687
                </PrimaryBtn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section id="home" className="min-h-screen pt-[74px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 70% 60% at 80% 20%, #BFD8CF2E 0%, transparent 60%),
                       radial-gradient(ellipse 50% 50% at 10% 80%, #EDD9C02A 0%, transparent 55%),
                       linear-gradient(160deg, #F7FBF9 0%, #EEF6F2 100%)`
        }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 w-full py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">

            {/* LEFT */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="mb-7">
                <Badge><Sparkles size={11} strokeWidth={2.5} /> Pallavaram, Chennai – 600 043</Badge>
              </motion.div>

              {/* H1 — bold serif, strong contrast */}
              <motion.h1 variants={fadeUp}
                className="serif text-[2.8rem] sm:text-[3.3rem] lg:text-[3.7rem] leading-[1.1] mb-6"
                style={{ color: C.text, fontWeight: 600 }}>
                Restore<br />
                <span className="italic" style={{ color: C.dark }}>Movement.</span><br />
                Relieve Pain.
              </motion.h1>

              {/* Lead paragraph — larger, darker, comfortable */}
              <motion.p variants={fadeUp}
                className="text-[16.5px] leading-[1.78] mb-4 max-w-[440px]"
                style={{ color: C.muted, fontWeight: 400 }}>
                If you are suffering from pain — book an appointment today to get the{" "}
                <span style={{ color: C.text, fontWeight: 600 }}>best & expert treatment</span> you deserve.
              </motion.p>

              {/* Tagline — readable green, not too faint */}
              <motion.p variants={fadeUp}
                className="text-[14px] italic font-semibold mb-10"
                style={{ color: C.dark }}>
                "We treat all types of musculoskeletal and neurological conditions"
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
                <PrimaryBtn href="tel:6382273687" className="px-7 py-4 text-[15px]"><Phone size={15} strokeWidth={2.5} /> Call 63822 73687</PrimaryBtn>
                <GhostBtn href="#contact" className="px-7 py-4 text-[15px]"><Calendar size={15} strokeWidth={2} /> Book Appointment</GhostBtn>
              </motion.div>

              {/* Hero stats */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-7"
              >
                {STATS.slice(0, 4).map((s, i) => (
                  <div key={i} className="pl-4 lg:pl-7 border-l" style={{ borderColor: C.border }}>
                    <div
                      className="text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] font-bold leading-tight"
                      style={{ color: C.dark }}
                    >
                      {s.v}
                    </div>
                    <div
                      className="text-[12px] sm:text-[13px] font-medium mt-1"
                      style={{ color: C.faint }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — image + floating cards */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="relative">
              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] opacity-35 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${C.mint}66, #EDD9C033)` }} />

                <div className="relative rounded-[2rem] overflow-hidden"
                  style={{ aspectRatio: "4/5", boxShadow: `0 24px 64px ${C.mint}70` }}>
                  <img
                    src={myImage}
                    alt="Physiotherapy at Zammu Physio Care"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(1.02) saturate(0.92)",
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,45,40,0.12) 0%, transparent 50%)" }} />
                </div>

                {/* Float card — Recovery */}


                {/* Float card — Location */}
                <motion.div
                  animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute left-2 bottom-5 rounded-2xl p-4"
                  style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", border: `1.5px solid ${C.border}`, boxShadow: "0 8px 32px rgba(94,139,126,0.18)", maxWidth: 188 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${C.primary}20` }}>
                      <MapPin size={12} strokeWidth={2.5} style={{ color: C.dark }} />
                    </div>
                    <div className="text-[12px] font-bold" style={{ color: C.text }}>Visit Us</div>
                  </div>
                  <div className="text-[12px] font-semibold mb-0.5" style={{ color: C.dark }}>Zammu Physio Care</div>
                  <div className="text-[11.5px] leading-snug" style={{ color: C.muted }}>No.14, Kumaraswamy St,<br />Pallavaram, Chennai 600 043</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg, ${C.statsBg}, ${C.dark})` }} className="py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Section className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-[1.9rem] lg:text-[2.1rem] font-bold text-white leading-tight mb-1.5">{s.v}</div>
                {/* Stat label — lifted opacity for legibility */}
                <div className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.78)" }}>{s.l}</div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32" style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Image side */}
            <Section>
              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] opacity-28 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${C.mint}, #EDD9C033)` }} />
                <div className="relative rounded-[2rem] overflow-hidden"
                  style={{ aspectRatio: "4/5", boxShadow: `0 16px 56px ${C.mint}70` }}>
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop&crop=center"
                    alt="About Zammu Physio Care" className="w-full h-full object-cover"
                    style={{ filter: "brightness(1.03) saturate(0.88)" }} />
                </div>
                {/* Accreditation card */}
                <div className="absolute bottom-8 left-6 right-6 rounded-2xl p-4 flex items-center gap-3.5"
                  style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)", border: `1.5px solid ${C.border}`, boxShadow: "0 8px 32px rgba(94,139,126,0.14)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.dark})` }}>
                    <Award size={18} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold mb-0.5" style={{ color: C.text }}>Certified Physiotherapy Clinic</div>
                    <div className="text-[11.5px]" style={{ color: C.muted }}>Trusted by thousands in Pallavaram &amp; Chennai</div>
                  </div>
                </div>
              </motion.div>
            </Section>

            {/* Content side */}
            <Section>
              <motion.div variants={fadeUp} className="mb-7">
                <Badge soft>About Us</Badge>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="serif text-[2.1rem] lg:text-[2.6rem] leading-[1.18] mb-5"
                style={{ color: C.text, fontWeight: 600 }}
              >
                Caring is Our
                <br />
                <span className="italic" style={{ color: C.dark }}>
                  Passion
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[15.5px] leading-[1.78] mb-4"
                style={{ color: C.muted }}
              >
                At Zammu Physio Care, we believe every patient deserves expert,
                compassionate treatment. Located at No.14, Kumaraswamy Street,
                Pallavaram, Chennai — we specialise in all types of orthopaedic and
                neurological conditions.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[15.5px] leading-[1.78] mb-4"
                style={{ color: C.muted }}
              >
                Led by Dr. Shariffa M, Physiotherapist, our clinic focuses on improving mobility, relieving pain, and supporting long-term recovery through evidence-based treatments and hands-on care.
              </motion.p>


              <motion.p
                variants={fadeUp}
                className="text-[15.5px] leading-[1.78] mb-9"
                style={{ color: C.muted }}
              >
                Our experienced physiotherapists combine hands-on manual therapy with
                evidence-based techniques — helping patients of all ages move freely,
                live pain-free, and regain confidence.
              </motion.p>


              {[
                "Physiotherapy for all ages — infants to seniors",
                "Comprehensive orthopaedic & neurological care",
                "Personalised home advice with every treatment",
                "Near Periya Palayattamman Kovil, Pallavaram",
              ].map((pt, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3.5 mb-4"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${C.primary}25` }}
                  >
                    <CheckCircle
                      size={12}
                      strokeWidth={3}
                      style={{ color: C.dark }}
                    />
                  </div>

                  <span
                    className="text-[14.5px] leading-[1.7]"
                    style={{ color: C.sub }}
                  >
                    {pt}
                  </span>
                </motion.div>
              ))}


              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <PrimaryBtn href="tel:6382273687" className="px-7 py-4 text-[15px]">
                  <Phone size={15} strokeWidth={2.5} />
                  Call 63822 73687
                </PrimaryBtn>

                <GhostBtn href="#services" className="px-6 py-4 text-[14.5px]">
                  <ArrowRight size={15} />
                  Our Services
                </GhostBtn>
              </motion.div>

            </Section>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section id="services" className="py-24 lg:py-32" style={{ background: C.section }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Section className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><Badge>We Are Specialised In</Badge></motion.div>
            <motion.h2
              variants={fadeUp}
              className="serif text-[2rem] lg:text-[2.6rem] leading-[1.2] mb-4"
              style={{ color: C.text, fontWeight: 600 }}
            >
              <span className="block lg:inline">Orthopaedic ,</span>{" "}
              <span className="block lg:inline">Neurological ,</span>{" "}
              <span className="block lg:inline">Pediatric &</span>{" "}
              <span className="block lg:inline">Women’s health care</span>
            </motion.h2>
            <motion.p variants={fadeUp}
              className="text-[15.5px] leading-[1.78] max-w-[500px] mx-auto"
              style={{ color: C.muted }}>

            </motion.p>
          </Section>

          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div key={i} variants={fadeUp}
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${C.mint}55` }}
                className="group p-5 rounded-2xl cursor-pointer transition-all duration-300"
                style={{ background: C.white, border: `1.5px solid ${C.border}`, boxShadow: `0 2px 14px ${C.mint}2A` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${C.primary}1C` }}>
                    <s.icon size={17} strokeWidth={2} style={{ color: C.dark }} />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${C.mint}55`, color: C.dark, letterSpacing: "0.03em" }}>
                    {s.tag}
                  </span>
                </div>
                {/* Service title — darker, readable */}
                <h3 className="text-[14px] font-semibold mb-2 leading-snug" style={{ color: C.text }}>{s.title}</h3>
                {/* Service desc — lifted muted color */}
                <p className="text-[13px] leading-[1.72]" style={{ color: C.muted }}>{s.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: C.dark }}>

                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>
      <Gallery />

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ background: C.section }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <Section>
              <motion.div variants={fadeUp} className="mb-7"><Badge soft>Our Highlights</Badge></motion.div>
              <motion.h2 variants={fadeUp}
                className="serif text-[2.1rem] lg:text-[2.6rem] leading-[1.18] mb-5"
                style={{ color: C.text, fontWeight: 600 }}>
                Why Families Choose<br />
                <span className="italic" style={{ color: C.dark }}>Zammu Physio Care</span>
              </motion.h2>
              <motion.p variants={fadeUp}
                className="text-[15.5px] leading-[1.78] mb-10"
                style={{ color: C.muted }}>
                We don't just treat symptoms — we uncover root causes, restore functional movement, and build lasting resilience. Every patient is family to us.
              </motion.p>

              <div className="space-y-3">
                {HIGHLIGHTS.map((item, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer"
                    style={{ background: C.white, border: `1.5px solid ${C.border}` }}
                    whileHover={{ backgroundColor: C.section, borderColor: C.accent }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${C.primary}1C` }}>
                      <item.icon size={17} strokeWidth={2} style={{ color: C.dark }} />
                    </div>
                    <div>
                      {/* Highlight title */}
                      <div className="text-[14px] font-semibold mb-1" style={{ color: C.text }}>{item.label}</div>
                      {/* Highlight desc — readable */}
                      <div className="text-[13.5px] leading-[1.68]" style={{ color: C.muted }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Image */}
            <Section>
              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] opacity-25 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${C.mint}, #EDD9C033)` }} />
                <div className="relative rounded-[2rem] overflow-hidden"
                  style={{ aspectRatio: "4/5", boxShadow: `0 16px 56px ${C.mint}70` }}>
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=1000&fit=crop&crop=center"
                    alt="Expert Physiotherapy" className="w-full h-full object-cover"
                    style={{ filter: "brightness(1.04) saturate(0.87)" }} />
                </div>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-3 rounded-2xl p-4 text-center"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.dark})`, boxShadow: `0 8px 28px ${C.primary}55`, minWidth: 94 }}>
                  <div className="text-[1.7rem] font-bold text-white leading-none mb-1">12+</div>
                  <div className="text-[11px] font-medium leading-tight" style={{ color: "rgba(255,255,255,0.82)" }}>Conditions<br />Treated</div>
                </motion.div>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-4 bottom-10 rounded-2xl p-4"
                  style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", border: `1.5px solid ${C.border}`, boxShadow: `0 8px 28px ${C.mint}44` }}>
                  <div className="text-[11px] font-semibold mb-1" style={{ color: C.muted }}>📞 For Appointment</div>
                  <div className="text-[15px] font-bold" style={{ color: C.dark }}>63822 73687</div>
                </motion.div>
              </motion.div>
            </Section>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section id="process" className="py-24 lg:py-32" style={{ background: C.bg }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Section className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><Badge>Your Journey</Badge></motion.div>
            <motion.h2 variants={fadeUp}
              className="serif text-[2rem] lg:text-[2.6rem] leading-[1.2] mb-4"
              style={{ color: C.text, fontWeight: 600 }}>
              Recovery, <span className="italic" style={{ color: C.dark }}>Step by Step</span>
            </motion.h2>
            <motion.p variants={fadeUp}
              className="text-[15.5px] leading-[1.78] max-w-[440px] mx-auto"
              style={{ color: C.muted }}>
              A structured, science-backed pathway from pain to peak performance.
            </motion.p>
          </Section>

          <Section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <motion.div key={i} variants={fadeUp}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: C.white, border: `1.5px solid ${C.border}`, boxShadow: `0 2px 14px ${C.mint}22` }}
                whileHover={{ y: -4, boxShadow: `0 14px 38px ${C.mint}44` }}>
                {/* Step number — clear but decorative */}
                <div className="text-[2.6rem] font-bold leading-none mb-4" style={{ color: C.mint }}>
                  {s.n}
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: `${C.primary}1C` }}>
                  <s.icon size={17} strokeWidth={2} style={{ color: C.dark }} />
                </div>
                {/* Step title — solid and readable */}
                <h3 className="text-[15px] font-semibold mb-2.5" style={{ color: C.text }}>{s.title}</h3>
                {/* Step desc — comfortable size */}
                <p className="text-[13.5px] leading-[1.75]" style={{ color: C.muted }}>{s.desc}</p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section id="testimonials" className="py-24 lg:py-32" style={{ background: C.section }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <Section className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><Badge soft>Patient Stories</Badge></motion.div>
            <motion.h2 variants={fadeUp}
              className="serif text-[2rem] lg:text-[2.6rem] leading-[1.2]"
              style={{ color: C.text, fontWeight: 600 }}>
              Real People, <span className="italic" style={{ color: C.dark }}>Real Results</span>
            </motion.h2>
          </Section>

          <div className="grid lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.58, delay: i * 0.13 }}
                whileHover={{ y: -4, boxShadow: `0 16px 40px ${C.mint}44` }}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: C.white, border: `1.5px solid ${C.border}`, boxShadow: `0 2px 14px ${C.mint}22` }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} size={14} strokeWidth={0} fill={C.paleGold} />
                  ))}
                </div>
                {/* Review body — readable, italic but not faint */}
                <p className="text-[14.5px] leading-[1.8] mb-5 italic" style={{ color: C.sub }}>"{r.body}"</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
                  <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    style={{ border: `2px solid ${C.mint}` }} />
                  <div>
                    <div className="text-[14px] font-semibold" style={{ color: C.text }}>{r.name}</div>
                    <div className="text-[12px] font-medium mt-0.5" style={{ color: C.faint }}>{r.sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Walk-in & Home Visit Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 mx-4"
        >
          <div
            className="max-w-3xl mx-auto rounded-[32px] p-8 lg:p-10 text-center"
            style={{
              background: C.white,
              border: `1.5px solid ${C.border}`,
              boxShadow: `0 10px 35px ${C.mint}20`,
            }}
          >
            <h3
              className="text-2xl lg:text-3xl font-semibold mb-3"
              style={{ color: C.text }}
            >
              Walk-In & Home Visits
            </h3>

            <p
              className="text-[15px] lg:text-[16px] mb-8"
              style={{ color: C.sub }}
            >
              Walk-in consultations and home visits are always welcome.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Mon-Sat */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: `${C.mint}10`,
                  border: `1px solid ${C.border}`,
                }}
              >
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ color: C.text }}
                >
                  Monday – Saturday
                </h4>

                <p className="text-sm leading-7" style={{ color: C.sub }}>
                  10:00 AM – 2:00 PM <br />
                  5:00 PM – 9:00 PM
                </p>
              </div>

              {/* Sunday */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: `${C.mint}10`,
                  border: `1px solid ${C.border}`,
                }}
              >
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ color: C.text }}
                >
                  Sunday
                </h4>

                <p className="text-sm leading-7" style={{ color: C.sub }}>
                  10:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-8 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden py-16 px-8 lg:px-16 text-center"
            style={{ background: `linear-gradient(135deg, ${C.statsBg} 0%, ${C.dark} 100%)` }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-8"
              style={{ background: "white", transform: "translate(30%,-40%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-10"
              style={{ background: "#EDD9C0", transform: "translate(-30%,40%)" }} />

            <Section>
              <motion.div variants={fadeUp} className="flex justify-center mb-6">
                <span className="text-[12px] font-semibold tracking-[0.14em] uppercase px-4 py-2 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                  Book Today — Feel Better Tomorrow
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="serif text-[1.9rem] lg:text-[2.6rem] font-medium text-white mb-4 leading-[1.2]">
                Suffering from Pain?<br /><span className="italic">Expert Help is One Call Away.</span>
              </motion.h2>
              <motion.p variants={fadeUp}
                className="text-[15px] max-w-[420px] mx-auto mb-9 leading-[1.78]"
                style={{ color: "rgba(255,255,255,0.82)" }}>
                Visit us at No.14, Kumaraswamy Street, Pallavaram, Chennai. Walk-ins are always welcome.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
                <a href="tel:6382273687"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14.5px] font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: C.white, color: C.dark, boxShadow: "0 4px 20px rgba(0,0,0,0.14)" }}>
                  <Phone size={15} strokeWidth={2.5} /> Call 63822 73687
                </a>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14.5px] font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.14)", color: "white", border: "1.5px solid rgba(255,255,255,0.35)" }}>
                  <Calendar size={14} strokeWidth={2} /> Book Appointment
                </a>
              </motion.div>
            </Section>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32" style={{ background: C.section }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14">

            <Section>
              <motion.div variants={fadeUp} className="mb-7"><Badge soft>Visit Us</Badge></motion.div>
              <motion.h2 variants={fadeUp}
                className="serif text-[2.1rem] lg:text-[2.5rem] leading-[1.18] mb-5"
                style={{ color: C.text, fontWeight: 600 }}>
                Ready to Feel <span className="italic" style={{ color: C.dark }}>Better?</span>
              </motion.h2>
              <motion.p variants={fadeUp}
                className="text-[15.5px] leading-[1.78] mb-9"
                style={{ color: C.muted }}>
                Walk in or call ahead. We are conveniently located in Pallavaram, near Periya Palayattamman Kovil, with easy access from across Chennai.
              </motion.p>

              {[
                {
                  icon: MapPin, label: "Address", value: "No.14, Kumaraswamy Street\nPallavaram, Chennai – 600 043\nNear Periya Palayattamman Kovil", dir: "Get Direction →", link:
                    "https://www.google.co.in/maps/place/Zammu+Physio+Care/@12.9678855,80.1421994,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525fde35750a41:0x99b2febd9a25ead5!8m2!3d12.9678803!4d80.1447743!16s%2Fg%2F11r9gtf2rf?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
                },
                { icon: Phone, label: "Phone", value: "63822 73687" },
                { icon: Clock, label: "Hours", value: "Monday – Saturday: 10:00 AM to 2:00 PM & 5:00 PM to 9:00 PM", value2: "Sunday : 10:00 AM to 2:00 PM " },
                { icon: Activity, label: "Specialisation", value: "All types of Ortho & Neuro Conditions" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${C.primary}1C` }}>
                    <item.icon size={16} strokeWidth={2} style={{ color: C.dark }} />
                  </div>
                  <div>
                    {/* Contact label */}
                    <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: C.faint }}>{item.label}</div>
                    {/* Contact value — proper contrast */}
                    <div
                      className="text-[14.5px] font-medium whitespace-pre-line leading-[1.68]"
                      style={{ color: C.text }}
                    >
                      {item.value}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-[14px] font-semibold transition-all duration-200 hover:translate-x-1"
                        style={{ color: C.dark }}
                      >
                        Get Direction →
                      </a>
                    )}
                    <div className="text-[14.5px] font-medium whitespace-pre-line leading-[1.68]" style={{ color: C.text }}>{item.value2}</div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="mt-7">
                <PrimaryBtn href="tel:6382273687" className="px-8 py-4 text-[15px]">
                  <Phone size={16} strokeWidth={2.5} /> 📞 63822 73687
                </PrimaryBtn>
              </motion.div>
            </Section>

            {/* Form card */}
            <Section>
              <motion.div
                variants={fadeUp}
                className="p-8 lg:p-9 rounded-3xl"
                style={{
                  background: C.white,
                  border: `1.5px solid ${C.border}`,
                  boxShadow: `0 4px 32px ${C.mint}33`,
                }}
              >
                <h3
                  className="serif text-[1.4rem] font-medium mb-1.5"
                  style={{ color: C.text }}
                >
                  Book an Appointment
                </h3>

                <p className="text-[14px] mb-7" style={{ color: C.muted }}>
                  Fill in your details and we'll confirm your slot shortly.
                </p>

                <div className="space-y-4">

                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] outline-none transition-all duration-200 font-medium"
                    style={{
                      background: C.section,
                      border: `1.5px solid ${C.border}`,
                      color: C.text,
                    }}
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] outline-none transition-all duration-200 font-medium"
                    style={{
                      background: C.section,
                      border: `1.5px solid ${C.border}`,
                      color: C.text,
                    }}
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address (optional)"
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] outline-none transition-all duration-200 font-medium"
                    style={{
                      background: C.section,
                      border: `1.5px solid ${C.border}`,
                      color: C.text,
                    }}
                  />

                  {/* Service */}
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] font-medium outline-none transition-all duration-200"
                    style={{
                      background: C.section,
                      border: `1.5px solid ${C.border}`,
                      color: C.muted,
                    }}
                  >
                    <option value="">Select a Service</option>

                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>

                  {/* Message */}
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief description of your condition..."
                    className="w-full px-4 py-3.5 rounded-xl text-[14px] font-medium outline-none transition-all duration-200 resize-none"
                    style={{
                      background: C.section,
                      border: `1.5px solid ${C.border}`,
                      color: C.text,
                    }}
                  />

                  {/* Button */}
                  <button
                    onClick={handleWhatsApp}
                    className="w-full inline-flex items-center justify-center py-4 rounded-full text-[15px] font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${C.primary}, ${C.dark})`,
                    }}
                  >
                    Request Appointment →
                  </button>

                  <p
                    className="text-[13px] font-medium text-center"
                    style={{ color: C.muted }}
                  >
                    Or call directly:{" "}
                    <a
                      href="tel:6382273687"
                      className="font-bold"
                      style={{ color: C.dark }}
                    >
                      63822 73687
                    </a>
                  </p>
                </div>
              </motion.div>
            </Section>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer style={{ background: "#182420", color: "white" }} className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.dark})` }}>
                  <Leaf size={15} className="text-white" strokeWidth={2} />
                </div>
                <span className="text-[16px] font-bold">Zammu <span style={{ color: C.accent }}>Physio</span> Care</span>
              </div>
              <p className="text-[13px] italic font-medium mb-4" style={{ color: C.accent }}>Caring is our Passion</p>
              {/* Footer address — lifted from near-invisible */}
              <p className="text-[13px] leading-[1.75] mb-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>No.14, Kumaraswamy Street,</p>
              <p className="text-[13px] leading-[1.75] mb-1" style={{ color: "rgba(255,255,255,0.60)" }}>Pallavaram, Chennai – 600 043.</p>
              <p className="text-[12px] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Near Periya Palayattamman Kovil</p>
              <a href="tel:6382273687" className="inline-flex items-center gap-1.5 text-[14px] font-bold"
                style={{ color: C.accent }}>
                <Phone size={14} strokeWidth={2.5} /> 63822 73687
              </a>
            </div>

            {[
              { title: "Specialisations", links: ["All types of musculoskeletal and neuro conditions."] },
              { title: "More Services", links: ["Arthritis", "Pre & Post Surgery Rehab", "Neuro Rehab (Stroke)", "Bell's Palsy", "Pediatrics Care", "Women's Health & Fitness"] },
              { title: "Quick Links", links: ["About Us", "Our Services", "Book Appointment", "Contact Us"] },
            ].map((col, i) => (
              <div key={i}>
                {/* Footer column headers */}
                <div className="text-[13px] font-bold mb-5 text-white tracking-wide">{col.title}</div>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-[13px] transition-colors"
                        style={{ color: "rgba(255,255,255,0.52)" }}
                        onMouseEnter={e => e.target.style.color = C.accent}
                        onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.52)"}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
            <p className="text-[12.5px]" style={{ color: "rgba(255,255,255,0.38)" }}>
              © 2026 Zammu Physio Care, Pallavaram, Chennai. All rights reserved.
            </p>
            <p className="text-[12px] italic" style={{ color: "rgba(255,255,255,0.28)" }}>
              We treat all types of Ortho &amp; Neuro Conditions
            </p>
          </div>
          <div className="mt-5 text-center">
            <a
              href="https://ziauddeen-zia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.dark})`,
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full  font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Designed by Ziauddeen ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}