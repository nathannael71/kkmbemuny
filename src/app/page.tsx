// src/app/page.tsx
import { Header } from '@/components/header/Header';
import { HeroSection } from '@/components/section/HeroSection';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/section/Section';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="pt-[44px]">
      <Header />
      
      {/* Main Hero */}
      <HeroSection
        title="iPhone 16 Pro"
        subtitle="Titanium. So strong. So light. So Pro."
        ctaText="Buy"
        ctaLink="/iphone-16-pro"
        secondaryCtaText="Learn more"
        secondaryCtaLink="/iphone-16-pro/learn"
        imageSrc="/placeholder-iphone.jpg"
        imageAlt="iPhone 16 Pro"
        background="black"
        textColor="light"
        imagePosition="background"
        fullHeight
      />
      
      {/* Secondary Hero */}
      <HeroSection
        title="iPhone 16"
        subtitle="A total powerhouse."
        ctaText="Buy"
        ctaLink="/iphone-16"
        secondaryCtaText="Learn more"
        secondaryCtaLink="/iphone-16/learn"
        imageSrc="/placeholder-iphone-regular.jpg"
        imageAlt="iPhone 16"
        background="light"
      />
      
      {/* Products Grid */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="iPad Pro"
            description="Supercharged by M2."
            imageSrc="/placeholder-ipad.jpg"
            href="/ipad-pro"
            background="light"
          />
          <Card
            title="MacBook Air"
            description="Don't take it lightly."
            imageSrc="/placeholder-macbook.jpg"
            href="/macbook-air"
            background="light"
          />
          <Card
            title="Apple Watch Series 10"
            description="A healthy leap ahead."
            imageSrc="/placeholder-watch.jpg"
            href="/apple-watch"
            background="light"
          />
          <Card
            title="AirPods Pro"
            description="Rebuilt from the sound up."
            imageSrc="/placeholder-airpods.jpg"
            href="/airpods-pro"
            background="light"
          />
        </div>
      </Section>
      
      {/* Feature Section */}
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 leading-[1.1] tracking-[-0.003em]">Apple Vision Pro</h2>
            <p className="text-[21px] leading-[1.2381] mb-6">Welcome to the era of spatial computing.</p>
            <div className="flex gap-6">
              <Button variant="link" href="/vision-pro" chevron>Learn more</Button>
              <Button variant="link" href="/vision-pro/order" chevron>Order now</Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-apple-gray-200 rounded-2xl flex items-center justify-center text-apple-gray-400">
              Vision Pro Image Placeholder
            </div>
          </div>
        </div>
      </Section>
      
      {/* Promo Section */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 leading-[1.1] tracking-[-0.003em]">The Apple Experience</h2>
          <p className="text-[21px] leading-[1.2381] mb-6 max-w-[600px] mx-auto">
            Shop online or in store and experience the difference.
          </p>
          <Button variant="primary" href="/store" chevron>Find a store</Button>
        </div>
      </Section>
    </main>
  );
}
