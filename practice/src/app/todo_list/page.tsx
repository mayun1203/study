import { CurrentDate } from "@/components/todo_list/time"
import { MyToDoList } from "@/components/todo_list";
import { BackColor } from "@/components/todo_list/backcolor";

export default function ToDoList (){

    return(
        <div className="text-center">
            <h1 className="mt-5 text-2xl">< CurrentDate/>-ToDoリスト-</h1>
            < MyToDoList />
            < BackColor/>
        </div>
    );
}