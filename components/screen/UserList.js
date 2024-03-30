import { useDispatch } from 'react-redux';
import { getUserList } from '../redux/action';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList());
    }, []);
    return (
        <View><Text>helo</Text></View>
    )
}
export default UserList
