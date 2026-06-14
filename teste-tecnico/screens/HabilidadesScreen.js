import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import habilidades from "../data/habilidades";

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeHeader}>Melissa Freitas</Text>
        <MaterialCommunityIcons name="cog-outline" size={24} color="#FFF" />
      </View>

      <View style={styles.main}>
        <View style={styles.headerMain}>
          <Text style={styles.titulo}>Minhas habilidades</Text>

          <Text style={styles.subtitulo}>
            Tecnologias e ferramentas que utilizo no dia a dia
          </Text>
        </View>

        <FlatList
          data={habilidades}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.infoHabilidade}>
                <View style={styles.iconeContainer}>
                  <MaterialCommunityIcons
                    name={item.icone}
                    size={24}
                    color="#caabfd"
                  />
                </View>

                <Text style={styles.nomeHabilidade}>{item.nome}</Text>
              </View>

              <MaterialCommunityIcons
                name="check-circle-outline"
                size={24}
                color="#40d3bf"
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100a1f",
  },
  main: {
    flex: 1,
    marginTop: 25,
    margin: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },
  nomeHeader: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
  headerMain: {
    marginBottom: 25,
  },
  titulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  subtitulo: {
    color: "#BDB7C9",
    fontSize: 14,
    marginTop: 5,
  },
  card: {
    backgroundColor: "#17152C",
    borderRadius: 18,
    padding: 16,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoHabilidade: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconeContainer: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#221D3C",

    justifyContent: "center",
    alignItems: "center",
  },

  nomeHabilidade: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 15,
  },
});
