import Link from "next/link";
import {
  CodeBracketIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: string;
  startingPrice?: string;
  variant?: "default" | "compact";
}

const iconMap = {
  code: CodeBracketIcon,
  server: ServerStackIcon,
  shield: ShieldCheckIcon,
  headset: LifebuoyIcon,
};

export default function ServiceCard({
  title,
  description,
  features,
  href,
  icon,
  startingPrice,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || CodeBracketIcon;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <Icon className="h-12 w-12 text-accent mb-4" />
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-text-light text-sm">{description}</p>
      </Link>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <Icon className="h-16 w-16 text-accent mb-6" />
      <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
      <p className="text-text-light mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-text-dark">{feature}</span>
          </li>
        ))}
      </ul>
      {startingPrice && (
        <p className="text-sm text-text-light mb-4">
          Starting at <span className="font-semibold text-primary">{startingPrice}</span>
        </p>
      )}
      <Link
        href={href}
        className="inline-flex items-center text-accent font-medium hover:text-primary transition-colors group"
      >
        View Details
        <svg
          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
