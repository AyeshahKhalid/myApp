import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/action';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
const UserList = () => {
    const userList=useSelector((state)=>state.reducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList());
    }, []);
    console.warn(userList)
    return (
        <View><Text>helo</Text></View>
    )
}
export default UserList
