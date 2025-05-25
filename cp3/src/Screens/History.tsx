import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { Post, PostResponse } from "@/types";
import List from "@/Components/Posts/List";

const History = () => {
  const [historyPosts, setHistoryPosts] = useState<Post[]>([]);

  const getHistoryPosts = async () => {
    const { data } = await dummyApi.get<PostResponse>(`posts/tag/history`);
    setHistoryPosts(data.posts);
  };

  useEffect(() => {
    getHistoryPosts();
  }, []);

  return <List posts={historyPosts} />;
};

export default History;