//This is the container that holds all of "Users"
import React, { useState } from "react";
import User from "./User";
import axios from "axios";

const UserList = ({ theUserList }: any) => {
  const [selectedUser, setSelectedUser] = React.useState<any[]>([]);

  // const [theTaskList, setTaskList] = React.useState<any[]>([]);

  // //Getting Task Data
  // const taskURL = "https://jsonplaceholder.typicode.com/todos";

  // React.useEffect(() => {
  //   axios.get(taskURL).then((response) => {
  //     setTaskList(response.data);
  //   });
  // }, []);

  // if (!theTaskList) return null;
  // //

  return (
    <div>
      {theUserList.map((user: any) => {
        return (
          <User
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default UserList;
