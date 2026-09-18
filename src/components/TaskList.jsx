import { TaskItem } from "./TaskItem";
import { CreateTaskForm } from "./CreateTaskForm";
import { useTasks } from "../hooks/useTasks";

export function TaskList() {
    const { activeTaskList, createTask, updateTask } = useTasks();
    return (
        <div className="relative">
            {/* stickyはスクロールしても入力フォームを固定 */}
            <div className="sticky top-0 flex flex-col items-end gap-2 bg-slate-100 px-10 py-5">
                <div className="w-full">
                    <CreateTaskForm onSubmit={createTask} />
                </div>
            </div>
            <div className="space-y-3 px-10 pb-10">
                {/* taskが0なら */}
                {activeTaskList.length === 0 ? (
                    <p className="text-center text-sm">タスクがありません</p>
                ) : (
                    // taskに何かはいったら
                    activeTaskList.map((task) => (
                        // onChangeをpropsとして渡す（内容はupdateTask）
                        <TaskItem key={task.id} task={task} onChange={updateTask} />
                    ))
                )}
            </div>
        </div>
    )
}