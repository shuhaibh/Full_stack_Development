function Greeting({name}) {
  function timeColor(){
    const d = new Date()
    let hour = d.getHours()
    console.log(hour)
    if(hour > 0 && hour < 6)
        return "rgb(1, 9, 52)"
    else if(hour > 6 && hour < 12)
        return "rgb(254, 242, 78)"
    else if(hour > 12 && hour < 18)
        return "rgb(233, 134, 4)"
    else
        return "rgb(4, 27, 141)"
  }
  return (
    <>
    <h1 style={{color:timeColor()}}>Hello {name}</h1>
    </> 
  )
}

export default Greeting
