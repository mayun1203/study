import { EditPage } from "@/components/edit"

export default function Edit () {
    const title = "＜EDIT＞"

    return(
        <div className="text-center text-gray-600">
            <h1 className="mt-8 text-3xl">{ title }</h1>
            <EditPage/>
        </div>
    )
}