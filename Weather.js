import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weater-lightning",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Dirizzle: {
        iconName: "cloud-drizzle",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "",
        subtitle: ""
    },
    Mist: {
        iconName:"weather-fog",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Mist",
        subtitle: "Just don't go outside."
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot CHina."
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Sand: {
        iconName: "weather-hazy",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#606c88", "#3f4c6b"],
        title: "",
        subtitle: ""
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["", ""],
        title: "",
        subtitle: ""
    }
}

export default function Weather({temp, condition}) {
    return (
    <LinearGradient 
        colors={weatherOptions[condition].gradient} 
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={[styles.halfContainer, styles.textContainer]}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Dirizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})