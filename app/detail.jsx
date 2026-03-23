import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

const bookmarkEmpty = require("../images/icon_bookmark.png");
const bookmarkFilled = require("../images/icon_nav_bookmark_actived.png");
const starFilled = require("../images/icon_star_filled.png");
const starEmpty = require("../images/icon_star_empty.png");

export default function Detail() {
    const { title, author, rating } = useLocalSearchParams();
    const router = useRouter();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const toggleBookmark = () => setIsBookmarked(!isBookmarked);
    const starArray = Array.from({ length: 5 }, (_, index) => index < rating);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require("../images/icon_back.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleBookmark}>
                    <Image source={isBookmarked ? bookmarkFilled : bookmarkEmpty} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={require("../images/books/book4.png")} style={styles.bookCover} />
                </View>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
                <View style={styles.ratingRow}>
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
                    <Text style={styles.ratingText}>{rating}.0 / 5.0</Text>
                </View>
                <Text style={styles.description}>
                    A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.
                </Text>

                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>BUY NOW FOR $46.99</Text>
                </TouchableOpacity>
            </View>

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
        paddingTop: 32,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    content: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 30,
    },
    imageContainer: {
        marginVertical: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 20,
    },
    bookCover: {
        width: 220,
        height: 320,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#131313",
        marginTop: 10,
        textAlign: "center",
    },
    author: {
        fontSize: 14,
        color: "#666666",
        marginTop: 5,
    },
    ratingContainer: {
        flexDirection: "row",
        gap: 4, //讓星星之間有一點距離
        marginRight: 10,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    starIcon: {
        width: 14,
        height: 14,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#666666",
    },
    description: {
        textAlign: "center",
        color: "#131313",
        lineHeight: 24,
    },
    buyButton: {
        backgroundColor: "#6200EE",
        width: 190,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 4,
        marginTop: 30,
    },
    buyButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
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
    }
});