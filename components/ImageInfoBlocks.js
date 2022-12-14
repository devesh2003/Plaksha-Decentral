import { View, Text } from "react-native";

function ImageInfoBlocks(props) {
    return (
        <View style={{
            marginVertical: 20,
            backgroundColor: "#656989",
            // backgroundColor: "#F3CB7E",
            height: 300,
            width: 349,
            borderRadius: 17,
            // justifyContent: "center",
            opacity: 0.7,
            padding: 20,
            boxShadow: "0px 400px 400px rgba(0, 0, 0, 0.25)",
        }}>
            <View style={{
                display: "flex"
            }}>
                <View style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Text style={{
                        color: "white"
                    }}>20/11/2022</Text>
                    <Text style={{
                        color: "white"
                    }}>4:20 pm</Text>

                </View>

            </View>

            <View style={{
                display: "flex"
            }}>
                <View style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Text style={{
                        color: "white"
                    }}>
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                    </Text>
                    <Text style={{
                        color: "white"
                    }}>
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                        Lorem edpd edewd frefre frefreferf frefre
                    </Text>

                </View>

            </View>

        </View>
    )
}

export default ImageInfoBlocks;