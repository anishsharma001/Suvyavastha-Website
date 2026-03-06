import { DollarSign } from "lucide-react";
import { IoMdTrendingUp } from "react-icons/io";
import { MdManageSearch } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";


export const industries = [
  {
    title: "Market Research & Insights",
    icon: IoMdTrendingUp,
    content:
      "Systems for controlled survey execution, traffic orchestration, respondent validation, and long-term data integrity across high-volume research environments.",
  },
  {
    title: "Government & Public Sector",
    icon: MdPeople,
    content:
      "Systems built for regulatory compliance, auditability, controlled access, and uninterrupted service delivery across citizen-facing and internal government platforms.",
  },
  {
    title: "SaaS, Startups & Enterprises",
    icon: MdLightbulbOutline,
    content:
      "Scalable software platforms designed for reliability, operational continuity, and controlled growth as products move from early adoption to enterprise scale.",
  },
  {
    title: "Education & Institutional Platforms",
    icon: MdMenuBook,
    content:
      "Secure and resilient systems for learning management, student data governance, assessments, and institutional operations with long-term data continuity.",
  },
  {
    title: "Analytics & Data Firms",
    icon: MdManageSearch,
    content:
      "High-throughput data platforms engineered for accuracy, pipeline stability, observability, and trustworthy analytics at scale.",
  },
  {
    title: "E-commerce & Digital Operations",
    icon: MdOutlineComputer,
    content:
      "Transaction-critical systems for catalog management, order processing, payments, integrations, and operational stability during traffic spikes.",
  },
  {
    title: "Healthcare & Health Technology",
    icon: MdOutlineHealthAndSafety,
    content:
      "Compliance-ready systems for sensitive health data, clinical workflows, and patient platforms where uptime, privacy, and accuracy are non-negotiable.",
  },
  {
    title: "Internal Platforms & Operational Systems",
    icon: MdOutlineSettings,
    content:
      "Custom internal systems that support business operations, workflows, reporting, and decision-making with reliability over years of use.",
  },
  {
    title: "Fintech & Banking",
    icon: DollarSign,
    content:
      "Secure, regulation-aligned systems for financial workflows, data integrity, transaction processing, and platform reliability under constant scrutiny.",
  },
];