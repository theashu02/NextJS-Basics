import Link from "next/link";
import getUsers from "../../../services/getUsers";
import { isTemplateExpression } from "typescript";

export default async function page(props) {
  const getUsersList = getUsers();
  const users = await getUsersList;
  console.log(users);

  return (
    <div>
      <h1>Hello users</h1>
      {users.map((item) => (
        <>
          <h1 key={item.Id}>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </h1>
        </>
      ))}
    </div>
  );
}
