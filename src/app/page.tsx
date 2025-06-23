import { LButton } from "@/components/glass/lbutton";
import { LCard } from "@/components/glass/lcard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative">
      {/* Global SVG Filter for Glass Morphism */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute", visibility: "hidden" }}
      >
        <defs>
          <filter
            id="glass-distortion"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.0099999997764825821 0.0099999997764825821"
              numOctaves="3"
              seed="3000"
            />
            <feDisplacementMap
              in="shape"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
            />
            <feMerge result="effect1_texture_3_21">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535952548450-d7447587e733?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Subtle overlay for better text readability while preserving pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.3px]" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Image
              className="mx-auto mb-8 filter invert"
              src="/next.svg"
              alt="Next.js logo"
              width={200}
              height={42}
              priority
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Liquid Glass UI
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Beautiful glass morphism components with liquid effects.
              Experience the future of modern UI design.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <LButton variant="default" size="lg">
                Get Started
              </LButton>
              <LButton variant="outline" size="lg">
                View Demo
              </LButton>
            </div>
          </div>
        </section>

        {/* Button Showcase Section */}
        <section
          id="showcase"
          className="min-h-screen flex flex-col items-center justify-center p-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Button Variants
            </h2>
            <p className="text-white/80 mb-12 text-lg">
              Hover để xem hiệu ứng background slide-up và bubble water drop
            </p>

            {/* Main Button Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Default</h3>
                <LButton variant="default" size="default" className="w-full">
                  Default Button
                </LButton>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Destructive</h3>
                <LButton
                  variant="destructive"
                  size="default"
                  className="w-full"
                >
                  Delete Action
                </LButton>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Success</h3>
                <LButton variant="success" size="default" className="w-full">
                  Complete Task
                </LButton>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Outline</h3>
                <LButton variant="outline" size="default" className="w-full">
                  Outlined
                </LButton>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Secondary</h3>
                <LButton variant="secondary" size="default" className="w-full">
                  Secondary
                </LButton>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Ghost</h3>
                <LButton variant="ghost" size="default" className="w-full">
                  Ghost Style
                </LButton>
              </div>
            </div>

            {/* Size Variants */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Size Variants</h3>
              <div className="flex flex-wrap gap-4 justify-center items-end">
                <LButton variant="default" size="sm">
                  Small
                </LButton>
                <LButton variant="default" size="default">
                  Default
                </LButton>
                <LButton variant="default" size="lg">
                  Large
                </LButton>
              </div>
            </div>
          </div>
        </section>

        {/* Card Showcase Section */}
        <section
          id="cards"
          className="min-h-screen flex flex-col items-center justify-center p-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Card Variants
            </h2>
            <p className="text-white/80 mb-12 text-lg">
              Liquid Glass Cards với glass morphism và interactive effects
            </p>

            {/* Card Variants Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              <LCard variant="default" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Default Card
                </h3>
                <p className="text-white/80">
                  Clean white border với glass morphism effect.
                </p>
              </LCard>

              <LCard variant="primary" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Primary Card
                </h3>
                <p className="text-white/80">
                  Blue border và background tint với hover shadow.
                </p>
              </LCard>

              <LCard variant="secondary" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Secondary Card
                </h3>
                <p className="text-white/80">
                  Gray border với subtle background tint.
                </p>
              </LCard>

              <LCard variant="accent" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Accent Card
                </h3>
                <p className="text-white/80">
                  Purple border và background tint cho highlight.
                </p>
              </LCard>

              <LCard variant="success" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Success Card
                </h3>
                <p className="text-white/80">
                  Green border cho success states và confirmations.
                </p>
              </LCard>

              <LCard variant="warning" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Warning Card
                </h3>
                <p className="text-white/80">
                  Yellow border cho warnings và alerts.
                </p>
              </LCard>

              <LCard variant="danger" interactive>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Danger Card
                </h3>
                <p className="text-white/80">
                  Red border cho error states và destructive actions.
                </p>
              </LCard>
            </div>

            {/* Size Variants */}
            <div className="space-y-8 mb-12">
              <h3 className="text-2xl font-bold text-white">Size Variants</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                <LCard variant="primary" size="sm" interactive>
                  <h4 className="text-white font-medium text-sm mb-1">Small</h4>
                  <p className="text-white/70 text-xs">Compact card</p>
                </LCard>

                <LCard variant="primary" size="default" interactive>
                  <h4 className="text-white font-medium mb-2">Default</h4>
                  <p className="text-white/70 text-sm">Standard size card</p>
                </LCard>

                <LCard variant="primary" size="lg" interactive>
                  <h4 className="text-white font-medium text-lg mb-2">Large</h4>
                  <p className="text-white/70">Large card with more space</p>
                </LCard>

                <LCard variant="primary" size="xl" interactive>
                  <h4 className="text-white font-medium text-xl mb-3">
                    Extra Large
                  </h4>
                  <p className="text-white/70">
                    Extra large card with maximum space
                  </p>
                </LCard>
              </div>
            </div>

            {/* Intensity Variants */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Glass Intensity</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <LCard variant="accent" intensity="light" interactive>
                  <h4 className="text-white font-medium mb-2">Light</h4>
                  <p className="text-white/70 text-sm">Subtle glass effect</p>
                </LCard>

                <LCard variant="accent" intensity="medium" interactive>
                  <h4 className="text-white font-medium mb-2">Medium</h4>
                  <p className="text-white/70 text-sm">Balanced glass effect</p>
                </LCard>

                <LCard variant="accent" intensity="strong" interactive>
                  <h4 className="text-white font-medium mb-2">Strong</h4>
                  <p className="text-white/70 text-sm">
                    Pronounced glass effect
                  </p>
                </LCard>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section
          id="footer"
          className="min-h-[50vh] flex flex-col items-center justify-center p-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Integrate liquid glass components into your project today
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <LButton variant="success" size="lg">
                Get Started Now
              </LButton>
              <LButton variant="outline" size="lg">
                View on GitHub
              </LButton>
            </div>

            <footer className="flex gap-6 flex-wrap items-center justify-center text-white/60">
              <a
                className="flex items-center gap-2 hover:text-white transition-colors"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                  className="filter invert"
                />
                Learn
              </a>
              <a
                className="flex items-center gap-2 hover:text-white transition-colors"
                href="https://vercel.com/templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                  className="filter invert"
                />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:text-white transition-colors"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                  className="filter invert"
                />
                Next.js
              </a>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
