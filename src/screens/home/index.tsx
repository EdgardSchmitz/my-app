import { Text, View, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import {Participante} from '../../components/Participante';

export default function Home(){

    function handleParticipantAdd (){
        console.log("Você clicou aqui!");
    }

    function handleParticipantRemove(name: string){
        console.log(`Você clicou para remover ${name}`);
    }


return (
    <View style={styles.container}>

    <Text style={styles.eventName}>
    Nome do Evento</Text>

    <Text style={styles.eventDate}>Sexta, 09 de Fevereiro de 2024.</Text>

    <View style={styles.form}>

    <TextInput 
    style={styles.input} 
    placeholder="Nome do Participante"
    placeholderTextColor="#6b6b6b"
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>

    </View>

    <Participante name="Edgard" onRemove={() => handleParticipantRemove('Edgard')}/>
    
    </View>
)
}