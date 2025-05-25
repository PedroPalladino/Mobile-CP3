import { Post } from "@/types";
import {
  faEye,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// typing the navigation prop
type RootStackParamList = {
  HomeTab: undefined;
  PostDetail: { id: number };
};

type ListItemProps = {
  post: Post;
};

const ListItem = ({ post }: ListItemProps) => {

  // Using the useNavigation passing type RootStackParamList
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  return (
    <TouchableOpacity onPress={() => navigation.navigate("PostDetail", { id: post.id })}>
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.reactions}>
        <FontAwesomeIcon icon={faHeart} color="red" />
        <Text>{post.reactions.likes}</Text>
        <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
        <Text>{post.reactions.dislikes}</Text>
        <FontAwesomeIcon icon={faEye} />
        <Text>{post.views}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    gap: 4,
  },
  title: {
    fontSize: 16,
    color: "#1f1f1f",
  },
  reactions: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
});

export default ListItem;