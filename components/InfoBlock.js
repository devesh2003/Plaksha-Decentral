import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native"

function InfoBlock(props) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("AnnouncementDetails",{test: "DADDY"})
        }}>
            <View style={{
                marginVertical: 20,
                backgroundColor: "#656989",
                // backgroundColor: "#F3CB7E",
                height: 224,
                width: 349,
                borderRadius: 17,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "center",
                opacity: 0.7,
                padding: 20,
                boxShadow: "0px 400px 400px rgba(0, 0, 0, 0.25)",
            }}>

                {/* Date & Time  */}
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // backgroundColor: "black",
                    width: "100%",
                }}>
                    <Text style={{
                        color: "white"
                    }}>
                        26/10/2022
                    </Text>
                    <Text style={{
                        color: "white"
                    }}>
                        4:30pm
                    </Text>
                </View>

                {/* Title and Description */}
                <View style={{
                    width: "100%",
                    marginTop: 30
                }}>
                    <Text style={{
                        color: "white",
                        fontSize: 36,

                    }}>
                        Founders Meet
                    </Text>

                    <Text style={{
                        color: "white",
                        fontSize: 24,
                        fontWeight: '100',
                        letterSpacing: 1.8
                    }}>
                        Manas Fuloria and his wife Nidhi are
                    </Text>
                </View>

                {/* Read more */}
                <View style={{
                    width: "100%",
                    // backgroundColor: "black",
                    marginTop: 20
                }}>
                    {props.readMore ? <Text style={{
                        textAlign: "right",
                        color: "white",
                        fontWeight: '100'
                    }}>
                        read more
                    </Text> : null}
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default InfoBlock;