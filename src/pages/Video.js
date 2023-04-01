import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/relatedVideoList/RelatedVideoList";
import { fetchVideo } from "../features/video/videoSlice";

export default function Video() {
  const { videoId } = useParams();
  console.log(videoId);
  const dispatch = useDispatch();
  const {
    id,
    avatar,
    title,
    description,
    author,
    date,
    duration,
    views,
    link,
    thumbnail,
    like,
    unlike,
  } = useSelector((state) => state.video.video);

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch]);

  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <Player link={link} title={title} />

              {/* <!-- video description --> */}
              <VideoDescription
                title={title}
                description={description}
                date={date}
              />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
}
