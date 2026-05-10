"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Gift, ShoppingBag, Sparkles, Tag, TrendingUp, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Explore",          id: "explore"},
        {
          name: "Stores",          id: "stores"},
        {
          name: "Deals",          id: "deals"},
        {
          name: "About",          id: "about"},
      ]}
      brandName="Sawgrass Mills"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Discover Sawgrass Mills®"
      description="South Florida's renowned destination for designer luxury outlets, dining, and family entertainment."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/asian-store-employee-suggesting-trendy-items-client-wheelchair-user_482257-109880.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/girl-with-shopping-bags-mall-against-mannequins-showwindow_627829-8550.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/female-adult-model-indoor-table_1157-3451.jpg" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/indoor-hotel-view_1417-1566.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/shopaholics-love_1098-16657.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-coffee-cup_23-2149708066.jpg" },
      ]}
      buttons={[
        { text: "Explore Stores", href: "#stores" },
        { text: "See All Deals", href: "#deals" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="World-Class Experience"
      metrics={[
        { icon: ShoppingBag, label: "Designer Brands", value: "350+" },
        { icon: Utensils, label: "Dining Options", value: "70+" },
        { icon: Sparkles, label: "Luxury Outlets", value: "70" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="deals" data-section="deals">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { icon: Tag, title: "Mother's Day Event", description: "Shop Michael Kors latest styles and enjoy 20% off." },
        { icon: Gift, title: "Designer Gifting", description: "Find the perfect gift at Pandora, Sunglass Hut, and more." },
        { icon: TrendingUp, title: "Member Perks", description: "Cash points and perks for shopping online and at the mall." },
      ]}
      title="Exclusive Deals & Steals"
      description="Explore offers and savings from your favorite global and local brands."
    />
  </div>

  <div id="styles" data-section="styles">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", brand: "Nike", name: "Dunk Low Retro", price: "$95.00", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/empty-modern-clothing-store-filled-with-formal-wear-designs_482257-93026.jpg" },
        { id: "p2", brand: "Guess Factory", name: "Nylon Tote Travel Set", price: "$49.99", rating: 4, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/small-purse-studio-still-life_23-2151046466.jpg" },
      ]}
      title="In Season Styles"
      description="Curated collections from top designers to keep you ahead of the trends."
    />
  </div>

  <div id="new-arrivals" data-section="new-arrivals">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "n1", brand: "Adrianna Papell", name: "Fit And Flare Midi", price: "$39.98", rating: 5, reviewCount: "22", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-sneakers-with-copy-space_23-2148523298.jpg" },
        { id: "n2", brand: "Tod's", name: "Micro Bag Leather", price: "$510.00", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230644.jpg" },
      ]}
      title="Fresh Arrivals"
      description="The latest styles just landed in store."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      names={["Nike", "Guess", "New Balance", "Asics", "Pandora"]}
      title="Beloved Global Brands"
      description="Home to the world's most sought-after retailers."
      useInvertedBackground={true}
      textboxLayout="default"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "What are the operating hours?", content: "10:00AM - 9:00PM daily." },
        { id: "f2", title: "Are there dining options?", content: "Yes, we feature award-winning restaurants and cafes." },
      ]}
      title="Need Help?"
      description="Common questions about visiting Sawgrass Mills."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Connect With Us"
      title="Plan Your Visit"
      description="Contact our guest services team for center information."
      buttons={[{ text: "Contact Us", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Sawgrass Mills"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
