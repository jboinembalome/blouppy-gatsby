import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface GoogleAdSenseProps {
  client: string;
  slot: string;
  layout?: string;
  layoutKey?: string;
  format: string;
  responsive?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GoogleAdSense = ({
  client,
  slot,
  style,
  className = "",
  format = "auto",
  layout = "",
  layoutKey = "",
  responsive = "false",
}: GoogleAdSenseProps) => {
  useEffect(() => {
    try {
      if (window) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className={`${className} adsbygoogle`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};

export default GoogleAdSense;
