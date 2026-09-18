import { Trash2 } from "lucide-react";
import { useTasks } from "../hooks/useTasks";
import { TrashedTaskItem } from "./TrashedTaskItem";


export function TrashedtaskList() {
    // trashedTaskList: ゴミ箱に送ったもの
    // updateTask: TaskListにあったものを移動・修正
    // deleteTask: タスクの削除
    // deleteAllTrashedTsaks: ゴミ箱タスクを全て削除する
    const { trashedTaskList, updateTask, deleteTask, deleteAllTrashedTsaks } = useTasks()


    return (
        <div className="relative">
            <div className="sticky top-0 flex justify-end bg-slate-100 px-10 py-5">
                <button
                onClick={deleteAllTrashedTsaks}
                className="flex items-center gap-1 rounded-md p-2 text-sm text-red-500 transition-colors hover:bg-red-50 disabled:cursor-not-allowed"
                disabled={trashedTaskList.length===0}
                >
                    <Trash2 className="size-4" />
                    ゴミ箱を空にする
                </button>
            </div>
            <div className="space-y-3 px-10 pb-10">
                {trashedTaskList.map((task)=> (
                    <TrashedTaskItem
                    key={task.id}
                    task={task}
                    onRestore={updateTask}
                    onDelete={deleteTask}
                    />
                ))}
            </div>
        </div>
    )
}