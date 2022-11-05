const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
      //console.log(all);
    }
    const donenow = (index) => {
      all[index].completed = true
    }
    const OverDue = () => {
        ar=[]
      for(let i=0;i<all.length;i++)
      {
        if(all[i].dueDate==yesterday)
        {
            ar.push(all[i])
        }
      }
      return ar;
    }
  
    const duenow = () => {
        ar=[]
        for(let i=0;i<all.length;i++)
        {
          if(all[i].dueDate==today)
          {
              ar.push(all[i])
          }
        }
        //console.log(ar);
        return ar;
    }
  
    const dueafter = () => {
        ar=[]
        for(let i=0;i<all.length;i++)
        {
          if(all[i].dueDate==tomorrow)
          {
              ar.push(all[i])
          }
        }
        return ar;
    }
  
    const toDisplayableList = (list) => {
      for(let i=0;i<list.length;i++)
      {
        let res= list.map(item=>`${item.completed ? '[x] ':'[ ] '}${item.title} ${item.dueDate===today ? " ":item.dueDate}`).join("\n")
        return res;
      }
    }
  
    return { all, add, donenow, OverDue, duenow, dueafter, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("OverDue")
  var OverDues = todos.OverDue()
  var formattedOverDues = todos.toDisplayableList(OverDues)
  console.log(formattedOverDues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsduenow = todos.duenow()
  let formattedItemsduenow = todos.toDisplayableList(itemsduenow)
  console.log(formattedItemsduenow)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsdueafter = todos.dueafter()
  let formattedItemsdueafter = todos.toDisplayableList(itemsdueafter)
  console.log(formattedItemsdueafter)
  console.log("\n\n")