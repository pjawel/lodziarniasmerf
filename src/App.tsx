/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Clock, IceCream, Star, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    title: "Sernik z pomarańczą",
    description: "Słodki sernik z cytrusową nutą. Nasza najnowsza duma!",
    image: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/681268562_1438550791405583_1678985202632018766_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w6hsanzWh4UQ7kNvwFJz3fy&_nc_oc=AdrqePDvLOM7HTEAd9IOcmirr1RBrWTVWiFM5xPaYpm7iivM0fQ0t6_q6VSyIQluhx4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5_Z0f55pmZVBY7gus5_aqA&_nc_ss=7b2a8&oh=00_Af1F9KfwJtEx9Jjdvxt8WUinWlFvcCpjB5i63q_WjIk7BQ&oe=69F7EAB8",
    tag: "NOWOŚĆ",
    color: "bg-orange-100"
  },
  {
    id: 2,
    title: "Mascarpone z karmelem",
    description: "Kremowe mascarpone, popcorn i słodki karmel.",
    image: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/679915430_1438551284738867_1006557857187911240_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=p_Cd8HeyUjAQ7kNvwG076wl&_nc_oc=AdpJ1G8Q1hMy9PrwWxsruGpEW7Zs_ZlFrj0Z7wJ05fRdv592CIIdJD3raH7_rXKVJ3s&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=RMLoZ9zxZuT9pAG666goVg&_nc_ss=7b2a8&oh=00_Af2YFYdqt7h6LaQwr-Igqts4ivXqrmHe0aU8ZwLKXk5R4Q&oe=69F7BF79",
    tag: "HIT",
    color: "bg-yellow-100"
  },
  {
    id: 3,
    title: "Amerykany na śmietanie",
    description: "Klasyczne amerykany z zastygałą polewą. Niebo w gębie!",
    image: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/492137540_1147290980531567_69291499562627642_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vx8SlXpz8Q0Q7kNvwHcwIxv&_nc_oc=AdrpeMBcooIc70g7MZQOnkb_doupshB2QeMg5bnHRDt2vtv9etFwFY8i9bcyg6InAis&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=fktilrAhX_FK79foYWNXPg&_nc_ss=7b2a8&oh=00_Af3a_EX07vXTgQP54wRvsZq5A_ttTmgFaF1xt5K2lzzY3g&oe=69F7E26D",
    color: "bg-blue-100"
  },
  {
    id: 5,
    title: "Włoskie - Klasyka",
    description: "Lody włoskie kręcone tak samo od lat. Prawdziwa tradycja.",
    image: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/488966587_1133353311925334_2171387565485834979_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=B8g4Eh1b9DwQ7kNvwF27jWB&_nc_oc=AdqjDB1K9ewmWF3zNvIrFC8-1O7PrpOvGgM3wql2H-OqdMKzKa5k2ICK87-NgJ6jDr0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=rkN1YZckauLP-Gbrdv-E5A&_nc_ss=7b2a8&oh=00_Af0gqNFpDXRVOHDvgudzD3U1VyucxADBJX9WOH7dfd1Srw&oe=69F7EA90",
    tag: "POLECAMY",
    color: "bg-cream-100"
  },
  {
    id: 7,
    title: "Gofry bąbelkowe",
    description: "Mega puszyste gofry z Twoimi ulubionymi dodatkami.",
    image: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/485648408_1121276499799682_4165722475536760541_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4VbolXfXYD8Q7kNvwEMLiC9&_nc_oc=AdrKY0PZYJFH6136v5qNBITOVVfPKVgZQDHRWhL0Bsjh5jVX978Xcm61gLB1fITnGl0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=6i4gJj9u5yatSWb0SqjADg&_nc_ss=7b2a8&oh=00_Af07aPRcg-eJmYtMRCzm3g_1Lz25p0-3cSqOZ6T2Rk2dnA&oe=69F7D37D",
    color: "bg-pink-100"
  },
  {
    id: 8,
    title: "Ciepłe nachosy",
    description: "Idealna przekąska na ciepło z pysznym sosem serowym.",
    image: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/486169737_1121284633132202_8847215836616356922_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=oACxYItvm5cQ7kNvwGCIMFU&_nc_oc=AdrTd-3IbnWrk02kJlsMv0qXQET-Rw9drtEyD9OtMd6VXcbm2HC8SguZm92cWl3Exho&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=1vbsJoOlZx3Ra95bEzqyUQ&_nc_ss=7b2a8&oh=00_Af1AIyo63NfGA0NM7qfM2iXoNiK2q4psngjyWN_vARsKJg&oe=69F7C118",
    color: "bg-orange-50"
  },
  {
    id: 9,
    title: "Shake smerfowe i kawa latte",
    description: "Wyjątkowe shake'i o smaku smerfowym oraz aromatycznej kawy latte.",
    image: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/481909622_1109411270986205_3639633130943323066_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wHixnSHnMWMQ7kNvwFRq1qI&_nc_oc=Adp7OJwT5XP2_j23UKEIbjIOAp1axHYtDgK_7f6viUVN1APGLHZhm_y0HCpyDYSY7sY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=R4XtGlc-MAjsQFRru87RqQ&_nc_ss=7b2a8&oh=00_Af2ItCQKta7Ng9KuEqB4zQ1HAnX_hnNspOnieVQRmnhmbA&oe=69F7B972",
    color: "bg-blue-50"
  },
  {
    id: 10,
    title: "Bananowe lody amerykańskie",
    description: "Puszyste lody amerykańskie o smaku dojrzałych bananów.",
    image: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/474707837_1078472694080063_2584565366467235950_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=npNmM4elpzwQ7kNvwE0NbM1&_nc_oc=AdpSuYgC51-JmowXP-PnSCheU6Ce2R6FtbWYnzoKXWpEQQP5-YcQmPL4UsGdjYmnhq8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ZuV9kJsYK9yNxyV41GAK3A&_nc_ss=7b2a8&oh=00_Af1bWeIOLAZRWJG5K3G6c90YGliiO238rlq5U0gG-yxAeA&oe=69F7BE96",
    color: "bg-yellow-50"
  },
  {
    id: 11,
    title: "Slushy",
    description: "Orzeźwiające lodowe napoje idealne na upalne dni.",
    image: "https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/201573500_245671974026810_455612926425669255_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=aPueuY1Uj7sQ7kNvwFQWN5R&_nc_oc=AdoMlyK1tgwMjOQFC01H7K_2Ewcm3axkPzKr91dV6nU9syeReZHn7U1Iv9XpXfeuDwY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=dEM1BZ307CTmQwRKYr25eA&_nc_ss=7b2a8&oh=00_Af3XeUMmjpi4dpUqOh0m8Cgmqmjws4XNqGNgHrXqcKjp-g&oe=6A1979B2",
    color: "bg-red-50"
  }
];

