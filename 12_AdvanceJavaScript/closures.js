//closures are the function binded with it's lexical environment
msg = 'good global'
function hello1() {
    let msg = 'good morning'
    let c = ()=>{
        console.log('c is called ' + msg);
    }
    msg = 'good afternoon'
    return c
}
c = hello1()
c()