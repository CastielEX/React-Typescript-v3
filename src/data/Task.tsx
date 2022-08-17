//This is one single row in Task list
import React, { useState } from "react";
import axios from "axios";

const Task = ({ task }: any) => {
  const [checked, setChecked] = useState(task.completed);

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
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <div>
        <input
          type="checkbox"
          style={{ margin: "0 10px" }}
          checked={checked}
          disabled={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {task.userId}
        {" -"} {task.title}
      </div>
    </div>
  );
};

export default Task;
