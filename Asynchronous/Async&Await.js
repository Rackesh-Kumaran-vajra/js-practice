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

async function buyHalwa(){

    try{
        let result = await waitInQueue();
        console.log(result);
    }
    catch(error){
        console.log('halwa over');
    }
   
}

buyHalwa();

