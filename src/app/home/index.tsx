import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/card";
import ReanimatedSwipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { Option } from "../../components/option";
import { useRef } from "react";
export function Home() {
  const openswipeableRef = useRef<SwipeableMethods | null>(null);
  const onSwipeableWillOpen = (direction: "left" | "right", open: SwipeableMethods) => {
    if (direction === "left") {
      console.log("DELETAR");
    } else {
      console.log("EDITAR");
    }
    if (openswipeableRef.current) {
      openswipeableRef.current.close();
    }
    openswipeableRef.current = open;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let current: SwipeableMethods | null = null;
          return (
            <ReanimatedSwipeable
              ref={(ReanimatedSwipeable) => {
                current = ReanimatedSwipeable;
              }}
              containerStyle={styles.reanimatedSwipeableContainer}
              overshootFriction={8}
              onSwipeableWillOpen={(direction) => {
                onSwipeableWillOpen(direction, current as SwipeableMethods);
              }}
              renderRightActions={() => (
                <View style={styles.rightActions}>
                  <Option icon="open-in-new" color="#00b960" />
                  <Option icon="close" color="#3e68d7" />
                </View>
              )}
              renderLeftActions={() => (
                <View style={styles.leftActions}>
                  <Option icon="delete" color="#e83d55" />
                </View>
              )}
            >
              <Card name={item.name} email={item.email} />
            </ReanimatedSwipeable>
          );
        }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
