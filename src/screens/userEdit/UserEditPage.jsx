import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function UserEditPage({}) {
  return (
    <View>
        <View>
            <TextInput placeholder='Изменить имя' value/>
        </View>
    </View>
  )
}

export default UserEditPage