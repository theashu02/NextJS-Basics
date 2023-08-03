import Loading from "../loading";

async function UserList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function page() {
  let usersData = await UserList();

  return (
    <div>
      <h1>This Show the Data with loading animation</h1>
      {usersData.map((item) => (
        <>
          <div>
            <h1>User Name: {item.firstName}</h1>
          </div>
        </>
      ))}
    </div>
  );
}
