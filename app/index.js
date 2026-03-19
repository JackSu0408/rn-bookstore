import { StyleSheet, Text, Image, View, ScrollView } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.menuIcon} source={require("../images/icon.png")} />
        <Image style={styles.searchIcon} source={require("../images/icon_search.png")} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Popular Books</Text>
          <View style={{ height: 200, backgroundColor: '#f0f0f0', borderRadius: 10 }} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Newest</Text>
          <View style={{ height: 200, backgroundColor: '#f0f0f0', borderRadius: 10 }} />
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <View style={styles.tabItemContainer}>
          <Image
            style={styles.tabIcon}
            source={require("../images/icon_home_actived.png")} 
          />
          <Text style={styles.tabText}>Home</Text>
        </View>
        <View style={styles.tabItemContainer}>
          <Image 
            style={styles.tabIcon}
            source={require("../images/icon_nav_bookmark.png")} 
          />
          <Text style={styles.tabText}>Wishlist</Text>
        </View>
        <View style={styles.tabItemContainer}>
          <Image 
            style={styles.tabIcon}
            source={require("../images/icon_mybook.png")} 
          />
          <Text style={styles.tabText}>My Books</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
  },
  // 記得幫 Image 設定寬高，否則預設可能是 0x0
  menuIcon: {
    width: 40,
    height: 40,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20, // 增加一點高度比較好按
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: "center", // 讓圖示跟文字水平居中對齊
    justifyContent: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4, // 圖示跟文字之間的間距
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 12,
    color: "#888",
  }
});