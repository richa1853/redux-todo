export const createTodo=(id,text)=>{
    return{
        type:"addTodo",
         text,
          id
    }
}