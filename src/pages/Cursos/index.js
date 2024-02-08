import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, View, StyleSheet } from 'react-native'

export default function Contato() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.titulo}>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS:</Text>
                <Text>O Curso Técnico de Desenvolvimento de Sistemas tem
                    por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos,
                    desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as
                    boas práticas do mercado de tecnologia da informação e as necessidades do usuário.</Text>
            </View>
            <View style={styles.texto}>
                <Text style={styles.titulo}>TÉCNICO EM ELETROMECÂNICA:</Text>
                <Text>O curso técnico de Eletromecânica tem por objetivo habilitar profissionais no planejamento,
                    no controle e na realização de atividades relativas à manutenção eletromecânica, em conformidade às normas
                    técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.</Text>
            </View>
            <View style={styles.texto}>
                <Text style={styles.titulo}>TÉCNICO EM ADMINISTRAÇÃO:</Text>
                <Text >O curso técnico de Administração tem por objetivo habilitar profissionais em realizar e
                    gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e
                    tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e
                    ambiental.</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080',
        gap: 100
    },
    titulo: {
        fontSize: 15
    },
    texto: {
        justifyContent: 'center',
        textAlign: 'justify',
        alignItems: 'center',
        width: 350,
        gap: 2
    }
});
