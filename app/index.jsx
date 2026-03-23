import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const BookCard = ({ title, author, cover }) => (
  <View style={styles.bookCard}>
    <Image style={styles.bookCover} source={cover} />
    <Text style={styles.bookTitle}>{title}</Text>
    <Text style={styles.bookAuthor}>{author}</Text>
  </View>
);

const starFilled = require("../images/icon_star_filled.png");
const starEmpty = require("../images/icon_star_empty.png");

// --- 子元件：書本卡片 ---
const BookCardNewest = ({ title, author, cover, rating }) => {
  const router = useRouter();
  const starArray = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <TouchableOpacity style={styles.bookCard} onPress={() => router.push({
      pathname: "/detail",
      params: {
        title: title,
        author: author,
        rating: rating
      }
    })}>
      <Image source={cover} style={styles.bookCover} />

      {/* 星星評分區 */}
      < View style={styles.ratingContainer} >
        {
          starArray.map((isFilled, index) => (
            <Image
              key={index}
              style={styles.starIcon}
              source={isFilled ? starFilled : starEmpty}
            />
          ))
        }
      </View >

      <Text style={styles.bookTitle} numberOfLines={1}>{title}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
    </TouchableOpacity >
  );
};

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.menuIcon} source={require("../images/icon_menu.png")} />
        <Image style={styles.searchIcon} source={require("../images/icon_search.png")} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Popular Books</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <BookCard
              title="Fashionopolis"
              author="Dana Thomas"
              cover={require("../images/books/book1.png")} />
            <BookCard
              title="Chanel"
              author="Patrick Mauriès"
              cover={require("../images/books/book2.png")} />
            <BookCard
              title="Calligraphy"
              author="June & Lucy"
              cover={require("../images/books/book3.png")} />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Newest</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <BookCardNewest
              title="Yves Saint Laurent"
              author="Suzy Menkes"
              rating={4}
              cover={require("../images/books/book4.png")}
            />
            <BookCardNewest
              title="The Book of Signs"
              author="Rudolf Koch"
              rating={3}
              cover={require("../images/books/book5.png")}
            />
            <BookCardNewest
              title="Stitched Up"
              author="Tansy E. Hoskins"
              rating={3}
              cover={require("../images/books/book6.png")}
            />
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <View style={styles.tabItemContainer}>
          <Image
            style={styles.tabIcon}
            source={require("../images/icon_home_actived.png")}
          />
          <Text style={[styles.tabText, { color: '#6200EE', fontWeight: 'bold' }]}>Home</Text>
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
    </SafeAreaView>
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
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
  },
  menuIcon: {
    width: 24,
    height: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  bottomTab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#0000000a',
  },
  tabItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 12,
    color: "#666666",
  },
  bookCard: {
    width: 150,
    marginRight: 16,
  },
  bookCover: {
    width: 140,
    height: 200,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#131313",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: "#888",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
    resizeMode: 'contain',
  },
});