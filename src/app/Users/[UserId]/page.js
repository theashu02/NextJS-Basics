import getUsers from '../../../../services/getUsers';

export default async function page(props) {


    const getUserList = getUsers();
    const users = await getUserList;
    const currrentId = props.params.userId;
    const userData = users[currrentId-1];
    console.log(userData);


  return (
    <div>
        <h3>user detail page</h3>
        <h4>Id: {userData.id}</h4>
        <h4>Name: {userData.name}</h4>
        <h4>Website: {userData.website}</h4>
    </div>
  )
}

export async function generateUserDetails(){
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map((user)=>({
        UserId:user.id.toString()
    }))
}
