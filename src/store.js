export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'add_contact':
      
      const data = async ()=>{
        const response = await fetch('https://playground.4geeks.com/contact/agendas/danloveper/contacts',{
          method:'POST',
          body: JSON.stringify(action.payload)
        }
        )
        try{
          const dataJson = reponse.json();
          return dataJson
        }
        catch (e){
          console.error(e);
        }

      }

      return {
        ...store,
        contacts: [...store.contacts, data]
      }

    default:
      throw Error('Unknown action.');
  }    
}
