
isHalwaThere = true;

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('buy the halwa')
            }
            else{
                reject('sold out')
            }
        },2000);
    });
}

function buyHalwa(){
    waitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Go Home')
    })
}

buyHalwa();
console.log('hello');
