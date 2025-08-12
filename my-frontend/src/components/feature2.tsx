import { cn } from "@/lib/utils";
import SectionTitle from "@/components/Common/SectionTitle";
import {
  IconCode,
  IconShield,
  IconRocket,
  IconDeviceMobile,
  IconCloudComputing,
  IconLock,
  IconUsers,
  IconChartLine,
  IconSparkles,
  IconDeviceDesktop,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Custom Web Development",
      description:
        "Fully responsive, modern websites built with cutting-edge technologies and frameworks.",
      icon: <IconCode />,
    },
    {
      title: "Identity Verification",
      description:
        "Secure and reliable ID verification services with advanced authentication protocols.",
      icon: <IconShield />,
    },
    {
      title: "Performance Optimization",
      description:
        "Lightning-fast loading times with optimized code, CDN integration, and modern practices.",
      icon: <IconRocket />,
    },
    {
      title: "Mobile-First Design",
      description: "Beautiful, responsive designs that work perfectly on all devices and screen sizes.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud hosting solutions with automatic backups and 99.9% uptime guarantee.",
      icon: <IconCloudComputing />,
    },
    {
      title: "Secure Authentication",
      description:
        "Multi-factor authentication and biometric verification for maximum security.",
      icon: <IconLock />,
    },
    {
      title: "User Management",
      description:
        "Comprehensive user management systems with role-based access control and permissions.",
      icon: <IconUsers />,
    },
    {
      title: "Analytics & Insights",
      description: "Detailed analytics dashboards to track performance, user behavior, and growth metrics.",
      icon: <IconChartLine />,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      {/* Title Card */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -top-10">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50 mb-6">
              <IconSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Web Development & ID Services
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
                Comprehensive Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
                For Modern Businesses
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              From custom web development to secure identity verification, we provide end-to-end solutions that scale with your business needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <IconDeviceDesktop className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Project
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/20">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 dark:from-blue-900/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-100 dark:from-blue-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-blue-600 dark:group-hover/feature:text-blue-400 transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};