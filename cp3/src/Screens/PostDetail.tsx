import { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function PostDetail() {
  const route = useRoute();
  const { id: postId } = route.params as { id: number };

  const [currentPost, setCurrentPost] = useState<any>(null);
  const [postComments, setPostComments] = useState<any[]>([]);

  useEffect(() => {
    const loadPostData = async () => {
      const postResponse = await axios.get(`https://dummyjson.com/posts/${postId}`);
      const commentsResponse = await axios.get(`https://dummyjson.com/comments/post/${postId}`);
      setCurrentPost(postResponse.data);
      setPostComments(commentsResponse.data.comments);
    };
    loadPostData();
  }, []);

  if (!currentPost) return <Text>Carregando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{currentPost.title}</Text>
      <Text style={styles.body}>{currentPost.body}</Text>
      <Text style={styles.tags}>Tags: {currentPost.tags.join(', ')}</Text>

      <Text style={styles.commentsTitle}>Comentários:</Text>
      {postComments.map((comment) => (
        <View key={comment.id} style={styles.comment}>
          <Text style={styles.commentUser}>{comment.user.username}</Text>
          <Text>{comment.body}</Text>
          <Text style={styles.likes}>❤️ {comment.likes}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold" },
  body: { fontSize: 16, marginVertical: 10 },
  tags: { fontStyle: "italic", marginBottom: 20 },
  commentsTitle: { fontSize: 20, marginTop: 20 },
  comment: { marginBottom: 12, padding: 10, backgroundColor: "#f2f2f2", borderRadius: 8 },
  commentUser: { fontWeight: "bold" },
  likes: { marginTop: 4, color: "red" },
});