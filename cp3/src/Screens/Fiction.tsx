import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { Post, PostResponse } from "@/types";
import List from "@/Components/Posts/List";

const Fiction = () => {
  const [fictionPosts, setFictionPosts] = useState<Post[]>([]);

  const getFictionPosts = async () => {
    const { data } = await dummyApi.get<PostResponse>(`posts/tag/fiction`);
    setFictionPosts(data.posts);
  };

  useEffect(() => {
    getFictionPosts();
  }, []);

  return <List posts={fictionPosts} />;
};

export default Fiction;