import { Lightbulb, MessageCircle, ClipboardList, Cog, CheckCircle, Rocket, Monitor } from "lucide-react";

export const steps = [
  {
    label: "Ideation",
    icon: Lightbulb,
    content: ["Goals", "Constraints", "Success criteria"],
  },
  {
    label: "Discussion",
    icon: MessageCircle,
    content: ["Stakeholders", "Feasibility", "Expectations"],
  },
  {
    label: "Strategy",
    icon: ClipboardList,
    content: ["Roadmap", "Milestones", "Tech stack"],
  },
  {
    label: "Agile Build",
    icon: Cog,
    content: ["Sprints", "Iterations", "Testing"],
  },
  {
    label: "Feedback",
    icon: CheckCircle,
    content: ["User input", "Improvements", "Validation"],
  },
  {
    label: "Launch",
    icon: Rocket,
    content: ["Deployment", "Monitoring", "Go-live"],
  },
  {
    label: "Operate",
    icon: Monitor,
    content: ["Maintenance", "Scaling", "Support"],
  },
];
