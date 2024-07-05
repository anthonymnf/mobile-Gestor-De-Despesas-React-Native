import { Image, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./despesa.style.js";

//function Despesa() {
const Despesa = (props) => {
    return <TouchableOpacity onPress={() => props.onClick(0)}>    
    <View style={styles.despesa}>
        <View style={styles.containerIcon}>
            <Image style={styles.despesaIcon}
            source={{uri: props.icon}} 
            />
        </View>

        <View style={styles.containerCategoria}>
            <Text style={styles.despesaCategoria}>{props.categoria}</Text>
            <Text style={styles.despesaDescricao}>{props.descricao}</Text>
        </View>

        <View style={styles.containerValor}>
            <Text style={styles.despesaValor}>
                {props.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
            </Text>
        </View>
        
    </View>
    </TouchableOpacity>
}

export default Despesa;