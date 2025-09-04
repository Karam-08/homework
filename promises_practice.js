// Task 1: Creating your first promise

doHomework = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        didHomework = true
        if(didHomework){
            resolve('Homework completed!')
        }else{
            reject('Homework not completed!')
        }
    }, 1000)
})

doHomework
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })

/////////////////////////////////////////////////////


// Task 2: Promise Chaining (UNFINISHED)

function studySubject(subject){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(subject == "Math"){
                resolve("Studied Math!")
            }else{
                reject("I don't want to study that!")
            }
        }, 2000)
    })
}

studySubject("Math")
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(() =>{
        console.log("Now I am ready for the test!");
    })

/////////////////////////////////////////////////////////

// Task 3: Handling Multiple steps

function wakeUp(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Woke up at 7AM!")
        }, 3000) // This would be 1 second after the last function.
    })
}

function eatBreakfast(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Ate Breakfast!")
        }, 2000)
    })
}

function goToSchool(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Reached School on Time!")
        }, 1000)
    })
}

wakeUp()
    .then(result => {
        console.log(result);
        return eatBreakfast();
    })
    .then(result => {
        console.log(result);
        return goToSchool();
    })
    .then(result => {
        console.log(result);
    })
    .finally(() => {
        console.log("End of the day – done or not done.");
    });

/////////////////////////////////////////////////////////

// Extra Challenge: (Optional)

function fetchJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok!')
        }else{
            return response.json()
        }
    })
    .then(data =>{
        console.log(data)
    })
    .catch(error =>{
        console.log(error)
    })
}

fetchJoke();