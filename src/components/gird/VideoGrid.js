import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  const dispatch = useDispatch();
  const { videos, isError, loading, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (!isError && loading) content = <div>Loading...</div>;
  if (isError && !loading) content = <div>{error}</div>;
  if (!isError && videos)
    content = videos.map((video) => <VideoGridItem video={video} />);

  return (
    // <!-- Video Grid -->
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}

          {/* <!-- error section
                <div className="col-span-12">some error happened</div> --> */}
        </div>
      </section>
    </section>
  );
}