const LOGO_URL = "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/434054916_888841726376495_8451753653326584962_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=DN25u9R69zwQ7kNvwExCkBY&_nc_oc=AdrH0wWHuFbl7uBj9EutrX6cAcR8Bmj-FsdHPJff2TuBBDLT-q2l550kiYPbSNobpoA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=0strpOCDDGXeYJfUZGOkQQ&_nc_ss=7b2a8&oh=00_Af1lOyzH4eKVlMKWxAz1WzPTUFHuM-uYakpy0vUz_FJN1g&oe=69F7CEFD";

const Bubble = ({ className, size = 20, delay = 0 }: { className?: string, size?: number, delay?: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      y: [0, -20, 0]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute rounded-full bg-smerf-300 blur-xl ${className}`}
    style={{ width: size, height: size }}
  />
);

const WavyDivider = ({ top = false, color = "fill-white" }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${top ? 'top-[-1px]' : 'bottom-[-1px]'} ${top ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-[calc(100%+1.3px)] h-[60px] ${color}`}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c63.59-30.22,105.17-24.22,170.13-14.92,40,5.73,75.31,13,114.44,13.12,31.74.07,68.19-4.72,111.44-21.76Z"></path>
    </svg>
  </div>
);

export default function App() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-strawberry selection:text-strawberry-text overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-2 sm:px-4 py-4 sm:py-6">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="max-w-5xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/40 p-2 px-3 sm:px-8 rounded-full shadow-2xl shadow-smerf-100/50"
        >
          <div className="flex items-center">
            <span className="font-display font-extrabold text-lg sm:text-2xl text-smerf-600 whitespace-nowrap">
              Lodziarnia Smerf
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-500">
            <a href="#hero" className="hover:text-smerf-500 transition-colors">Start</a>
            <a href="#about" className="hover:text-smerf-500 transition-colors">Historia</a>
            <a href="#menu" className="hover:text-smerf-500 transition-colors">Smaki</a>
            <a href="#contact" className="hover:text-smerf-500 transition-colors">Kontakt</a>
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:728816198"
            className="bg-smerf-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-smerf-200 whitespace-nowrap"
          >
            <Phone size={16} />
            728 816 198
          </motion.a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 bg-bubble-pattern opacity-30" />
        <Bubble className="top-1/4 left-10" size={150} />
        <Bubble className="bottom-1/4 right-10" size={200} delay={1} />
        <Bubble className="top-1/3 right-1/4" size={80} delay={2} />
        
        <div className="max-w-7xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-strawberry text-strawberry-text font-black text-sm tracking-widest uppercase mb-8 shadow-sm border border-pink-200"
            >
              <IceCream size={16} className="fill-current" />
              Smak dzieciństwa od 1990
            </motion.div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-9xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
              Najlepsze <br />
              <span className="text-smerf-500 drop-shadow-[0_4px_0_theme(colors.smerf-200)]">Chwile</span> u nas!
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed uppercase tracking-wide">
              Tradycyjne lody, kręcone z miłością w <span className="text-smerf-600 font-bold">Gostyniu</span> i <span className="text-smerf-600 font-bold">Cichowie</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#menu" 
                className="group relative px-10 py-5 bg-smerf-500 text-white rounded-3xl font-black text-xl shadow-2xl shadow-smerf-300 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  Sprawdź menu <ArrowRight />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <WavyDivider />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 aspect-square rounded-[4rem] overflow-hidden shadow-3xl rotate-3 bg-smerf-100">
                <img 
                  src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/674359970_1433674331893229_8552471396811528371_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RBhmVwpUQZ8Q7kNvwEhrI_R&_nc_oc=Adp9h2btpD_icufgv4sYfc74ZQuBDAGF48ue5J3He84G75LsYrEsWUg97TVjYOW3b1k&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=oIAyC4tvDRDWxGCwfzZGiA&_nc_ss=7b2a8&oh=00_Af389v_IItrHvjFQZ8NvTrbOjGKAAzYWC2QGoDZ0F8rjVg&oe=69F7C9D4" 
                  alt="Historia lodziarni" 
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-strawberry/50 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-smerf-200/50 rounded-full blur-3xl opacity-60" />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-12 bg-smerf-500 rounded-full" />
                <span className="font-black text-smerf-500 uppercase tracking-widest text-sm">Nasza Historia</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Z miłości do tradycji od <span className="text-smerf-500">1990</span> roku
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Wszystko zaczęło się od wizji <span className="text-slate-900 font-bold underline decoration-smerf-300 underline-offset-4">Ryszarda Jasika</span>. Chciał stworzyć miejsce, gdzie każdy kęs przywołuje najpiękniejsze wspomnienia.
                </p>
                <p>
                  Nasze lody to nie tylko składniki – to pasja, którą pielęgnujemy od ponad <span className="px-3 py-1 bg-smerf-100 rounded-lg text-smerf-700 font-bold">36 lat</span>. Używamy tylko tego, co najlepsze, by smak pozostał autentyczny i niezapomniany.
                </p>
              </div>
              <div className="mt-12 p-8 rounded-3xl bg-vanilla border-2 border-smerf-100 shadow-xl shadow-smerf-100/20 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-smerf-500 flex items-center justify-center text-white shrink-0 shadow-lg rotate-3">
                  <Star size={32} className="fill-current" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-slate-900">Najlepsza jakość</div>
                  <p className="text-slate-500">Tylko naturalne składniki i świeże owoce każdego dnia.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-smerf-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full rotate-180"><WavyDivider color="fill-white" /></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 mb-6 drop-shadow-sm"
            >
              Nasze <span className="text-smerf-500">HICIORY</span>
            </motion.h2>
            <p className="text-slate-500 text-xl font-bold uppercase tracking-widest">Co dziś wybierzesz?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className={`group relative rounded-[3rem] p-6 transition-all duration-500 ${product.color} hover:bg-white hover:shadow-3xl hover:-translate-y-4`}
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                  <motion.img 
                    animate={{ scale: hoveredProduct === product.id ? 1.15 : 1 }}
                    transition={{ duration: 1 }}
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <motion.div 
                      animate={{ rotate: [0, -10, 0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute top-6 left-6 bg-smerf-500 text-white px-5 py-2 rounded-full font-black text-xs tracking-widest shadow-xl uppercase z-20"
                    >
                      {product.tag}
                    </motion.div>
                  )}
                  <AnimatePresence>
                    {hoveredProduct === product.id && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-smerf-600/20 flex items-center justify-center backdrop-blur-[2px]"
                      >
                         <div className="bg-white/90 p-4 rounded-full shadow-2xl scale-125">
                            <Heart className="text-strawberry-text fill-current" />
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="px-2">
                  <h3 className="font-display font-black text-2xl text-slate-900 mb-4 group-hover:text-smerf-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed opacity-80">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 bg-white relative">
         <WavyDivider top color="fill-smerf-50" />
         
         <div className="max-w-7xl mx-auto px-4">
            <div className="relative bg-smerf-600 rounded-[2.5rem] sm:rounded-[5rem] p-8 sm:p-12 md:p-24 overflow-hidden shadow-4xl shadow-smerf-300">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,_white_20%,_transparent_0)] bg-[size:30px_30px]" />
               
               <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                  <div className="text-white text-center xl:text-left">
                     <motion.h2 
                       initial={{ y: 20, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       className="font-display text-4xl sm:text-5xl md:text-7xl font-black mb-8 transition-transform"
                     >
                       Wpadnij do nas <br />po <span className="italic underline decoration-vanilla decoration-4 underline-offset-8">uśmiech!</span>
                     </motion.h2>
                     <p className="text-xl text-smerf-50/80 mb-12 font-medium max-w-xl mx-auto xl:mx-0">
                        Czekamy na Ciebie w naszych dwóch lokalizacjach. Poczuj smak prawdziwej pasji!
                     </p>
                     
                     <div className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href="tel:728816198"
                          className="bg-white text-smerf-600 px-10 py-5 rounded-[2rem] font-black text-xl flex items-center gap-4 shadow-2xl whitespace-nowrap"
                        >
                          <Phone /> 728 816 198
                        </motion.a>
                        <div className="text-white/80 font-bold flex flex-col items-center xl:items-start">
                           <span className="flex items-center gap-2"><MapPin size={18} /> Gostyń / Cichowo</span>
                           <span className="flex items-center gap-2 mt-2"><Clock size={18} /> Zapraszamy codziennie!</span>
                        </div>
                     </div>
                  </div>
                  
                  <motion.div 
                    initial={{ rotate: 10, scale: 0.9 }}
                    whileInView={{ rotate: -5, scale: 1 }}
                    className="relative hidden xl:block"
                  >
                     <div className="bg-vanilla p-4 rounded-[4rem] shadow-2xl">
                        <img 
                          src={LOGO_URL} 
                          className="w-full h-auto rounded-[3rem]" 
                          alt="Logo Duze" 
                          referrerPolicy="no-referrer"
                        />
                     </div>
                     <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-12 -right-12 w-32 h-32 bg-strawberry rounded-full flex items-center justify-center p-4 text-center shadow-2xl rotate-12"
                     >
                        <span className="font-display font-black text-strawberry-text text-lg leading-tight uppercase">Najlepsze Lody!</span>
                     </motion.div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-vanilla text-center border-t border-smerf-100">
         <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
               <img src={LOGO_URL} className="h-10 w-10 rounded-full" alt="Mini" referrerPolicy="no-referrer" />
               <span className="font-display font-bold text-2xl text-smerf-600">Smerf</span>
            </div>
            <div className="flex gap-4 sm:gap-10 text-xs sm:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
               <a href="#" className="hover:text-smerf-500 transition-colors">Facebook</a>
               <a href="#" className="hover:text-smerf-500 transition-colors">Instagram</a>
               <a href="#" className="hover:text-smerf-500 transition-colors">Opinie</a>
            </div>
            <div className="max-w-2xl text-slate-400 text-xs font-medium px-4">
               © {new Date().getFullYear()} Lodziarnia - Smerf | Tradycja od 1990 roku | Założyciel: Ryszard Jasik. Wszystkie smaki chronione są uśmiechem naszych gości.
            </div>
         </div>
      </footer>
    </div>
  );
}
