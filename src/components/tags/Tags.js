import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const dispatch = useDispatch();
  const { tags, isError, loading, error } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (!isError && loading) content = <div>Loading...</div>;
  if (isError && !loading) content = <div>{error}</div>;
  if (!isError && tags)
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />);

  return (
    // <!-- Tags -->
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
}
