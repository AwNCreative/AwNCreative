import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, Lock, TrendingUp, Search, Zap, DollarSign, Wrench, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sallaChapters = [
  { id: "ch1", title: "الفصل الأول: التأسيس الذكي", subtitle: "هندسة المتجر من الصفر." },
  { id: "ch2", title: "الفصل الثاني: سيكولوجية الواجهة", subtitle: 'كيف تبني متجراً "يبيع"؟' },
  { id: "ch3", title: "الفصل الثالث: هندسة المنتجات", subtitle: "فن الوصف وترتيب التصنيفات." },
  { id: "ch4", title: "الفصل الرابع: الترسانة التقنية", subtitle: "الربط الذكي وعصر الـ Data." },
  { id: "ch5", title: "الفصل الخامس: ماكينة المبيعات", subtitle: "الكوبونات والسلات المتروكة." },
  { id: "ch6", title: "الفصل السادس: الولاء المطلق", subtitle: "خدمة العملاء." },
];

const sallaFeatures = [
  { icon: TrendingUp, title: "إعدادات الخبراء", desc: "ضبط المتجر لرفع نسبة تحويل الزوار (Conversion Rate)." },
  { icon: ShoppingBag, title: "تحسين تجربة العميل", desc: "أسرار ترتيب الأقسام لتسهيل الشراء." },
  { icon: Search, title: "SEO سلة", desc: "الظهور في نتائج البحث الأولى مجاناً." },
];

const winningChapters = [
  { id: "w1", title: "المقدمة", subtitle: "لماذا يفشل 90% من المتاجر؟ والفرق بين ذوقك الشخصي وطلب السوق." },
  { id: "w2", title: "مواصفات المنتج البطل", subtitle: "عامل الـ Wow، حل المشكلات الحقيقية، وصعوبة الإيجاد في المحلات التقليدية." },
  { id: "w3", title: "أدوات الجاسوس الرقمي", subtitle: "استخدام مكتبة إعلانات تيك توك، Google Trends، وتحليل المنافسين." },
  { id: "w4", title: "الترند vs الاستدامة", subtitle: "متى تدخل موجة الترند وكيف تبني متجر يعيش لسنوات." },
  { id: "w5", title: "مرحلة الاختبار (Testing)", subtitle: "كيف تختبر المنتج بميزانية بسيطة (50 ريال) وقراءة أرقام الأداء." },
];

const winningFeatures = [
  { icon: Zap, title: "عامل الـ Wow", desc: "كيف تشد انتباه العميل في أول 3 ثوانٍ." },
  { icon: Wrench, title: "حل المشكلات", desc: "اختيار منتجات توفر الجهد، الوقت، أو الألم للعملاء." },
  { icon: DollarSign, title: "هوامش الربح", desc: "قاعدة التسعير الذكي لضمان استدامة تجارتك." },
];

function ProductCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Image Panel */}
        <div className="lg:col-span-2 relative border-b lg:border-b-0 lg:border-s border-border/50 min-h-[340px] lg:min-h-[560px]">
          <div className="absolute top-4 start-4 z-10">
            <Badge className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1">الأكثر مبيعاً</Badge>
          </div>
          <img
            src="/product-salla.jpg"
            alt="أسرار منصة سلة"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-3 p-8 md:p-10 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-foreground mb-1">أسرار منصة سلة</h2>
              <p className="text-muted-foreground text-sm">دليل رقمي شامل</p>
            </div>
            <div className="text-start shrink-0">
              <p className="text-muted-foreground line-through text-sm mb-0.5">$12</p>
              <p className="text-3xl font-black text-primary leading-none">$10</p>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            خريطتك الذهبية للانتقال بمتجرك من مجرد صفحة عادية إلى منصة احترافية تحقق مبيعات. اختصرنا لك سنوات من الخبرة والتجارب في دليل واحد يضع بين يديك "الخلاصة" لإدارة متجرك بذكاء.
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-muted-foreground">ماذا ستتعلم؟</h3>
            <div className="space-y-4">
              {sallaFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-0.5">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground">محتويات الدليل</h3>
            <Accordion type="single" collapsible className="w-full border border-border/50 rounded-xl overflow-hidden">
              {sallaChapters.map((chapter, i) => (
                <AccordionItem key={chapter.id} value={chapter.id} className="border-border/50 last:border-b-0">
                  <AccordionTrigger className="px-4 py-3 text-right hover:no-underline hover:bg-muted/40 text-sm font-semibold text-foreground [&[data-state=open]]:text-primary [&[data-state=open]]:bg-primary/5">
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {chapter.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0" />
                      {chapter.subtitle}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-auto pt-6">
            <Button
              size="lg"
              onClick={() => window.open("https://www.paypal.com/ncp/payment/MCNCCSMWLEVKG","_blank")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-base font-bold shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-5 h-5 ms-2" />
              اشترِ الآن — $10
            </Button>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1 justify-center">
              <Lock className="w-3 h-3" />
              دفع آمن ومشفّر · وصول فوري للتحميل
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WinningProductCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Image Panel */}
        <div className="lg:col-span-2 relative border-b lg:border-b-0 lg:border-s border-border/50 min-h-[340px] lg:min-h-[560px]">
          <div className="absolute top-4 start-4 z-10">
            <Badge className="bg-amber-600 text-white text-xs font-bold px-3 py-1">جديد</Badge>
          </div>
          <img
            src="/product-winning.jpg"
            alt="دليل أسرار المنتج الرابح"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-3 p-8 md:p-10 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-foreground mb-1">دليل أسرار المنتج الرابح</h2>
              <p className="text-muted-foreground text-sm">دليل عملي PDF للاستخدام الشخصي</p>
            </div>
            <div className="text-start shrink-0">
              <p className="text-muted-foreground line-through text-sm mb-0.5">$10</p>
              <p className="text-3xl font-black text-primary leading-none">$7</p>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            توقف عن إهدار ميزانيتك الإعلانية في تجربة منتجات فاشلة! هذا الدليل هو "الفلتر" الذي تحتاجه لاختيار منتجات تبيع نفسها بنفسها وتجذب العملاء من النظرة الأولى.
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-muted-foreground">ماذا ستتعلم؟</h3>
            <div className="space-y-4">
              {winningFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-0.5">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground">محتويات الدليل</h3>
            <Accordion type="single" collapsible className="w-full border border-border/50 rounded-xl overflow-hidden">
              {winningChapters.map((chapter, i) => (
                <AccordionItem key={chapter.id} value={chapter.id} className="border-border/50 last:border-b-0">
                  <AccordionTrigger className="px-4 py-3 text-right hover:no-underline hover:bg-muted/40 text-sm font-semibold text-foreground [&[data-state=open]]:text-primary [&[data-state=open]]:bg-primary/5">
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {chapter.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0" />
                      {chapter.subtitle}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-auto pt-6">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-base font-bold shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              <ShoppingBag className="w-5 h-5 ms-2" />
              اشترِ الآن — $7
            </Button>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1 justify-center">
              <Lock className="w-3 h-3" />
              دفع آمن ومشفّر · وصول فوري للتحميل
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Store() {
  return (
    <div className="w-full pt-10 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">أصول رقمية</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5">
              أدواتك لتحقيق <span className="text-primary">النجاح.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              أدلة رقمية متخصصة وموثوقة، كتبها متخصصون بناءً على تجارب حقيقية وأرقام واضحة.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          <ProductCard />
          <WinningProductCard />
        </div>

      </div>
    </div>
  );
}
