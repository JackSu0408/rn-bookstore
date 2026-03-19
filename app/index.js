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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              author="Tansy E. Hoskins " 
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
  const starArray = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <View style={styles.bookCard}>
      <Image source={cover} style={styles.bookCover} />

      {/* 星星評分區 */}
      <View style={styles.ratingContainer}>
        {starArray.map((isFilled, index) => (
          <Image
            key={index}
            style={styles.starIcon}
            source={isFilled ? starFilled : starEmpty}
          />
        ))}
      </View>

      <Text style={styles.bookTitle} numberOfLines={1}>{title}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
    </View>
  );
};

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
  title: {
    fontSize: 24,
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
  },
  bookCard: {
    width: 150, // 固定的寬度
    marginRight: 20, // 書跟書之間的間距
  },
  bookCover: {
    width: 150,
    height: 220,
    borderRadius: 12, // 圓角效果
    backgroundColor: '#eee', // 圖片載入前的底色
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: "#888",
  },
  ratingContainer: {
    flexDirection: "row",      // 讓星星橫向排隊
    alignItems: "center",      // 垂直置中
    marginBottom: 6,           // 跟下方書名的間距
  },
  starIcon: {
    width: 14,                 // 星星的大小
    height: 14,
    marginRight: 3,            // 星星之間的間距
    resizeMode: 'contain',
  },
});