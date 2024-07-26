const func = (store) => (next) => (action) =>{
    if(typeof action =='function'){
        action(store.dispatch);
        next()
    }
    else{
        next()
    }
}

export default func;