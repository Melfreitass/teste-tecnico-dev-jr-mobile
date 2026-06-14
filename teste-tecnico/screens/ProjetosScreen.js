import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import projetos from "../data/projetos.js";

export default function ProjetosScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeHeader}>Melissa Freitas</Text>
        <MaterialCommunityIcons name="cog-outline" size={24} color="#FFF" />
      </View>

      <View style={styles.headerMain}>
        <Text style={styles.titulo}>Meus projetos</Text>
        <Text style={styles.subtitulo}>Alguns projetos que desenvolvi</Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={projetos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardProjeto}>
            <View style={styles.topoProjeto}>
              <View style={styles.iconeProjeto}>
                <MaterialCommunityIcons
                  name={item.icone}
                  size={28}
                  color="#caabfd"
                />
              </View>

              <View style={styles.infoProjeto}>
                <Text style={styles.nomeProjeto}>{item.nome}</Text>

                <Text style={styles.descricaoProjeto}>{item.descricao}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.botaoGitHub}
              onPress={() => Linking.openURL(item.github)}
            >
              <Text style={styles.textoGitHub}>Ver no GitHub</Text>

              <MaterialCommunityIcons
                name="open-in-new"
                size={16}
                color="#caabfd"
              />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.contato}>
        <Text style={styles.tituloContato}>Vamos conversar?</Text>
        <Text style={styles.subtituloContato}>Entre em contato comigo!</Text>

        <View style={styles.infoContato}>
          <MaterialCommunityIcons
            name="email-outline"
            size={22}
            color="#caabfd"
          />

          <Text style={styles.textoContato}>
            melissa.g.freitas@portalsesisp.org.br
          </Text>
        </View>

        <View style={styles.infoContato}>
          <MaterialCommunityIcons name="github" size={22} color="#caabfd" />

          <Text style={styles.textoContato}>github.com/Melfreitass</Text>
        </View>

        <View style={styles.infoContato}>
          <MaterialCommunityIcons name="linkedin" size={22} color="#caabfd" />

          <Text style={styles.textoContato}>
            linkedin.com/in/melissa-freitas-3bb7b9377/
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#8E8A99"
          multiline
        />

        <TouchableOpacity
          style={styles.botaoEnviar}
          onPress={() =>
            Alert.alert("Mensagem enviada!", "Obrigado pelo contato.")
          }
        >
          <MaterialCommunityIcons name="send" size={18} color="#FFF" />

          <Text style={styles.textoEnviar}>Enviar mensagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100a1f",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
  },

  nomeHeader: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
  headerMain: {
    marginTop: 25,
    marginBottom: 25,
  },
  titulo: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#BDB7C9",
    fontSize: 14,
    marginTop: 5,
  },
  cardProjeto: {
    backgroundColor: "#17152C",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },

  topoProjeto: {
    flexDirection: "row",
  },

  iconeProjeto: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#221D3C",
    justifyContent: "center",
    alignItems: "center",
  },

  infoProjeto: {
    flex: 1,
    marginLeft: 15,
  },

  nomeProjeto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  descricaoProjeto: {
    color: "#BDB7C9",
    fontSize: 13,
    marginTop: 6,
  },

  botaoGitHub: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#221D3C",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  textoGitHub: {
    color: "#caabfd",
    marginRight: 5,
    fontSize: 13,
  },

  contato: {
    backgroundColor: "#17152C",
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
    marginBottom: 40,
  },

  tituloContato: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },

  subtituloContato: {
    color: "#BDB7C9",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
  },

  infoContato: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  textoContato: {
    color: "#FFF",
    marginLeft: 12,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#221D3C",
    borderRadius: 15,
    padding: 15,
    color: "#FFF",
    minHeight: 100,
    marginTop: 10,
    textAlignVertical: "top",
  },

  botaoEnviar: {
    backgroundColor: "#6D5DF6",
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textoEnviar: {
    color: "#FFF",
    fontWeight: "600",
    marginLeft: 8,
  },
});
