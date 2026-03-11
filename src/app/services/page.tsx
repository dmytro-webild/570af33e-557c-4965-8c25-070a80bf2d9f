"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import SplitAbout from "@/components/sections/about/SplitAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import {
  CheckCircle,
  Award,
  Users,
  Zap,
  Shield,
  Lightbulb,
} from "lucide-react";

export default function ServicesPage() {
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

      {/* Services Overview */}
      <div id="services" data-section="services">
        <FeatureCardTwentySeven
          title="Our Comprehensive Service Portfolio"
          description="Expert solutions tailored to address the specific challenges SMEs and entrepreneurs face in Spain"
          tag="Expertise"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          features={[
            {
              id: "business-advisory",
              title: "Business Advisory",
              descriptions: [
                "Strategic growth planning tailored to your market position and competitive landscape",
                "Business structure optimization for tax efficiency and organizational improvement",
                "Market entry and expansion strategies with risk mitigation planning",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/busy-multicultural-diverse-employees-analysing-annual-financial-statistics-sitting-desk-front-laptop-holding-documents-searching-business-solutions-team-businesspeople-working-company_482257-13550.jpg",
              imageAlt: "Business Advisory Services",
            },
            {
              id: "legal-compliance",
              title: "Legal & Compliance",
              descriptions: [
                "Corporate governance and comprehensive regulatory compliance frameworks",
                "Expert contract review and strategic negotiation support for complex agreements",
                "Employment law and HR compliance solutions protecting your organization",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/handsome-young-man-working-with-digital-tablet-office_1301-7623.jpg",
              imageAlt: "Legal Compliance Services",
            },
            {
              id: "financial-consulting",
              title: "Financial Consulting",
              descriptions: [
                "Comprehensive financial planning and accurate forecasting expertise for growth",
                "Cash flow optimization and working capital management for operational efficiency",
                "Accounting standards compliance and preparation for successful audits",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377136.jpg",
              imageAlt: "Financial Consulting Services",
            },
            {
              id: "regulatory-compliance",
              title: "Regulatory Compliance",
              descriptions: [
                "Industry-specific regulatory navigation and requirements management",
                "Comprehensive compliance audits and thorough risk assessments",
                "Documentation preparation and certification support for certifications",
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

      {/* Why Our Services Stand Out */}
      <div id="about" data-section="about">
        <SplitAbout
          title="Why Our Services Are Different"
          description="We deliver more than consulting—we provide partnership, expertise, and lasting results that transform your business"
          tag="Our Advantage"
          tagIcon={Award}
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "Multidisciplinary Excellence",
              description:
                "Economists, lawyers, and business professionals working in seamless harmony to solve your most complex challenges",
              icon: Users,
            },
            {
              title: "Efficiency First",
              description:
                "Fast, impeccable service delivery that respects your valuable time and budget constraints",
              icon: Zap,
            },
            {
              title: "Trusted Advisors",
              description:
                "Long-term strategic partnerships built on transparency, demonstrated expertise, and proven measurable results",
              icon: Shield,
            },
            {
              title: "Problem-Solving Focus",
              description:
                "We identify root issues and guide you toward the optimal solutions uniquely tailored to your situation",
              icon: Lightbulb,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/business-meeting-corporate-office-concept_53876-22887.jpg"
          imageAlt="Professional Consulting Team"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Service Impact & Results */}
      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Impact of Our Services"
          description="Measurable outcomes that demonstrate the value of Innova Consulting's expertise"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          metrics={[
            {
              id: "1",
              value: "200+",
              title: "Businesses Transformed",
              items: [
                "Across diverse industries and sectors",
                "From startups to established enterprises",
                "Sustained growth and strategic advantages",
              ],
            },
            {
              id: "2",
              value: "15+",
              title: "Years of Excellence",
              items: [
                "Proven track record of success",
                "Deep market and industry expertise",
                "Exceptional client retention at 95%+",
              ],
            },
            {
              id: "3",
              value: "98%",
              title: "Client Satisfaction Rate",
              items: [
                "Consistently exceptional results delivery",
                "Professional and dedicated service",
                "Highly recommended by our clients",
              ],
            },
            {
              id: "4",
              value: "8+",
              title: "Industries Served",
              items: [
                "Technology and innovation sectors",
                "Financial services and banking",
                "Manufacturing, retail, and more",
              ],
            },
          ]}
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