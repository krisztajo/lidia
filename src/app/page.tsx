import Image from "next/image";
import GoldenLadder3D from "./components/GoldenLadder3D";
import ColorfulLadder from "./components/ColorfulLadder";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Starfield Background */}
      <div className="starfield" />

      {/* ===== NAVIGATION ===== */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#d4a843]">☽</span>
            <span
              className="text-xl tracking-[0.25em] uppercase"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#d4a843",
              }}
            >
              Lídia
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-[#1c1a30]/60">
            <a href="#about" className="hover:text-[#b8882a] transition-colors">
              Küldetés
            </a>
            <a
              href="#services"
              className="hover:text-[#b8882a] transition-colors"
            >
              Szolgáltatások
            </a>
            <a
              href="#levels"
              className="hover:text-[#b8882a] transition-colors"
            >
              Szintek
            </a>
            <a
              href="#contact"
              className="hover:text-[#b8882a] transition-colors"
            >
              Kapcsolat
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0ede6] via-[#ece8de] to-[#f0ede6]" />

        {/* Sacred geometry circles */}
        <div
          className="sacred-circle"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            left: "50%",
            marginLeft: "-300px",
          }}
        />
        <div
          className="sacred-circle"
          style={{
            width: "400px",
            height: "400px",
            top: "20%",
            left: "50%",
            marginLeft: "-200px",
            animationDirection: "reverse",
            animationDuration: "25s",
          }}
        />
        <div
          className="sacred-circle"
          style={{
            width: "200px",
            height: "200px",
            top: "30%",
            left: "50%",
            marginLeft: "-100px",
            animationDuration: "20s",
          }}
        />

        {/* Floating esoteric symbols */}
        <span
          className="float-symbol"
          style={{ top: "15%", left: "8%", animationDelay: "0s" }}
        >
          ✧
        </span>
        <span
          className="float-symbol"
          style={{
            top: "25%",
            right: "12%",
            animationDelay: "2s",
            fontSize: "1.5rem",
          }}
        >
          ◇
        </span>
        <span
          className="float-symbol"
          style={{
            top: "65%",
            left: "5%",
            animationDelay: "4s",
            fontSize: "2.5rem",
          }}
        >
          ⟡
        </span>
        <span
          className="float-symbol"
          style={{ top: "75%", right: "8%", animationDelay: "6s" }}
        >
          ✦
        </span>
        <span
          className="float-symbol"
          style={{
            top: "45%",
            left: "15%",
            animationDelay: "3s",
            fontSize: "1.8rem",
          }}
        >
          ☽
        </span>
        <span
          className="float-symbol"
          style={{
            top: "35%",
            right: "18%",
            animationDelay: "5s",
            fontSize: "1.2rem",
          }}
        >
          ⊹
        </span>
        <span
          className="float-symbol"
          style={{
            top: "85%",
            left: "20%",
            animationDelay: "7s",
            fontSize: "1.6rem",
          }}
        >
          ✶
        </span>
        <span
          className="float-symbol"
          style={{
            top: "55%",
            right: "25%",
            animationDelay: "1s",
            fontSize: "2rem",
          }}
        >
          △
        </span>

        {/* Golden 3D Ladders in Hero */}
        <GoldenLadder3D
          height={120}
          width={48}
          rungs={3}
          top="10%"
          left="5%"
          rotateY={-15}
          delay={0}
          opacity={0.7}
        />
        <GoldenLadder3D
          height={100}
          width={42}
          rungs={3}
          top="30%"
          right="8%"
          rotateY={12}
          delay={1.5}
          opacity={0.5}
        />
        <GoldenLadder3D
          height={140}
          width={50}
          rungs={4}
          bottom="5%"
          left="2%"
          rotateY={-8}
          rotateX={8}
          delay={3}
          opacity={0.4}
        />
        <GoldenLadder3D
          height={110}
          width={44}
          rungs={3}
          top="15%"
          right="3%"
          rotateY={20}
          delay={2}
          opacity={0.6}
        />

        {/* Colorful ladders */}
        <ColorfulLadder
          height={340}
          width={36}
          rungs={9}
          color="rgba(147, 51, 234, 0.78)"
          top="10%"
          left="12%"
          rotation={-5}
          delay={1}
        />
        <ColorfulLadder
          height={300}
          width={32}
          rungs={8}
          color="rgba(59, 130, 246, 0.72)"
          top="40%"
          right="15%"
          rotation={8}
          delay={2}
        />
        <ColorfulLadder
          height={380}
          width={40}
          rungs={10}
          color="rgba(236, 72, 153, 0.70)"
          bottom="5%"
          left="18%"
          rotation={-12}
          delay={0.5}
        />
        <ColorfulLadder
          height={260}
          width={30}
          rungs={7}
          color="rgba(16, 185, 129, 0.72)"
          top="25%"
          right="22%"
          rotation={15}
          delay={3}
        />
        <ColorfulLadder
          height={420}
          width={44}
          rungs={11}
          color="rgba(245, 158, 11, 0.68)"
          top="30%"
          left="2%"
          rotation={-3}
          delay={1.5}
        />
        <ColorfulLadder
          height={320}
          width={34}
          rungs={8}
          color="rgba(239, 68, 68, 0.65)"
          top="5%"
          right="5%"
          rotation={6}
          delay={2.5}
        />
        <ColorfulLadder
          height={280}
          width={30}
          rungs={7}
          color="rgba(20, 184, 166, 0.72)"
          bottom="10%"
          right="2%"
          rotation={-9}
          delay={4}
        />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          {/* Eye symbol */}
          <div className="eye-symbol text-6xl mb-8 text-[#d4a843]">𓂀</div>

          <h1
            className="glow-gold text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#b8882a",
            }}
          >
            Emelkedj Magasabbra
          </h1>

          <p
            className="text-xl md:text-2xl text-[#1c1a30]/75 mb-4 animate-fade-in animate-delay-200"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Prémium coaching a tudatos fejlődésért
          </p>

          <p
            className="text-lg text-[#4a4060]/65 max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-400"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Minden létra egy szintet jelképez. Minden lépcsőfok közelebb visz az
            igazi önmagadhoz.
          </p>

          <a
            href="#about"
            className="btn-gold inline-block animate-fade-in animate-delay-600"
          >
            Fedezd Fel az Utad
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#b8882a]/50 text-2xl">
          ↓
        </div>
      </section>

      {/* ===== ABOUT / PHILOSOPHY SECTION ===== */}
      <section
        id="about"
        className="section-mystic relative overflow-hidden flex flex-col items-center"
        style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
      >
        {/* Floating symbols */}
        <span
          className="float-symbol"
          style={{ top: "10%", left: "5%", animationDelay: "1s" }}
        >
          ⚘
        </span>
        <span
          className="float-symbol"
          style={{
            top: "60%",
            right: "5%",
            animationDelay: "3s",
            fontSize: "2.5rem",
          }}
        >
          ✧
        </span>

        {/* Golden ladders */}
        <GoldenLadder3D
          height={120}
          width={44}
          rungs={3}
          top="5%"
          right="2%"
          rotateY={15}
          delay={1}
          opacity={0.45}
        />
        <ColorfulLadder
          height={340}
          width={36}
          rungs={9}
          color="rgba(139, 92, 246, 0.75)"
          bottom="5%"
          left="1%"
          rotation={-7}
        />

        <div className="relative z-30 w-full max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div
                className="image-frame overflow-hidden"
                style={{ maxWidth: "450px" }}
              >
                <Image
                  src="/lidia1.JPG"
                  alt="Lídia – Coach"
                  width={450}
                  height={600}
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#b8882a] mb-4">
                Küldetés & Filozófia
              </p>
              <h2
                className="glow-gold text-4xl md:text-5xl font-bold mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#b8882a",
                }}
              >
                A Belső Létra
              </h2>
              <div
                className="space-y-6 text-[#1c1a30]/70 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                <p>
                  A létra az emelkedés ősi szimbóluma – az alsó szintekről a
                  magasabb tudatossági állapotok felé vezető út jelképe. A
                  coaching folyamat során minden lépcsőfok egy-egy áttörés,
                  egy-egy felismerés.
                </p>
                <p>
                  Az arany létrák a legmagasabb minőséget képviselik: az a tudás
                  és tapasztalat, amely valódi átalakulást hoz az életedben. Nem
                  egyszerű tanácsadás – hanem mély, transzformatív munka.
                </p>
                <p>
                  A különböző színű létrák az élet különböző területeit
                  szimbolizálják: a lila a spirituális fejlődést, a kék a
                  kommunikációt, a rózsaszín a szeretetet, a zöld a gyógyulást.
                </p>
              </div>
              <div className="divider-gold mt-8" />
              <p
                className="text-[#b8882a]/75 italic mt-6"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.1rem",
                }}
              >
                &ldquo;Ahogyan a fény áttör a sötétségen, úgy vezet el a
                coaching a korlátaidtól a lehetőségeid felé.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section
        id="services"
        className="section-deep relative overflow-hidden flex flex-col items-center"
        style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
      >
        {/* Symbols */}
        <span
          className="float-symbol"
          style={{
            top: "5%",
            left: "10%",
            fontSize: "3rem",
            animationDelay: "0s",
          }}
        >
          ⟡
        </span>
        <span
          className="float-symbol"
          style={{
            bottom: "10%",
            right: "8%",
            fontSize: "2rem",
            animationDelay: "2s",
          }}
        >
          ◈
        </span>

        {/* Ladders */}
        <GoldenLadder3D
          height={130}
          width={46}
          rungs={3}
          top="10%"
          left="2%"
          rotateY={-12}
          delay={0.5}
          opacity={0.3}
        />
        <GoldenLadder3D
          height={110}
          width={42}
          rungs={3}
          bottom="5%"
          right="3%"
          rotateY={18}
          delay={2.5}
          opacity={0.25}
        />
        <ColorfulLadder
          height={300}
          width={36}
          rungs={8}
          color="rgba(251, 146, 60, 0.72)"
          top="5%"
          right="1%"
          rotation={10}
        />
        <ColorfulLadder
          height={340}
          width={40}
          rungs={9}
          color="rgba(34, 211, 238, 0.70)"
          bottom="5%"
          left="1%"
          rotation={-8}
        />

        <div className="relative z-30 w-full max-w-6xl mx-auto px-6 text-center" style={{ paddingTop: '3rem' }}>
          <p className="text-sm tracking-[0.3em] uppercase text-[#b8882a] mb-6">
            Szolgáltatások
          </p>
          <h2
            className="glow-gold text-4xl md:text-5xl font-bold mb-12"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#b8882a",
            }}
          >
            A Minőség Útja
          </h2>
          <p
            className="text-lg text-[#4a4060]/70 max-w-2xl mx-auto mb-16"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Minden program egyedi, mint ahogy minden létra más magasságba vezet.
          </p>

          <div className="grid md:grid-cols-3 gap-14 justify-items-center">
            {/* Service 1 */}
            <div className="relative glow-border p-8 bg-white hover:bg-[#faf8f4] transition-all duration-500 group max-w-sm w-full">
              <div className="text-4xl mb-6 text-[#b8882a] group-hover:scale-110 transition-transform">
                ☽
              </div>
              <h3
                className="text-xl font-semibold mb-4 text-[#1c1a30]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Egyéni Coaching
              </h3>
              <p
                className="text-[#4a4060]/75 leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Személyre szabott, mély transzformatív munka. Egy-az-egyben
                találkozások, ahol a te belső létrád fokait járjuk be együtt.
              </p>
              <div className="divider-gold" />
              <p className="text-[#b8882a]/60 text-sm tracking-widest uppercase">
                Arany Szint
              </p>
            </div>

            {/* Service 2 */}
            <div className="relative glow-border p-8 bg-white hover:bg-[#faf8f4] transition-all duration-500 group max-w-sm w-full">
              <div className="text-4xl mb-6 text-[#b8882a] group-hover:scale-110 transition-transform">
                ✦
              </div>
              <h3
                className="text-xl font-semibold mb-4 text-[#1c1a30]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Csoportos Műhely
              </h3>
              <p
                className="text-[#4a4060]/75 leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Kiscsoportos foglalkozások a közösségi energia erejével. A
                csoport létrái összefonódnak, és együtt emelkedünk.
              </p>
              <div className="divider-gold" />
              <p className="text-[#b8882a]/60 text-sm tracking-widest uppercase">
                Ezüst Szint
              </p>
            </div>

            {/* Service 3 */}
            <div className="relative glow-border p-8 bg-white hover:bg-[#faf8f4] transition-all duration-500 group max-w-sm w-full">
              <div className="text-4xl mb-6 text-[#b8882a] group-hover:scale-110 transition-transform">
                ⊹
              </div>
              <h3
                className="text-xl font-semibold mb-4 text-[#1c1a30]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Online Program
              </h3>
              <p
                className="text-[#4a4060]/75 leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Strukturált online tanfolyam, amely otthonod kényelméből vezet
                végig a tudatos fejlődés lépcsőfokain.
              </p>
              <div className="divider-gold" />
              <p className="text-[#b8882a]/60 text-sm tracking-widest uppercase">
                Bronz Szint
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEVELS / LADDER SHOWCASE SECTION ===== */}
      <section
        id="levels"
        className="relative overflow-hidden flex flex-col items-center"
        style={{
          paddingTop: '10rem',
          paddingBottom: '10rem',
          background:
            "linear-gradient(180deg, #f0ede6, #e8e3d9 20%, #e2dcd0 50%, #e8e3d9 80%, #f0ede6)",
        }}
      >
        {/* Many floating symbols */}
        <span
          className="float-symbol"
          style={{ top: "8%", left: "3%", fontSize: "2rem" }}
        >
          ☆
        </span>
        <span
          className="float-symbol"
          style={{
            top: "20%",
            right: "6%",
            fontSize: "1.5rem",
            animationDelay: "4s",
          }}
        >
          ✧
        </span>
        <span
          className="float-symbol"
          style={{
            top: "50%",
            left: "7%",
            fontSize: "3rem",
            animationDelay: "2s",
          }}
        >
          𓂀
        </span>
        <span
          className="float-symbol"
          style={{
            bottom: "15%",
            right: "10%",
            fontSize: "2rem",
            animationDelay: "6s",
          }}
        >
          ⟡
        </span>
        <span
          className="float-symbol"
          style={{
            top: "70%",
            left: "12%",
            fontSize: "1.8rem",
            animationDelay: "1s",
          }}
        >
          ◇
        </span>
        <span
          className="float-symbol"
          style={{
            top: "30%",
            right: "15%",
            fontSize: "2.2rem",
            animationDelay: "3s",
          }}
        >
          ✶
        </span>

        {/* Golden 3D Ladders at various levels - THE MAIN SHOWCASE */}
        {/* Level 1 - Ground level */}
        <GoldenLadder3D
          height={90}
          width={40}
          rungs={3}
          bottom="5%"
          left="10%"
          rotateY={-10}
          delay={0}
          opacity={0.9}
          zIndex={15}
        />
        <GoldenLadder3D
          height={95}
          width={42}
          rungs={3}
          bottom="5%"
          right="15%"
          rotateY={12}
          delay={1}
          opacity={0.85}
          zIndex={15}
        />

        {/* Level 2 - Mid-low level */}
        <GoldenLadder3D
          height={110}
          width={46}
          rungs={3}
          bottom="20%"
          left="20%"
          rotateY={-8}
          rotateX={3}
          delay={0.5}
          opacity={0.75}
          zIndex={14}
        />
        <GoldenLadder3D
          height={105}
          width={44}
          rungs={3}
          bottom="18%"
          right="8%"
          rotateY={15}
          delay={2}
          opacity={0.7}
          zIndex={14}
        />

        {/* Level 3 - Middle level */}
        <GoldenLadder3D
          height={130}
          width={50}
          rungs={4}
          top="35%"
          left="5%"
          rotateY={-15}
          rotateX={5}
          delay={1.5}
          opacity={0.6}
          zIndex={12}
        />
        <GoldenLadder3D
          height={125}
          width={48}
          rungs={4}
          top="30%"
          right="5%"
          rotateY={10}
          rotateX={8}
          delay={3}
          opacity={0.55}
          zIndex={12}
        />

        {/* Level 4 - High level */}
        <GoldenLadder3D
          height={150}
          width={55}
          rungs={4}
          top="15%"
          left="15%"
          rotateY={-5}
          rotateX={10}
          delay={2.5}
          opacity={0.5}
          zIndex={11}
        />
        <GoldenLadder3D
          height={160}
          width={58}
          rungs={4}
          top="10%"
          right="12%"
          rotateY={8}
          rotateX={6}
          delay={0.8}
          opacity={0.45}
          zIndex={11}
        />

        {/* Level 5 - Highest / enlightenment */}
        <GoldenLadder3D
          height={180}
          width={62}
          rungs={5}
          top="2%"
          left="35%"
          rotateY={0}
          rotateX={12}
          delay={4}
          opacity={0.4}
          zIndex={10}
        />

        {/* Many colorful ladders scattered around – all pushed to extreme edges */}
        <ColorfulLadder
          height={220}
          width={30}
          rungs={6}
          color="rgba(168, 85, 247, 0.75)"
          top="10%"
          left="1%"
          rotation={-10}
          delay={0}
        />
        <ColorfulLadder
          height={280}
          width={34}
          rungs={7}
          color="rgba(59, 130, 246, 0.72)"
          top="35%"
          right="1%"
          rotation={5}
          delay={1}
        />
        <ColorfulLadder
          height={200}
          width={28}
          rungs={5}
          color="rgba(236, 72, 153, 0.70)"
          bottom="20%"
          left="2%"
          rotation={-15}
          delay={2}
        />
        <ColorfulLadder
          height={320}
          width={38}
          rungs={8}
          color="rgba(16, 185, 129, 0.68)"
          top="50%"
          right="2%"
          rotation={8}
          delay={0.5}
        />
        <ColorfulLadder
          height={240}
          width={32}
          rungs={6}
          color="rgba(245, 158, 11, 0.75)"
          top="20%"
          right="1%"
          rotation={-3}
          delay={1.5}
        />
        <ColorfulLadder
          height={290}
          width={36}
          rungs={7}
          color="rgba(244, 63, 94, 0.68)"
          bottom="10%"
          right="2%"
          rotation={12}
          delay={3}
        />
        <ColorfulLadder
          height={200}
          width={26}
          rungs={5}
          color="rgba(14, 165, 233, 0.72)"
          top="60%"
          left="1%"
          rotation={-7}
          delay={2.5}
        />
        <ColorfulLadder
          height={340}
          width={40}
          rungs={9}
          color="rgba(192, 132, 252, 0.65)"
          bottom="25%"
          left="2%"
          rotation={-4}
          delay={4}
        />

        {/* Content – white card keeps text readable above decorative ladders */}
        <div className="relative z-30 w-full max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white/97 rounded-lg px-8 py-10 shadow-md border border-[#b8882a]/15">
            <p className="text-sm tracking-[0.3em] uppercase text-[#b8882a] mb-4">
              A Fejlődés Szintjei
            </p>
            <h2
              className="glow-gold text-4xl md:text-5xl font-bold mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#b8882a",
              }}
            >
              Az Arany Létrák Útja
            </h2>
            <p
              className="text-lg text-[#4a4060]/70 max-w-2xl mx-auto mb-12"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Minden arany létra egy szintet képvisel a fejlődés útján. Minél
              magasabbra emelkedsz, annál tisztábban látod a világot és
              önmagadat.
            </p>

            {/* Level descriptions */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full border border-[#b8882a]/35 text-xl text-[#b8882a] pulse-glow bg-[#fdf9f3]">
                  I
                </div>
                <h3
                  className="text-xl text-[#1c1a30] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Ébredés – Az Első Lépcsőfok
                </h3>
                <p
                  className="text-[#4a4060]/75"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Felismered, hogy több van benned, mint amit eddig megéltél. Az
                  első arany létra megjelenik az életedben.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full border border-[#b8882a]/35 text-xl text-[#b8882a] pulse-glow bg-[#fdf9f3]">
                  II
                </div>
                <h3
                  className="text-xl text-[#1c1a30] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Tisztulás – A Belső Munka
                </h3>
                <p
                  className="text-[#4a4060]/75"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Elengedted a régi mintákat és hiedelmeket. A létra fokai
                  stabilabbá válnak alattad.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full border border-[#b8882a]/35 text-xl text-[#b8882a] pulse-glow bg-[#fdf9f3]">
                  III
                </div>
                <h3
                  className="text-xl text-[#1c1a30] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Átalakulás – Az Arany Szint
                </h3>
                <p
                  className="text-[#4a4060]/75"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Az igazi transzformáció. A létra aranyból van – a te saját
                  igazságod fénye vezet.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full border border-[#b8882a]/35 text-xl text-[#b8882a] pulse-glow bg-[#fdf9f3]">
                  IV
                </div>
                <h3
                  className="text-xl text-[#1c1a30] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Megvilágosodás – A Csúcs
                </h3>
                <p
                  className="text-[#4a4060]/75"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  A legmagasabb szint, ahol a létra a végtelen felé mutat. Innen
                  már te vezeted másokat felfelé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL / QUOTE SECTION ===== */}
      <section
        className="section-deep relative overflow-hidden flex flex-col items-center"
        style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
      >
        <GoldenLadder3D
          height={100}
          width={40}
          rungs={3}
          top="10%"
          right="5%"
          rotateY={15}
          delay={1}
          opacity={0.3}
        />
        <ColorfulLadder
          height={280}
          width={32}
          rungs={7}
          color="rgba(168, 85, 247, 0.72)"
          bottom="10%"
          left="5%"
          rotation={-5}
        />

        <div className="relative z-30 w-full max-w-3xl mx-auto px-6 text-center">
          <div className="text-6xl text-[#b8882a]/25 mb-6">&ldquo;</div>
          <blockquote
            className="text-2xl md:text-3xl text-[#1c1a30]/70 leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Az igazi utazás nem kifelé vezet, hanem befelé. A létra, amelyen
            felmászol, mindig is benned volt – csak rá kellett találnod.
          </blockquote>
          <div className="divider-gold" />
          <p className="text-[#b8882a] mt-6 tracking-widest uppercase text-sm">
            — Lídia
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="section-deep relative overflow-hidden flex flex-col items-center"
        style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
      >
        {/* Symbols */}
        <span
          className="float-symbol"
          style={{
            top: "10%",
            left: "8%",
            fontSize: "2rem",
            animationDelay: "1s",
          }}
        >
          ✧
        </span>
        <span
          className="float-symbol"
          style={{
            bottom: "15%",
            right: "10%",
            fontSize: "2.5rem",
            animationDelay: "3s",
          }}
        >
          ☽
        </span>

        {/* Ladders */}
        <GoldenLadder3D
          height={120}
          width={42}
          rungs={3}
          top="5%"
          left="2%"
          rotateY={-10}
          delay={0}
          opacity={0.45}
        />
        <GoldenLadder3D
          height={110}
          width={40}
          rungs={3}
          bottom="10%"
          right="2%"
          rotateY={14}
          delay={2}
          opacity={0.4}
        />
        <ColorfulLadder
          height={300}
          width={36}
          rungs={8}
          color="rgba(180, 100, 40, 0.72)"
          top="10%"
          right="1%"
          rotation={7}
        />
        <ColorfulLadder
          height={270}
          width={32}
          rungs={7}
          color="rgba(80, 80, 200, 0.70)"
          bottom="10%"
          left="1%"
          rotation={-10}
        />

        <div className="relative z-30 w-full max-w-xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#b8882a] mb-4">
            Kapcsolat
          </p>
          <h2
            className="glow-gold text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#b8882a",
            }}
          >
            Vedd Fel a Kapcsolatot
          </h2>
          <p
            className="text-lg text-[#4a4060]/70 mb-12"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Készen állsz arra, hogy megtedd az első lépést? Írj nekem bátran –
            együtt megtaláljuk a te utadat.
          </p>

          <div className="glow-border p-10 bg-white">
            <div className="text-5xl text-[#b8882a]/30 mb-4">✉</div>
            <p
              className="text-sm tracking-[0.2em] uppercase text-[#b8882a]/70 mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              E-mail
            </p>
            <a
              href="mailto:lidia@coaching.hu"
              className="text-2xl md:text-3xl font-semibold text-[#1c1a30] hover:text-[#b8882a] transition-colors"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              lidia@coaching.hu
            </a>
            <div className="divider-gold" />
            <p
              className="text-[#4a4060]/50 text-base"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Általában 24 órán belül válaszolok. 🤍
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 border-t border-[#b8882a]/15">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-3xl text-[#b8882a]/35 mb-4">☽ ✦ ☾</div>
          <p className="text-[#1c1a30]/30 text-sm tracking-widest uppercase mb-2">
            Lídia Coaching
          </p>
          <p className="text-[#1c1a30]/20 text-xs">
            &copy; 2026 Minden jog fenntartva. A fény útja benned kezdődik.
          </p>
        </div>
      </footer>
    </div>
  );
}
