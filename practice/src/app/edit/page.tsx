import { EditPage } from "@/components/edit"

export default function Edit () {
    const title = "＜EDIT＞"

    return(
        <div className="text-center">
            <h1 className="text-3xl">{ title }</h1>
            <EditPage/>
        </div>
    )
}