"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import SplitAbout from "@/components/sections/about/SplitAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import {
  Sparkles,
  CheckCircle,
  Award,
  Users,
  Zap,
  Shield,
  Lightbulb,
  ArrowRight,
  Clock,
  FileCheck,
  Lock,
} from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Insights", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Services",
      items: [
        { label: "Business Advisory", href: "/services" },
        { label: "Legal & Compliance", href: "/services" },
        { label: "Financial Consulting", href: "/services" },
        { label: "Regulatory Compliance", href: "/services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/" },
        { label: "Our Team", href: "/" },
        { label: "Blog & Insights", href: "/" },
        { label: "Careers", href: "/" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Case Studies", href: "/" },
        { label: "Compliance Guides", href: "/" },
        { label: "Industry Reports", href: "/" },
        { label: "FAQ", href: "/" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Schedule Consultation", href: "/" },
        { label: "Support", href: "mailto:support@innovaconsulting.es" },
        { label: "Madrid Office", href: "#" },
        { label: "Barcelona Office", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Email Newsletter", href: "#" },
        { label: "Contact Phone", href: "tel:+34" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Innova"
          navItems={navItems}
          button={{
            text: "Book Consultation",
            href: "contact",
          }}
          animateOnLoad={true}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Strategic Advisory for Spanish Enterprises"
          description="Unlock your business potential with multidisciplinary expertise in legal, financial, and business advisory. We guide SMEs and entrepreneurs through complex decisions with confidence and efficiency."
          background={{ variant: "noiseDiagonalGradient" }}
          tag="Expert-Driven Solutions"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "Learn More", href: "/services" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/business-meeting-corporate-office-concept_53876-22887.jpg"
          imageAlt="Business strategy consultation"
          mediaAnimation="slide-up"
          marqueeItems={[
            { type: "text", text: "Trusted by 200+ Businesses" },
            { type: "text", text: "15+ Years Experience" },
            { type: "text", text: "Multidisciplinary Team" },
            { type: "text", text: "Spain-Based Excellence" },
          ]}
          marqueeSpeed={35}
          showMarqueeCard={true}
        />
      </div>

      {/* Social Proof Section */}
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="We partner with companies across diverse sectors to drive growth and compliance"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "TechVentures Spain",
            "FinanceHub Madrid",
            "LegalPro Consultancy",
            "ManufacturePlus",
            "RetailConnect",
            "InnovateCorp",
            "GrowthPartners",
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      {/* Services Section */}
      <div id="services" data-section="services">
        <FeatureCardTwentySeven
          title="Our Core Services"
          description="Comprehensive solutions designed for SMEs and entrepreneurs navigating complex business environments"
          tag="Expertise"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          features={[
            {
              id: "business-advisory",
              title: "Business Advisory",
              descriptions: [
                "Strategic growth planning tailored to your market position",
                "Business structure optimization for tax efficiency",
                "Market entry and expansion strategies",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/busy-multicultural-diverse-employees-analysing-annual-financial-statistics-sitting-desk-front-laptop-holding-documents-searching-business-solutions-team-businesspeople-working-company_482257-13550.jpg",
              imageAlt: "Business Advisory Services",
            },
            {
              id: "legal-compliance",
              title: "Legal & Compliance",
              descriptions: [
                "Corporate governance and regulatory compliance",
                "Contract review and negotiation support",
                "Employment law and HR compliance solutions",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/handsome-young-man-working-with-digital-tablet-office_1301-7623.jpg",
              imageAlt: "Legal Compliance Services",
            },
            {
              id: "financial-consulting",
              title: "Financial Consulting",
              descriptions: [
                "Financial planning and forecasting expertise",
                "Cash flow optimization and working capital management",
                "Accounting standards and audit preparation",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377136.jpg",
              imageAlt: "Financial Consulting Services",
            },
            {
              id: "regulatory-compliance",
              title: "Regulatory Compliance",
              descriptions: [
                "Industry-specific regulatory navigation",
                "Compliance audits and risk assessments",
                "Documentation and certification support",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/handsome-young-man-working-with-digital-tablet-office_1301-7623.jpg",
              imageAlt: "Regulatory Compliance",
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Innova Consulting"
          description="We combine decades of collective expertise with a client-first approach to deliver tangible results"
          tag="Our Advantage"
          tagIcon={Award}
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "Multidisciplinary Excellence",
              description:
                "Economists, lawyers, and business professionals working in harmony to solve complex challenges",
              icon: Users,
            },
            {
              title: "Efficiency First",
              description:
                "Fast, impeccable service that respects your time and budget constraints",
              icon: Zap,
            },
            {
              title: "Trusted Advisors",
              description:
                "Long-term partnerships built on transparency, expertise, and proven results",
              icon: Shield,
            },
            {
              title: "Problem Solving",
              description:
                "We don't just identify issues—we guide you to the best solutions tailored to your situation",
              icon: Lightbulb,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/business-meeting-corporate-office-concept_53876-22887.jpg"
          imageAlt="Innova Consulting Team"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Metrics Section */}
      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Proven Track Record"
          description="Our impact speaks through measurable results and client success"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          metrics={[
            {
              id: "1",
              value: "200+",
              title: "Businesses Guided",
              items: [
                "Diverse industries and sectors",
                "SMEs and startups",
                "Strategic growth achieved",
              ],
            },
            {
              id: "2",
              value: "15+",
              title: "Years Excellence",
              items: [
                "Established track record",
                "Market expertise",
                "Client retention 95%+",
              ],
            },
            {
              id: "3",
              value: "98%",
              title: "Client Satisfaction",
              items: [
                "Exceptional results",
                "Professional service",
                "Highly recommended",
              ],
            },
            {
              id: "4",
              value: "8+",
              title: "Industries Served",
              items: [
                "Technology sector",
                "Financial services",
                "Manufacturing and retail",
              ],
            },
          ]}
        />
      </div>

      {/* Team Section */}
      <div id="team" data-section="team">
        <TeamCardEleven
          title="Meet Our Leadership"
          description="A multidisciplinary team of economists, lawyers, and business professionals committed to your success"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          groups={[
            {
              id: "global",
              groupTitle: "Senior Partners",
              members: [
                {
                  id: "1",
                  title: "María García López",
                  subtitle: "Managing Partner, Business Strategy",
                  detail: "20+ years advising Spanish enterprises",
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-couch_23-2149915934.jpg",
                  imageAlt: "María García López",
                },
                {
                  id: "2",
                  title: "Carlos Fernández Martinez",
                  subtitle: "Senior Advisor, Legal Compliance",
                  detail: "Legal expert in regulatory frameworks",
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/successful-expert_1098-14503.jpg",
                  imageAlt: "Carlos Fernández Martinez",
                },
                {
                  id: "3",
                  title: "Dr. Javier Ruiz Sánchez",
                  subtitle: "Financial Consultant, Chief Economist",
                  detail: "Advanced economics and financial planning",
                  imageSrc:
                    "http://img.b2bpic.net/free-photo/thoughtful-blond-business-woman-sitting-couch_23-2148095700.jpg",
                  imageAlt: "Dr. Javier Ruiz Sánchez",
                },
              ],
            },
          ]}
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Client Success Stories"
          description="Real feedback from businesses we've guided through transformative challenges"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",
              name: "Isabel Martínez",
              handle: "CEO, Tech Startup",
              testimonial:
                "Great professionals. Fast and impeccable approach with friendly service. Innova helped us structure our company perfectly for growth.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg",
              imageAlt: "Isabel Martínez",
            },
            {
              id: "2",
              name: "Miguel Gonzalez",
              handle: "Founder, Manufacturing Co.",
              testimonial:
                "Multidisciplinary team with genuine expertise. Trusted advisors who understand our industry challenges deeply.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84879.jpg",
              imageAlt: "Miguel Gonzalez",
            },
            {
              id: "3",
              name: "Elena Rodríguez",
              handle: "Director, Retail Network",
              testimonial:
                "They help you understand what is required and guide you to the best option. Transparent, professional, and results-driven.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-building-street-with-folded-arms_158595-6642.jpg",
              imageAlt: "Elena Rodríguez",
            },
            {
              id: "4",
              name: "Jorge López",
              handle: "Owner, Family Business",
              testimonial:
                "Highly professional, efficient team that resolves issues quickly. We've worked with them for 5+ years with consistent excellence.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-confident-senior-businessman-office_1262-2396.jpg",
              imageAlt: "Jorge López",
            },
            {
              id: "5",
              name: "Lucia Fernandez",
              handle: "Operations Manager, B2B Company",
              testimonial:
                "Excellent service and results. 100% recommended. They went above and beyond to ensure our compliance and growth strategy.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg",
              imageAlt: "Lucia Fernandez",
            },
            {
              id: "6",
              name: "Roberto Moreno",
              handle: "CFO, Financial Services",
              testimonial:
                "They offer solutions to your problems with strategic thinking. Innova has become an integral part of our advisory board.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-confident-businessman_107420-84879.jpg",
              imageAlt: "Roberto Moreno",
            },
          ]}
          speed={40}
        />
      </div>

      {/* CTA Section */}
      <div id="cta" data-section="cta">
        <SplitAbout
          title="Ready to Transform Your Business?"
          description="Let's discuss how Innova Consulting can solve your most pressing business challenges"
          tag="Next Steps"
          tagIcon={ArrowRight}
          tagAnimation="slide-up"
          buttons={[
            { text: "Schedule Your Consultation", href: "contact" },
            { text: "Explore Our Services", href: "/services" },
          ]}
          bulletPoints={[
            {
              title: "Free Initial Assessment",
              description:
                "30-minute consultation to understand your challenges and potential solutions",
              icon: Clock,
            },
            {
              title: "No Long-term Commitment",
              description:
                "Flexible engagement models tailored to your specific needs and timeline",
              icon: FileCheck,
            },
            {
              title: "Confidential & Professional",
              description:
                "All discussions protected under strict confidentiality agreements",
              icon: Lock,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-young-business-woman-holding-notepad_171337-8330.jpg"
          imageAlt="Professional Consultation"
          mediaAnimation="slide-up"
          imagePosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch with Innova"
          description="We're ready to understand your challenges and explore how we can help. Fill out the form below, and our team will respond within 24 business hours."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Your Full Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email Address",
              required: true,
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false,
            },
          ]}
          textarea={{
            name: "message",
            placeholder:
              "Describe your business challenge or inquiry. What would you like to discuss with our team?",
            rows: 6,
            required: true,
          }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-young-business-woman-holding-notepad_171337-8330.jpg"
          imageAlt="Professional Office Environment"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Innova"
          columns={footerColumns}
          copyrightText="© 2025 Innova Consulting Empresarial SL. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}