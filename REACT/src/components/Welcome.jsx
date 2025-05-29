function Welcome({batch}){
    function handleClick(){
        alert("Welcome to RIT BootCamp")
    }
    console.log(batch)
    return(
        <>
            <h1>Welcome students from {batch}</h1>
            <button onClick={handleClick}>Display Message</button>
            <button onClick={()=>alert("Hello")}>Display Hello</button>

            
        </>
    )
}
export default Welcome