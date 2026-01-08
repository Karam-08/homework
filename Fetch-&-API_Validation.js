const getQuote = async () =>{
    try{
        const res = await fetch("https://api.kanye.rest/")
        
        if(!res.ok) throw res // Throwing the res itself gives more context than just a simple message.

        const data = await res.json()
        const quote = data.quote
        console.log(quote)
    }catch(err){
        console.error(err)
    }
}

getQuote();