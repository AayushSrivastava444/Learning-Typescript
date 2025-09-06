function addTwoo(nums: number): number{
   return "Hello"
}

const getHello=(str: string):string=>{
    return ""
}


const heroes=["Superman", "Batman", "Flash"];
//no need to indicate type string here 
heroes.map((hero)=>{
   return `Hero is ${hero}`
})


//never is used to indicate program termination
function learnNever(errMsg: string): never{
    throw new Error(errMsg)
}