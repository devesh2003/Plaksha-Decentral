import { View,Text,Image, ImageBackground, TextInput } from "react-native";
import Search from "./icons/Search";

function SearchBar(props) {
    return (
        <View style={{
            width: 358,
            height: 44,
            alignItems: "center",
            backgroundColor: "#908C8C",
            borderRadius: 21,
            display: "flex",
            flexDirection: "row",
            padding: 8,
            justifyContent: "space-between",
        }}>
            <Text style={{
                color: "white",
                width: 0,
                height: 0,
            }}>
            </Text>
            <TextInput style={{
                color: "white",
                paddingLeft: 10*2,
                width: "80%",
                textAlign: "center"
            }}
                placeholder="Search type of item"
                placeholderTextColor={"#ffffff"}
                >
            </TextInput>
            {/* <Image source={require('../assets/Search.png')}
                    style={{
                        marginRight: 8,
                    }}
            /> */}
            <View style={{
                marginRight: 8,
                opacity: 0.8
            }}>
                <Search />
            </View>
        </View>
    )
}

export default SearchBar;