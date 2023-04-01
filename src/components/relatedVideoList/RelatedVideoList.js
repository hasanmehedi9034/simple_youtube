import React from "react";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideoList() {
  return (
    // <!-- related videos -->
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <RelatedVideo />
    </div>
  );
}
