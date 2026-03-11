"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import SplitAbout from "@/components/sections/about/SplitAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Award, Users, Zap, Shield } from "lucide-react";

export default function AboutPage() {
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
        { label: "Business Advisory", href: "/#business-advisory" },
        { label: "Legal & Compliance", href: "/#legal-compliance" },
        { label: "Financial Consulting", href: "/#financial-consulting" },
        { label: "Regulatory Compliance", href: "/#regulatory-compliance" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Blog & Insights", href: "/insights" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Compliance Guides", href: "/guides" },
        { label: "Industry Reports", href: "/reports" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Schedule Consultation", href: "/contact" },
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
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Innova"
          navItems={navItems}
          button={{
            text: "Book Consultation",
            href: "/contact",
          }}
          animateOnLoad={true}
        />
      </div>

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
              description: "Economists, lawyers, and business professionals working in harmony to solve complex challenges",
              icon: Users,
            },
            {
              title: "Efficiency First",
              description: "Fast, impeccable service that respects your time and budget constraints",
              icon: Zap,
            },
            {
              title: "Trusted Advisors",
              description: "Long-term partnerships built on transparency, expertise, and proven results",
              icon: Shield,
            },
            {
              title: "Problem Solving",
              description: "We don't just identify issues—we guide you to the best solutions tailored to your situation",
              icon: Award,
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
                  imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-couch_23-2149915934.jpg",
                  imageAlt: "María García López",
                },
                {
                  id: "2",
                  title: "Carlos Fernández Martinez",
                  subtitle: "Senior Advisor, Legal Compliance",
                  detail: "Legal expert in regulatory frameworks",
                  imageSrc: "http://img.b2bpic.net/free-photo/successful-expert_1098-14503.jpg",
                  imageAlt: "Carlos Fernández Martinez",
                },
                {
                  id: "3",
                  title: "Dr. Javier Ruiz Sánchez",
                  subtitle: "Financial Consultant, Chief Economist",
                  detail: "Advanced economics and financial planning",
                  imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-blond-business-woman-sitting-couch_23-2148095700.jpg",
                  imageAlt: "Dr. Javier Ruiz Sánchez",
                },
              ],
            },
          ]}
        />
      </div>

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