import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconCloudSearch,
  IconCurrencyDollar,
  IconChartHistogram,
  IconDeviceMobileCode,
  IconAlertSquareRoundedFilled,
} from "@tabler/icons-react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="py-12 sm:py-16 md:py-18 lg:pb-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-gray-900  text-3xl sm:text-4xl md:text-5xl">
          Premier AI Features
        </h1>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">
        <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">
          <FeaturesSectionDemo />
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Features;

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI-Powered Personalization",
      description:
        "Our advanced AI dynamically personalizes content, layout, and user experience for maximum engagement and conversion",
      icon: <IconBrain />,
    },
    {
      title: "Premier SEO Optimization",
      description:
        "Advanced SEO strategies powered by AI analytics ensure your brand achieves and maintains top search rankings",
      icon: <IconCloudSearch />,
    },
    {
      title: "Pricing like no other",
      description: "Our prices are best in the market. No cap, no lock .",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Our AI algorithms predict user intent and deliver precisely targeted content and product suggestions",
      icon: <IconChartHistogram />,
    },
    {
      title: "Responsive Excellence",
      description:
        "Premier responsive design ensures flawless experiences across all devices and screen sizes",
      icon: <IconDeviceMobileCode />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconAlertSquareRoundedFilled />,
    },
  ];
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-full mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </motion.div>
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
    <motion.div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 bg-white",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
    >
      <div className="mb-4  relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 pl-10 p">
        {description}
      </p>
    </motion.div>
  );
};
