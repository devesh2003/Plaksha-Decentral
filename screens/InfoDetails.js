import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Linking } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import Rasa from "../components/icons/Rasa";

const links = [
    {
        name: "Art Fair",
        url: "https://plakshauniversity1-my.sharepoint.com/:f:/g/personal/anshul_rana_plaksha_edu_in/EjdofMLd7ptJiX0VIpimcaQBV31WKNQxyZxlIqkaXTDRLQ?e=ExMzrc"
    },
    {
        name: "Plakshathon 2022",
        url: "https://plakshauniversity1-my.sharepoint.com/:f:/g/personal/shaurya_mann_plaksha_edu_in/EgINcv5GNdJEmyTA-i4lXFQB2B4LkbBfpTycA_pE3ELRZQ?e=xsAppx"
    },
    {
        name: "Blood Drive",
        url: "https://plakshauniversity1-my.sharepoint.com/:f:/g/personal/avishi_rajgarhia_plaksha_edu_in/Es-ZQTGfyLZNs02hXXYIL5sBrsUANxYCHNbp31V6UrwF_A?e=w6tlhF"
    },
    {
        name: "POSH",
        url: "https://plakshauniversity1-my.sharepoint.com/:b:/r/personal/anshuman_bhuchar_plaksha_edu_in/Documents/Policies/Other%20Policies/my-Plaksha/Plaksha%20POSH%20policy%20ver4.doc.pdf?csf=1&web=1&e=cUFXrP"
    },
    {
        name: "Freshers '22",
        url: "http://google.com"
    }
]

function Link(props) {
    return (
        <TouchableOpacity onPress={() => {
            props.link ? Linking.openURL(props.link) : null
        }}>
            <View style={{
                backgroundColor: "#637FA4",
                height: 80,
                alignItems: "left",
                justifyContent: "center",
                paddingLeft: 20,
                marginVertical: 15
            }}>

                <Text style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "600",
                }}>
                    {props.name}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

function InfoDetails(props) {
    return (
        <ScrollView style={{
            width: "100%",
            backgroundColor: "#7FB8C0",
        }}>

            <View style={{
                position:"absolute",
                // height: "100%",
                top: 30*2,
            }}>
                <Rasa />
            </View>

            <View style={{
                position: "absolute",
                right: 50,
                top: 75,
            }}>
                <Text style={{
                    fontSize:36,
                    color: "white",
                    textAlign: "right"
                }}>
                    RASA {"\n"} 
                    DRIVE
                </Text>
            </View>

            <View style={{
                // backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                marginTop: 200,
                height: "100%"
            }}>
                <View style={{
                    alignSelf: "center",
                    marginBottom: 33,
                    opacity: 0.6
                }}>
                    <SearchBar />
                </View>

                <View style={{
                    height: "100%",
                    backgroundColor: "#585B84",
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#585B84",
                        marginTop: 58,
                    }}>
                        {links.map( (link) => {
                            return (
                            <Link name={link.name} link={link.url} />
                            )
                        } )}
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default InfoDetails;