// ------------ 1 -------------
console.log('Начало отсчета')

const promiseNum = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Рандомное число через 3 сек...')
       
        let randomNumber = Math.floor(Math.random()*10)
        //resolve(randomNumber)
        reject()
    }, 3000)
})

promiseNum.then(
    number => console.log(number),
    error => console.log("ошибка"))

// ------------ 2 -------------
const sleep = delay =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log('Ожидание всех промисов...')
            let randomNumber = Math.floor(Math.random()*10) 
            resolve(randomNumber)}, delay)
    })
}

Promise.all([sleep(3000),sleep(4000),sleep(5000)]).then((randomNumbers)=>{
    console.log(randomNumbers)
})

//------------ 3 -----------
let pr = new Promise((res,rej) => {
    setTimeout(()=>{
        rej('ku')
    },6000)
})

pr.then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))

//----------- 4 ------------    

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const num = 21
        resolve(num)
    }, 8000)
})

promise
  .then(num => {
    console.log(num)
    return num
})
  .then(num => {
    console.log(num * 2)
});

//--------- 5 ------------

async function asyncPromise(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Asunc/await')
            const num = 21
            resolve(num)
        }, 9000)
    })

    const result1 = await promise 
    console.log(result1)

    const result2 = result1 * 2
    console.log(result2)
}

asyncPromise();



