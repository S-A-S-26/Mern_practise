export default function Home () {
    let a=[1,2,3,4,5,6,7]
    return (
    <>
        <div>Home</div>
        {a.map((v,i)=>(
            <div key={i}>
                <div>{v}</div>
            </div>
        ))}
    </>
    )
}