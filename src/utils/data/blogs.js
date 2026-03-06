import blog1Img from "../../assets/blogs/blog1.png";
import blog2Img from "../../assets/blogs/blog2.png";
import blog3Img from "../../assets/blogs/blog3.png";
import HighTrafficBlog from "../../components/blog/HighTrafficBlog";
import SaasScalingBlog from "../../components/blog/SaasScalingBlog";
import SecureAIIntegrationBlog from "../../components/blog/SecureAIIntegrationBlog";

export const blogs = [
  {
    slug: "high-traffic-platform-engineering",
    title: "Designing Systems That Perform Under Pressure",
    image: blog1Img,
    category: "Systems Architecture · Cloud & DevOps",
    date: "25 February 2026",
    readTime: "4–5 minutes",
    content: HighTrafficBlog
  },
  {
    slug: "saas-platform-scalability",
    title: "From Startup MVP to Enterprise-Grade Infrastructure",
    image: blog2Img,
    category: "SaaS Engineering · Cloud Architecture · Platform Scalability",
    date: "25 February 2026",
    readTime: "4–5 minutes",
    content: SaasScalingBlog
  },
  {
    slug: "secure-ai-integration",
    title: "Regulated Enterprise Environments",
    image: blog3Img,
    category: "AI Governance · Enterprise Architecture",
    date: "25 February 2026",
    readTime: "8–9 minutes",
    content: SecureAIIntegrationBlog
  }
];