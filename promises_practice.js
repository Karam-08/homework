// Task 1: Creating your first promise

doHomework = newPromise((resolve, reject) =>{
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
        console.log(result)
    })
    .catch(error =>{
        console.log(error);
    })

/////////////////////////////////////////////////////


// Task 2: Promise Chaining

function studySubject(subject){
    return newPromise((resolve, reject) =>{
        setTimeout(() =>{
            subject = "Math"
            if(subject === "Math"){
                resolve("Studied Math!")
            }else{
                reject("I don't want to study that!")
            }
        })
    })
}