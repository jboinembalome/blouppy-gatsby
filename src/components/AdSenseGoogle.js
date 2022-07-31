import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const AdSenseGoogle = (props) => {
  useEffect(() => {
    try {
      if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins className={`${props.className} adsbygoogle`}
      style={props.style}
      data-ad-client={props.client}
      data-ad-slot={props.slot}
      data-ad-layout={props.layout}
      data-ad-layout-key={props.layoutKey}
      data-ad-format={props.format}
      data-full-width-responsive={props.responsive}></ins>
  )
};

AdSenseGoogle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  client: PropTypes.string.isRequired,
  slot: PropTypes.string.isRequired,
  layout: PropTypes.string,
  layoutKey: PropTypes.string,
  format: PropTypes.string,
  responsive: PropTypes.string
};

AdSenseGoogle.defaultProps = {
  className: '',
  style: { display: 'block' },
  format: 'auto',
  layout: '',
  layoutKey: '',
  responsive: 'false'
};

export default AdSenseGoogle;
