import React from "react";
import Link from "gatsby-link";

import Wrapper from "./Wrapper";
import imgSrc from "../../main.jpg";

function HeaderImage() {
  return (
    <Wrapper>
      <div className="cons_w_wrapper">
        <div
          className="fn_cs_hero_header_exclusive fn_elegant"
          data-height="vh"
        >
          <div className="container">
            <div className="content_holder">
              <span
                className="t_image image_card"
                style={{
                  backgroundImage: `url(${imgSrc})`
                }}
              >
                <svg
                  className="fn_elegant_shape first other_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 288 288"
                >
                  <linearGradient
                    id="PSgrad_0"
                    x1="70.711%"
                    x2="0%"
                    y1="70.711%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(255,75,54,0.3)"
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(255,75,54,0.3)"
                      stopOpacity="1"
                    />
                  </linearGradient>
                  <path fill="url(#PSgrad_0)" />
                </svg>
                <svg
                  className="fn_elegant_shape second other_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 288 288"
                >
                  <linearGradient
                    id="PSgrad_1"
                    x1="70.711%"
                    x2="0%"
                    y1="70.711%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(0,126,266,0.3)"
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(0,126,266,0.3)"
                      stopOpacity="1"
                    />
                  </linearGradient>
                  <path fill="url(#PSgrad_1)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="/">
        <div className="content-holder">
          <span
            className="content-holder"
            style={{
              backgroundImage: `url(http://frenify.com/envato/frenify/wp/arlo/1/wp-content/plugins/arlo-core/shortcode/assets/img/placeholders/bro.jpg)`
            }}
          >
            <svg
              className="fn_elegant_shape first other_svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 288 288"
            >
              <linearGradient
                id="PSgrad_0"
                x1="70.711%"
                x2="0%"
                y1="70.711%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stop-color="rgba(255,75,54,0.3)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stop-color="rgba(255,75,54,0.3)"
                  stopOpacity="1"
                />
              </linearGradient>
              <path fill="url(#PSgrad_0)" />
            </svg>
            <svg
              className="fn_elegant_shape second other_svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 288 288"
            >
              <linearGradient
                id="PSgrad_1"
                x1="70.711%"
                x2="0%"
                y1="70.711%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stop-color="rgba(0,126,266,0.3)"
                  stop-opacity="1"
                />
                <stop
                  offset="100%"
                  stop-color="rgba(0,126,266,0.3)"
                  stop-opacity="1"
                />
              </linearGradient>
              <path fill="url(#PSgrad_1)" />
            </svg>
          </span>
        </div>
      </Link> */}
    </Wrapper>
  );
}

export default HeaderImage;
