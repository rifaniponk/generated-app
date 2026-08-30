import {
  Camera,
  Cpu,
  Footprints,
  Gamepad,
  Headphones,
  Laptop,
  Mic,
  Microwave,
  Plane,
  Shirt,
  Watch,
} from "lucide-react";

interface ProductVisualProps {
  icon: string;
  gradient: string;
  className?: string;
}

function glyph(icon: string) {
  switch (icon) {
    case "Headphones":
      return <Headphones className="h-16 w-16 text-white/90" />;
    case "Smartphone":
      return <Laptop className="h-16 w-16 text-white/90" />;
    case "Camera":
      return <Camera className="h-16 w-16 text-white/90" />;
    case "Gamepad":
      return <Gamepad className="h-16 w-16 text-white/90" />;
    case "Plane":
      return <Plane className="h-16 w-16 text-white/90" />;
    case "Shirt":
      return <Shirt className="h-16 w-16 text-white/90" />;
    case "Sneaker":
      return <Footprints className="h-16 w-16 text-white/90" />;
    case "Watch":
      return <Watch className="h-16 w-16 text-white/90" />;
    case "Microwave":
      return <Microwave className="h-16 w-16 text-white/90" />;
    case "Coffee":
      return <Mic className="h-16 w-16 text-white/90" />;
    default:
      return <Cpu className="h-16 w-16 text-white/90" />;
  }
}

export function ProductVisual({ icon, gradient, className = "" }: ProductVisualProps) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="relative flex transition-transform duration-500 hover:scale-105">
        {glyph(icon)}
      </div>
    </div>
  );
}
