import { Phone, Mail, MapPin, Scale, Award, Building, ChevronDown } from "lucide-react";
import lawyerPhoto from "@/assets/lawyer-photo.png";
import officeBg from "@/assets/office-bg.jpg";
import scalesIcon from "@/assets/scales-icon.png";
import nibrasLogo from "@/assets/nibras-logo.png";

// The optima logo should be placed in src/assets/optima-logo.png
const optimaLogo = "/src/assets/optima-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={scalesIcon} alt="" className="w-8 h-8" width={32} height={32} />
            <span className="text-gradient font-bold text-lg md:text-xl tracking-wide" style={{ fontFamily: "'Amiri', serif" }}>
              المحامي محمد هاشم جبر القريوتي
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-secondary-foreground">
            <a href="#home" className="hover:text-primary transition-colors">
              الرئيسية
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              نبذة
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              التواصل
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-4 rounded-xl border border-white/10 bg-white/5 h-16 px-2 md:px-4 shadow-lg shadow-primary/10 select-none">
            <div className="flex flex-col justify-center items-start leading-none gap-0.5 text-secondary-foreground text-right px-1">
              <div className="hidden md:block text-[9px] font-medium whitespace-nowrap opacity-90">
                عمان / شارع الملك عبدالله الثاني / مجمع الملك حسين للأعمال / عمارة رقم 20
              </div>
              <div className="flex items-center justify-end gap-2 md:gap-3 text-[8px] md:text-[10px] font-bold text-foreground w-full">
                <span>062227630 ☎️</span>
                <span>0796991865 📱</span>
              </div>
              <div className="flex items-center justify-end gap-1 md:gap-2 text-[7px] md:text-[9px] font-medium w-full overflow-hidden">
                <span className="text-accent-foreground/70 truncate hidden sm:inline">NibrasLegalTech.COM</span>
                <span className="opacity-30 hidden sm:inline">/</span>
                <span className="text-primary-foreground/70 truncate lowercase">Info@NibrasLegalTech.COM</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <img src={nibrasLogo} alt="شعار نبراس" className="h-8 md:h-10 w-auto shrink-0" />
              <span className="hidden md:block text-[8px] text-white/60 font-medium whitespace-nowrap">برمجية إدارة قانونية</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={officeBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 pattern-overlay" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right - Text content */}
            <div className="space-y-8 text-right">
              <div className="animate-float-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground text-sm mb-6">
                  <Scale className="w-4 h-4 text-accent" />
                  <span>محامي ومستشار قانوني — نقابة المحامين الأردنيين</span>
                </div>
              </div>

              <h1 className="animate-float-up-delay-1 text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: "'Amiri', serif" }}>
                <span className="text-gradient">محمد هاشم جبر</span>
                <br />
                <span className="text-foreground">القريوتي</span>
              </h1>

              <p className="animate-float-up-delay-2 text-lg text-muted-foreground leading-relaxed max-w-lg" dir="ltr" style={{ textAlign: "right" }}>
                MOHAMMAD H.J. MUSTAFA
              </p>

              <div className="animate-float-up-delay-2 accent-line-short mr-0" />

              <p className="animate-float-up-delay-2 text-lg text-secondary-foreground leading-relaxed max-w-lg">
                محامي ومستشار قانوني - أستاذ مزاول، بخبرة قانونية واسعة في مختلف القضايا والخدمات القانونية.
              </p>

              <div className="animate-float-up-delay-3 flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:0796781019"
                  className="btn-primary text-lg px-8 py-4 rounded-xl inline-flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  تواصل معنا
                </a>
                <a
                  href="mailto:karutelawyer@hotmail.com"
                  className="text-lg px-8 py-4 rounded-xl border border-border text-secondary-foreground hover:border-primary/50 hover:text-foreground transition-all inline-flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  راسلنا
                </a>
              </div>
            </div>

            {/* Left - Photo */}
            <div className="flex justify-center lg:justify-start animate-scale-up">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                  <img
                    src={lawyerPhoto}
                    alt="المحامي محمد هاشم جبر القريوتي"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-72 h-80 md:w-80 md:h-96 rounded-2xl border border-primary/15 -z-10" />
                <div
                  className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl"
                  style={{ borderRight: "none", borderBottom: "none" }}
                />
                <div
                  className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/50 rounded-br-2xl"
                  style={{ borderLeft: "none", borderTop: "none" }}
                />
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* Divider */}
      <div className="accent-line" />

      {/* About / Info Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4" style={{ fontFamily: "'Amiri', serif" }}>
              السيرة الذاتية
            </h2>
            <div className="accent-line-short mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard icon={<Building className="w-6 h-6" />} label="المدينة والمحافظة" value="عمان / محافظة العاصمة" />
            <InfoCard icon={<Phone className="w-6 h-6" />} label="الهاتف المحمول" value="0796781019" href="tel:0796781019" />
            <InfoCard icon={<Mail className="w-6 h-6" />} label="البريد الإلكتروني" value="karutelawyer@hotmail.com" href="mailto:karutelawyer@hotmail.com" />
            <InfoCard icon={<Award className="w-6 h-6" />} label="الرقم النقابي" value="12698" />
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Educational Qualifications */}
            <div className="glass-card rounded-2xl p-8 border-r-4 border-r-primary shadow-xl">
              <h3 className="text-2xl font-black text-gradient mb-8 flex items-center gap-3" style={{ fontFamily: "'Amiri', serif" }}>
                <Award className="w-7 h-7" />
                المؤهلات العلميــة
              </h3>
              <div className="space-y-6 text-secondary-foreground">
                <div className="relative pr-6 border-r border-primary/20">
                  <div className="absolute top-1 -right-1 w-2 h-2 rounded-full bg-primary" />
                  <p className="font-bold text-foreground">بكالوريوس حقوق</p>
                  <p className="text-sm opacity-80 leading-7">درجة البكالوريوس في الحقوق من إحدى الجامعات المرموقة.</p>
                </div>
              </div>
            </div>

            {/* Judicial and Professional Record */}
            <div className="glass-card rounded-2xl p-8 border-r-4 border-r-accent shadow-xl">
              <h3 className="text-2xl font-black text-gradient mb-8 flex items-center gap-3" style={{ fontFamily: "'Amiri', serif" }}>
                <Scale className="w-7 h-7" />
                السجل المهني
              </h3>
              <ul className="space-y-4 text-secondary-foreground">
                {[
                  "محامي ومستشار قانوني (أستاذ مزاول).",
                  "عضو في نقابة المحامين الأردنيين.",
                  "باحث قانوني متخصص في مختلف القوانين الأردنية.",
                  "خبير في تقديم الاستشارات القانونية والمرافعة أمام المحاكم."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Record & Training */}
            <div className="glass-card rounded-2xl p-8 border-r-4 border-r-primary shadow-xl">
              <h3 className="text-2xl font-black text-gradient mb-8 flex items-center gap-3" style={{ fontFamily: "'Amiri', serif" }}>
                <Building className="w-7 h-7" />
                الخدمات القانونية
              </h3>
              <div className="space-y-4">
                  <ul className="space-y-3 text-sm">
                    {[
                      "المرافعة في القضايا المدنية والتجارية.",
                      "الدفاع في القضايا الجنائية والجنح.",
                      "صياغة وترجمة العقود والاتفاقيات القانونية.",
                      "تقديم الاستشارات القانونية والشرعية."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 opacity-90">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>

            {/* Experimental / Other */}
            <div className="glass-card rounded-2xl p-8 border-r-4 border-r-accent shadow-xl">
              <h3 className="text-2xl font-black text-gradient mb-8 flex items-center gap-3" style={{ fontFamily: "'Amiri', serif" }}>
                <Scale className="w-7 h-7" />
                التواصل واللغات
              </h3>
              <div className="space-y-4">
                <p className="text-sm leading-7 opacity-80">نلتزم بتقديم أفضل الخدمات القانونية لعملائنا بكل احترافية وشفافية.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold">اللغات:</span>
                  <span className="opacity-80">العربية (الأم)</span>
                  <span className="mx-1 opacity-20">|</span>
                  <span className="opacity-80">الإنجليزية</span>
                </div>
              </div>
            </div>
          </div>

          {/* New detailed categories removed for simplicity or replaced with generic ones */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { title: "التخصصات القانونية", items: ["القانون المدني", "القانون الجنائي", "قوانين الشركات والعمل", "الأحوال الشخصية"] },
                 { title: "القيم المهنية", items: ["الأمانة والصدق", "الدقة والإنجاز", "السرية التامة", "الدفاع عن الحق"] }
               ].map((cat, i) => (
                 <div key={i} className="glass-card p-5 rounded-xl border-t border-white/5">
                   <h4 className="font-bold text-primary mb-3 text-sm">{cat.title}</h4>
                   <ul className="space-y-2 text-xs opacity-70">
                     {cat.items.map((item, j) => <li key={j}>• {item}</li>)}
                   </ul>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* Contact + Map Section */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <img
          src={officeBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 pattern-overlay" />

        <div className="relative max-w-5xl mx-auto px-6 space-y-16">
          {/* CTA */}
          <div className="text-center space-y-8">
            <img src={scalesIcon} alt="" className="w-16 h-16 mx-auto opacity-60" loading="lazy" width={64} height={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient" style={{ fontFamily: "'Amiri', serif" }}>
              هل تحتاج استشارة قانونية؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              لا تتردد في التواصل مع المحامي محمد هاشم جبر القريوتي للحصول على المشورة القانونية المتخصصة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:0796781019"
                className="btn-primary text-xl px-10 py-5 rounded-xl inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                0796781019
              </a>
              <a
                href="mailto:karutelawyer@hotmail.com"
                className="text-lg px-10 py-5 rounded-xl border border-border text-secondary-foreground hover:border-primary/50 hover:text-foreground transition-all inline-flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                أرسل بريدًا إلكترونيًا
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Amiri', serif" }}>
                <MapPin className="w-5 h-5 inline-block ml-2 text-accent" />
                موقع المكتب
              </h3>
              <p className="text-muted-foreground">الأردن — عمّان —شارع طارق الرئيسي</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <iframe
                src="https://www.google.com/maps?q=%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86%20%E2%80%94%20%D8%B9%D9%85%D9%91%D8%A7%D9%86%20%E2%80%94%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%B7%D8%A7%D8%B1%D9%82%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع المكتب - شارع طارق الرئيسي، عمّان"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={scalesIcon} alt="" className="w-7 h-7" loading="lazy" width={28} height={28} />
              <span className="text-gradient font-bold text-lg" style={{ fontFamily: "'Amiri', serif" }}>
                المحامي محمد هاشم جبر القريوتي
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>عمّان — محافظة العاصمة</span>
              <span className="hidden sm:inline">|</span>
              <span>الرقم النقابي: 12698</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>

      {/* Optima Floating Badge */}
      <div className="fixed bottom-6 left-6 z-[60] animate-float-up pointer-events-auto">
        <a 
          href="https://nibraslegaltech.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/10 shadow-2xl hover:scale-105 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
        >
          <div className="text-right">
            <p className="text-[10px] text-muted-foreground leading-none mb-1 opacity-70">Made and Powered by</p>
            <p className="text-xs font-black text-foreground leading-none tracking-tight">Optima Information Technology</p>
          </div>
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/5 bg-white/5 p-1.5 flex items-center justify-center shrink-0">
            <img 
              src={optimaLogo} 
              alt="Optima IT" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if logo is missing
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-primary/20');
              }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="glass-card rounded-xl p-6 flex items-center gap-5 transition-all duration-300 group cursor-default shine-effect"
      style={href ? { cursor: "pointer" } : undefined}
    >
      <div className="shrink-0 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div className="text-right min-w-0">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-lg font-bold text-foreground truncate">{value}</p>
      </div>
    </Wrapper>
  );
};

export default Index;
