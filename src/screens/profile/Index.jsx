import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Avatar from "../../components/profile/avatar/Avatar";
import Options from "../../components/profile/options/Options";
import { useUserProfile } from "../../hooks/useUser";

export default Profile = () => {
  const {isPending, data} = useUserProfile();
  return (
    <View style={styles.profile}>
      <View style={styles.container}>
        <Avatar data={data} isPending={isPending}/>
        <Options />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: "100%",
    height: "100%",
    paddingTop: 60,
    backgroundColor: 'black',
  },
  container: {
    width: "90%",
    height: 300,
    alignSelf: "center",
  },
});
