"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Clock, FileCheck, Lock, ArrowRight } from "lucide-react";

export default function ContactPage() {
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

      <div id="cta" data-section="cta">
        <SplitAbout
          title="Ready to Transform Your Business?"
          description="Let's discuss how Innova Consulting can solve your most pressing business challenges"
          tag="Next Steps"
          tagIcon={ArrowRight}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Schedule Your Consultation",
              href: "/contact",
            },
            {
              text: "Explore Our Services",
              href: "/#services",
            },
          ]}
          bulletPoints={[
            {
              title: "Free Initial Assessment",
              description: "30-minute consultation to understand your challenges and potential solutions",
              icon: Clock,
            },
            {
              title: "No Long-term Commitment",
              description: "Flexible engagement models tailored to your specific needs and timeline",
              icon: FileCheck,
            },
            {
              title: "Confidential & Professional",
              description: "All discussions protected under strict confidentiality agreements",
              icon: Lock,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-young-business-woman-holding-notepad_171337-8330.jpg?_wi=3"
          imageAlt="Professional Consultation"
          mediaAnimation="slide-up"
          imagePosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

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
            placeholder: "Describe your business challenge or inquiry. What would you like to discuss with our team?",
            rows: 6,
            required: true,
          }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-young-business-woman-holding-notepad_171337-8330.jpg?_wi=4"
          imageAlt="Professional Office Environment"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
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