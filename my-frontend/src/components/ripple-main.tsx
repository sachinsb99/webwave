import { Ripple } from "@/components/ui/ripple";
export default function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        WEB WAVES
      </p>
      <Ripple />
    </div>
  );
}
