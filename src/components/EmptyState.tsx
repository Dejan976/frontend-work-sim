

export function EmptyState({message} : {message:string}){

    return(
        <div className="border-2 border-gray-200 border-dashed rounded-2xl px-8 py-12 text-center">
            <h3 className="font-bold">No products here yet</h3>
            <p className="text-gray-600">{message}</p>
        </div>
    )
}