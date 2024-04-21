import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FiGithub />
          </i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FiLinkedin />
          </i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FiMail />
          </i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
