import React from "react";

class TaskList extends React.Component {
  render() {
    const taskList = [
      {
        id: 1,
        name: "吃饭",
        completed: true,
      },
      {
        id: 2,
        name: "睡觉",
        completed: false,
      },
      {
        id: 3,
        name: "敲代码",
        completed: true,
      },
    ];

    // 统计未完成的任务数
    const incompleteCount = taskList.filter((task) => !task.completed).length;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>未完成任务数: {incompleteCount}</h2>
        <div>
          {taskList.map((item) => (
            <div
              key={item.id}
              className={item.completed ? "completed" : "not-completed"}
              style={{
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
                backgroundColor: item.completed ? "#32cd32" : "#ff6347",
                color: "#fff",
              }}
            >
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
