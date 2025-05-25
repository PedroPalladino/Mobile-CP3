import { Post } from "@/types";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

type ListProps = {
  posts: Post[];
};

const List = ({ posts }: ListProps) => {
  return (
    <FlatList
      data={posts}
      style={styles.flatlist}
      renderItem={({ item }) => <ListItem post={item} />}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 30,
    padding: 8,
    gap: 8,
  },
})


export default List;