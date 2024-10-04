import { MyToDoList } from "@/components/todo_list";


export default function ToDoList (){
    return(
        <div className="mt text-center">
            <h1 className="mt-5 text-3xl">＜ToDoリスト＞</h1>
            < MyToDoList />
        </div>
    );
}