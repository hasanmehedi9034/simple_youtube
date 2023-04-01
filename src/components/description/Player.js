import React from "react";

export default function Player({ link, title }) {
  return (
    // <!-- video player -->
    <iframe
      width="100%"
      class="aspect-video"
      src={link}
      title={title}
      frameborder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
