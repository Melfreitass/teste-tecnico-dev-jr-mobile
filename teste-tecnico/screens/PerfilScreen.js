import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.nomeHeader}>Melissa Freitas</Text>
        <MaterialCommunityIcons name="cog-outline" size={24} color="#FFF" />
      </View>
      <View styles={styles.main}>
        <View styles={styles.meuPerfil}>
          <View styles={styles.fotoNome}>
            <Image
              source={require("../assets/minhaFoto.jpg")}
              style={styles.foto}
            />
            <Text style={styles.nome}>Melissa Freitas</Text>
            <Text style={styles.curso}>Desenvolvedora Mobile Jr</Text>
          </View>

          <View style={styles.cardsInfo}>
            <View style={styles.infoCard}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={22}
                color="#caabfd"
              />

              <Text style={styles.infoTexto}>Campinas, SP</Text>
            </View>

            <View style={styles.infoCard}>
              <MaterialCommunityIcons
                name="school-outline"
                size={22}
                color="#caabfd"
              />

              <Text style={styles.infoTexto}>SENAI</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sobreContainer}>
        <Text style={styles.sobreTitulo}>Sobre Mim</Text>

        <View style={styles.sobreCard}>
          <Text style={styles.sobreTexto}>
            Sou estudante de Desenvolvimento de Sistemas e apaixonada por
            tecnologia. Tenho experiência no desenvolvimento de aplicações web e
            mobile utilizando React, React Native e JavaScript.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#100a1f",
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
  meuPerfil: {
    alignItems: "center",
    justifyContent: "center",
  },
  fotoNome: {
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 160,
    height: 160,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 8,
    borderColor: "#342B4B",
  },
  nome: {
    alignSelf: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
  curso: {
    alignSelf: "center",
    color: "#caabfd",
    fontSize: 16,
    fontWeight: "350",
    marginTop: 4,
  },
  cardsInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 25,
  },
  infoCard: {
    backgroundColor: "#17152C",
    width: "45%",
    height: 70,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#24213D",
  },

  infoTexto: {
    color: "#D9D9D9",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 5,
  },
  sobreContainer: {
    marginTop: 30,
    marginHorizontal: 20,
},

sobreTitulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
},

sobreCard: {
    backgroundColor: '#17152C',
    borderRadius: 25,
    padding: 22,
},

sobreTexto: {
    color: '#BDB7C9',
    fontSize: 12,
    lineHeight: 20,
},
});
