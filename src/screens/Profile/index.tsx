import { Feather, Entypo, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';

import {
    Container,
    Header,
    UserName,
    SubHeader

} from "./styles";

export function Home() {
    return (
        <Container>
            <Header>
                <Feather name="lock" size={18} color="black" />
                <UserName>lucasnewlands_</UserName>
                <TouchableOpacity>
                    <Entypo name="chevron-small-down" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Octicons name="diff-added" size={22} color="black" style={{ marginLeft: 90 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons name="menu" size={20} color="black" style={{ marginLeft: 30 }} />
                </TouchableOpacity>
            </Header>
            
            <SubHeader>
                <TouchableOpacity>
                    <View style={{ width: 85, height: 85, backgroundColor: '#FFF', borderRadius: 40, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gray' }}>
                        <Image 
                        source={require('../../assets/userProfile.png')} 
                        style={{ width: 75, height: 75, borderRadius: 40 }} 
                        resizeMode="center"
                        />

                    </View>
                </TouchableOpacity>

            </SubHeader>
        </Container>
    )
}