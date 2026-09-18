import { Plus } from "lucide-react";
import { useRef } from "react";

// Task追加のコンポーネント
export function CreateTaskForm ({ onSubmit }) {
    const inputRef = useRef(null);

    // Formの送信関数
    const handleSubmit = (e) => {
        // リロード止める
        e.preventDefault();
        // inputに値がない場合はやらない
        if(!inputRef.current){
            return;
        }
        // ?は値があってもなくても（?はオプショナルチェーン）　trim()前後の空白を削除
        const inputValue = inputRef.current?.value.trim();
        if(!inputValue){
            return;
        }
        // タスクを作成　P.227へ
        onSubmit(inputValue);
        // 入力した値をリセット（送信後空白にする）
        inputRef.current.value="";
    };

    return (
        <form className="flex gap-0.5" onSubmit={handleSubmit}>
            <input
             ref={inputRef}
             type="text"
             placeholder="新しいタスクを入力してください"
             className="grow rounded-s border border-gray-300 p-2 bg-white"
             />
             <button
                type="submit"
                className="rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
                aria-label={"タスクを作成する"}
             >
                <Plus className="text-white" />
             </button>
        </form>
    );
}