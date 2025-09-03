// Task 1: Creating your first promise

doHomework = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        didHomework = true
        if(didHomework){
            resolve('Homework completed!')
        }else{
            reject('Homework not completed!')
        }
    }, 2000)
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
        })
    })
}

studySubject()
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
