import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Web Development",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200 leading-relaxed font-inter">
            Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/services/1687.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="web development"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/services/html-css.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="mobile responsive"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/services/5757453.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="react development"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/services/3196758.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="ui ux design"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Digital Marketing",
      content: (
        <div>
          <p className="mb-8 text-sm font-medium text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200 leading-relaxed font-inter">
            Complete online stores and e-commerce platforms that drive sales and boost your business growth.
          </p>
          <p className="mb-8 text-sm font-medium text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200 leading-relaxed font-inter">
            From custom Shopify themes to full-scale e-commerce solutions with payment gateways, inventory management, and analytics dashboards.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/services/digital-marketing.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="ecommerce store"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/services/1690.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="online shopping"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/services/2063928d.jpg?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="payment processing"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="business analytics"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "IT Services & Automation",
      content: (
        <div>
          <p className="mb-6 text-sm font-medium text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200 leading-relaxed font-inter">
            Comprehensive IT solutions and digital transformation services for modern businesses
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base lg:text-lg dark:text-neutral-300 font-medium">
              ✅ AI Chatbot Integration
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base lg:text-lg dark:text-neutral-300 font-medium">
              ✅ Cloud Migration & DevOps
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base lg:text-lg dark:text-neutral-300 font-medium">
              ✅ Custom CRM Development
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base lg:text-lg dark:text-neutral-300 font-medium">
              ✅ API Development & Integration
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base lg:text-lg dark:text-neutral-300 font-medium">
              ✅ Mobile App Development
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="ai technology"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="cloud computing"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="data analytics"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
              alt="mobile development"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}