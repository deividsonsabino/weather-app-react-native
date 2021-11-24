import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState();

  async function handleData() {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=piracicaba,br&appid=ecaa2fdbff88f4da0abd46935943ad9f&lang=pt_br&units=metric"
      );
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <View style={styles.header}>
            <Text style={styles.city}>Tempo agora em {data.name}</Text>
            <View>
              <Text style={styles.temp}>{data.main.temp.toFixed(0)}ºC</Text>

              {data.weather.map((item) => (
                <Text style={styles.description} key={item.id}>
                  {item.description}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.between}>
            <View>
              <Text style={styles.subtitle}>Min/Max </Text>
            </View>
            <View>
              <Text>
                {data.main.temp_min.toFixed(0)}º /{" "}
                {data.main.temp_max.toFixed(0)}º{" "}
              </Text>
            </View>
          </View>
          <View style={styles.between}>
            <Text style={styles.subtitle}>Umidade </Text>
            <Text>{data.main.humidity.toFixed(0)}%</Text>
          </View>
          <View style={styles.between}>
            <Text style={styles.subtitle}>Pressão </Text>
            <Text>{data.main.pressure.toFixed(0)}hPa</Text>
          </View>
          <View style={styles.between}>
            <Text style={styles.subtitle}>Umidade </Text>
            <Text>{data.main.humidity.toFixed(0)}%</Text>
          </View>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    marginVertical:40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temp: {
    fontSize: 46,
  },
  tempMaxMin: {
    flexDirection: "row",
  },
  city: {
    fontSize: 30,
  },
  description: {
    textAlign: "center",
    fontSize: 20,
    color: "#a0a0a0",
  },
  between: {
    marginVertical:5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize:14
  }
});
