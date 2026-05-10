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
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Explore",
          id: "explore",
        },
        {
          name: "Stores",
          id: "stores",
        },
        {
          name: "Deals",
          id: "deals",
        },
        {
          name: "About",
          id: "about",
        },
      ]}
      brandName="Sawgrass Mills"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain",
      }}
      title="Discover Sawgrass Mills®"
      description="South Florida's renowned destination for designer luxury outlets, dining, and family entertainment."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/asian-store-employee-suggesting-trendy-items-client-wheelchair-user_482257-109880.jpg",
          imageAlt: "Luxury shopping mall interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-with-shopping-bags-mall-against-mannequins-showwindow_627829-8550.jpg",
          imageAlt: "Designer brands store front",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-adult-model-indoor-table_1157-3451.jpg",
          imageAlt: "female adult model indoor table",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-woman-enjoying-coffee_23-2148756287.jpg",
          imageAlt: "Stylish young woman enjoying coffee",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-woman-overalls-beret-posed-outdoor-terrace-with-christmas-decorations-garland_627829-6955.jpg",
          imageAlt: "African american woman in overalls and beret",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-hotel-view_1417-1566.jpg",
          imageAlt: "Designer brands store front",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/shopaholics-love_1098-16657.jpg",
          imageAlt: "Luxury shopping mall interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-coffee-cup_23-2149708066.jpg",
          imageAlt: "Front view woman with coffee cup",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-with-shopping-bags-mall_627829-8558.jpg",
          imageAlt: "Girl with shopping bags in the mall",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-with-shopping-bags_1157-33432.jpg",
          imageAlt: "Woman standing with shopping bags",
        },
      ]}
      buttons={[
        {
          text: "Explore Stores",
          href: "#stores",
        },
        {
          text: "See All Deals",
          href: "#deals",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/elegance-blonde-girl-fur-coat-store-fur-coats-leather-jackets_627829-8484.jpg",
          alt: "Elegance blonde girl in fur coat",
        },
        {
          src: "http://img.b2bpic.net/free-photo/friends-having-fun-shopping-together_23-2149273766.jpg",
          alt: "Friends having fun and shopping together",
        },
        {
          src: "http://img.b2bpic.net/free-photo/building-with-colorful-walls_1127-2241.jpg",
          alt: "Building with colorful walls",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mall-america-scenes-cinematic-style_23-2151551214.jpg",
          alt: "Mall of america scenes in cinematic style",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-gathering-near-building-round-railings-daytime_400718-22.jpg",
          alt: "People gathering near building",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Nike",
        },
        {
          type: "text",
          text: "Guess",
        },
        {
          type: "text",
          text: "New Balance",
        },
        {
          type: "text",
          text: "Asics",
        },
        {
          type: "text",
          text: "Pandora",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="World-Class Experience"
      metrics={[
        {
          icon: ShoppingBag,
          label: "Designer Brands",
          value: "350+",
        },
        {
          icon: Utensils,
          label: "Dining Options",
          value: "70+",
        },
        {
          icon: Sparkles,
          label: "Luxury Outlets",
          value: "70",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="deals" data-section="deals">
      <FeatureBorderGlow
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Tag,
          title: "Mother's Day Event",
          description: "Shop Michael Kors latest styles and enjoy 20% off.",
        },
        {
          icon: Gift,
          title: "Designer Gifting",
          description: "Find the perfect gift at Pandora, Sunglass Hut, and more.",
        },
        {
          icon: TrendingUp,
          title: "Member Perks",
          description: "Cash points and perks for shopping online and at the mall.",
        },
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
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Nike",
          name: "Dunk Low Retro",
          price: "$95.00",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-modern-clothing-store-filled-with-formal-wear-designs_482257-93026.jpg",
        },
        {
          id: "p2",
          brand: "Guess Factory",
          name: "Nylon Tote Travel Set",
          price: "$49.99",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/small-purse-studio-still-life_23-2151046466.jpg",
        },
        {
          id: "p3",
          brand: "New Balance",
          name: "530 Pink Sugar",
          price: "$125.00",
          rating: 5,
          reviewCount: "92",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-african-american-boy-gray-sweater-black-sunglasses-posed-street-fashionable-black-guy_627829-3950.jpg",
        },
        {
          id: "p4",
          brand: "OverVue",
          name: "Polarized Sunglasses",
          price: "$24.65",
          rating: 4,
          reviewCount: "45",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-woman-white-dress-summer-cafe-sunglasses-talking-phone_285396-6589.jpg",
        },
        {
          id: "p5",
          brand: "Eliza J",
          name: "Sleeveless Maxi Dress",
          price: "$79.98",
          rating: 5,
          reviewCount: "38",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-gorgeous-young-woman-striped-overall-yellow-sunglasses-posing-with-white-leather-backpack-balcony-modern-glass-building-town_627829-10585.jpg",
        },
        {
          id: "p6",
          brand: "Guess Factory",
          name: "Shaela Snap Wallet",
          price: "$24.95",
          rating: 4,
          reviewCount: "67",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-present-with-ribbon-scissors_23-2148370127.jpg",
        },
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
        {
          id: "n1",
          brand: "Adrianna Papell",
          name: "Fit And Flare Midi",
          price: "$39.98",
          rating: 5,
          reviewCount: "22",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-sneakers-with-copy-space_23-2148523298.jpg",
        },
        {
          id: "n2",
          brand: "Tod's",
          name: "Micro Bag Leather",
          price: "$510.00",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230644.jpg",
        },
        {
          id: "n3",
          brand: "On",
          name: "Cloudboom Max",
          price: "$157.00",
          rating: 5,
          reviewCount: "55",
          imageSrc: "http://img.b2bpic.net/free-photo/young-hipster-blonde-girl-casual-clothes-sunglasses-sitting-steps-against-skyscraper-resting-after-riding-skateboard_613910-6605.jpg",
        },
        {
          id: "n4",
          brand: "Pompeii3",
          name: "Diamond Ring",
          price: "$577.17",
          rating: 5,
          reviewCount: "19",
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-scene-from-ordinary-mall-america_23-2151564091.jpg",
        },
        {
          id: "n5",
          brand: "Tory Burch",
          name: "Black Tote",
          price: "$829.99",
          rating: 5,
          reviewCount: "31",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-street-cafe-smiling-laughs-drinking-coffee-terrace_1321-1403.jpg",
        },
        {
          id: "n6",
          brand: "Lacoste",
          name: "Track Pants",
          price: "$229.64",
          rating: 4,
          reviewCount: "24",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-black-friday-gifts-shopping-bags_23-2148667049.jpg",
        },
      ]}
      title="Fresh Arrivals"
      description="The latest styles just landed in store."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Nike",
        "Guess",
        "New Balance",
        "Asics",
        "Pandora",
        "Michael Kors",
        "Tod's",
      ]}
      title="Beloved Global Brands"
      description="Home to the world's most sought-after retailers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What are the operating hours?",
          content: "10:00AM - 9:00PM daily.",
        },
        {
          id: "f2",
          title: "Are there dining options?",
          content: "Yes, we feature award-winning restaurants and cafes.",
        },
        {
          id: "f3",
          title: "How do I sign up for perks?",
          content: "Join our Simon+ program online or at the customer center.",
        },
      ]}
      title="Need Help?"
      description="Common questions about visiting Sawgrass Mills."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Connect With Us"
      title="Plan Your Visit"
      description="Contact our guest services team for center information."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Sawgrass Mills"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
