import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface SpinningLogoProps {
  logoSrc: string;
  logoAlt: string;
}

export function SpinningLogo({ logoSrc, logoAlt }: SpinningLogoProps) {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState({
    radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
    iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
    ringPadding: RING_PADDING.lg,
    iconSize: ICON_SIZE.lg,
  });

  useEffect(() => {
    if (!width) return;

    if (width < BREAKPOINTS.sm) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
        ringPadding: RING_PADDING.sm,
        iconSize: ICON_SIZE.sm,
      });
    } else if (width < BREAKPOINTS.md) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
        ringPadding: RING_PADDING.md,
        iconSize: ICON_SIZE.md,
      });
    } else {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        iconSize: ICON_SIZE.lg,
      });
    }
  }, [width]);

  return (
    <div
      style={{
        width:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
        height:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
      }}
      className="grid place-content-center rounded-full"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={TRANSITION}
        style={{
          width:
            sizes.radiusToCenterOfIcons -
            sizes.iconWrapperWidth -
            sizes.ringPadding,
          height:
            sizes.radiusToCenterOfIcons -
            sizes.iconWrapperWidth -
            sizes.ringPadding,
        }}
        className="relative grid place-items-center rounded-full bg-white"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={TRANSITION}
          className="p-4 md:p-6"
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-full h-full object-contain"
          />
        </motion.div>
        {ICON_DATA.map((icon, idx) => {
          const degrees = (360 / ICON_DATA.length) * idx;
          return (
            <motion.div
              key={idx}
              style={{
                marginTop:
                  sizes.radiusToCenterOfIcons *
                  Math.sin(degreesToRadians(degrees)),
                marginLeft:
                  sizes.radiusToCenterOfIcons *
                  Math.cos(degreesToRadians(degrees)),
                width: sizes.iconWrapperWidth,
                height: sizes.iconWrapperWidth,
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={TRANSITION}
              className={`absolute grid place-content-center rounded-full shadow-lg p-2 ${icon.className}`}
            >
              <img
                src={icon.url}
                alt={icon.alt}
                style={{
                  width: sizes.iconSize,
                  height: sizes.iconSize,
                }}
                className="object-contain"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const degreesToRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

const ICON_DATA = [
  {
    url: "https://cdn.simpleicons.org/openai/000000",
    alt: "OpenAI GPT AI model integration - Available in EZChat",
    className: "bg-white",
  },
  {
    url: "https://cdn.simpleicons.org/anthropic",
    alt: "Anthropic Claude AI model integration - Available in EZChat",
    className: "bg-white",
  },
  {
    url: "https://cdn.simpleicons.org/googlegemini/4285F4",
    alt: "Google Gemini AI model integration - Available in EZChat",
    className: "bg-white",
  },
  {
    url: "https://cdn.simpleicons.org/perplexity",
    alt: "Perplexity AI model integration - Available in EZChat",
    className: "bg-white",
  },
  {
    url: "https://cdn.simpleicons.org/x",
    alt: "Grok AI model integration - Available in EZChat",
    className: "bg-white",
  },
  {
    url: "https://cdn.simpleicons.org/meta",
    alt: "Meta AI model integration - Available in EZChat",
    className: "bg-white",
  },
];

// Defines the distance from the center of the circle to the center
// of the icons
const RADIUS_TO_CENTER_OF_ICONS = {
  sm: 200,
  md: 260,
  lg: 320,
};
// Defines the width of the icon circles
const ICON_WRAPPER_WIDTH = {
  sm: 70,
  md: 84,
  lg: 96,
};
// Defines the padding between the icon circles and the inner and outer rings
const RING_PADDING = {
  sm: 10,
  md: 12,
  lg: 14,
};
// Defines the icon size
const ICON_SIZE = {
  sm: 32,
  md: 40,
  lg: 48,
};

const BREAKPOINTS = {
  sm: 480,
  md: 768,
};

const TRANSITION = {
  repeat: Infinity,
  repeatType: "loop" as const,
  duration: 50,
  ease: "linear" as const,
};
