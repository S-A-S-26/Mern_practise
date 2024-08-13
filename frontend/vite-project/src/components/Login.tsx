export default function Login (){
    return (
    <>
        <div className="grid place-items-center h-full">
            <div className="border rounded-sm">
                <h3 className="p-4">Login</h3>
                <div className="flex flex-col">
                    {/* <label>Input</label> */}
                    <input className="text-center border-b m-2 bg-none" type="text" placeholder="Input"/>
                    <input className="text-center border-b m-2" type="text" placeholder="Input"/>
                </div>
            </div>
        </div>
    </>
    )
}