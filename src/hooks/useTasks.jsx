import { useLocalStorageState } from "./useLocalStorageState";

export function useTasks() {
    const [ taskList, setTaskList ] = useLocalStorageState("taksList", []);

    // ゴミ箱以外を表示　TaskListにあったものを移動・修正
    const activeTaskList = taskList.filter(({ status }) => status !== "trashed");

    // TaskListにあったものを移動・修正
    const createTask = (title) => {
        setTaskList((prevTaskList) => {
            const newTask = {
                id: Date.now(),
                title,
                status: "notStarted",
            };
            return [...prevTaskList, newTask];
        })
    }

    // TaskListにあったものを移動・修正
    const updateTask = (id, updatedTask) => {
        setTaskList((prevTaskList) => {
            return prevTaskList.map((task)=> 
            task.id === id ? {...task, ...updatedTask} : task,
            )
        })
    }

    //ゴミ箱のタスク
    const trashedTaskList = taskList.filter(({status}) => status === "trashed")
    // タスクの削除
    const deleteTask = (id) => {
        setTaskList((prevTaskList) => {
            return prevTaskList.filter((task) => task.id !== id)
        })
    }
    // ゴミ箱タスクを全て削除する
    const deleteAllTrashedTsaks = () => {
        setTaskList((prevTaskList) => {
            return prevTaskList.filter((task) => task.status !== "trashed")
        })
    }
    return {
        // 変数
        activeTaskList,
        // 関数が2つ
        createTask,
        updateTask,
        trashedTaskList,
        deleteTask,
        deleteAllTrashedTsaks
    }
}