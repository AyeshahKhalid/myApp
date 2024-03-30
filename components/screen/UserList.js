import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/action';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
const UserList = () => {
    const userList = useSelector((state) => state.reducer[0].users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList());
    }, []);
    console.warn(userList)
    return (
        <View>
            {
                userList.length ?
                    userList.map((item) =>
                        <Text>{item.firstName}</Text>)
            :null
                    }
        </View>
    )
}
export default UserList
