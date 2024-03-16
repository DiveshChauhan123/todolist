// import { useState, useRef } from 'react'

// import './App.css';
// import Navbar from './components/Navbar.jsx';
// function App() {
//   const [todo, settodo] = useState("");
//   const [todos, settodos] = useState([]);
//   const [check, setcheck] = useState(false);
//   const toggleFinished = (e) => {
//     setcheck(!showFinished)
//   }
// const handleedit = (e, id) => {
//   let t = todos.filter(i => i.id === id)
//   settodo(t[0].todo)
//   let newTodos = todos.filter(item => {
//     return item.id !== id
//   });
//   settodos(newTodos)
//   saveToLS()
// }

//   const handledelete = (e, id) => {
//     let newtodo = todos.filter(item => {
//       return item.is !== id
//     });
//     settodos(newtodo);

//   }
//   const handleadd = () => {
//     settodos([...todos, { todo, isCompleted: false }])
//     settodo("")
//   }
// const handleChange = (e) => {
//   settodo(e.target.value);
// }
//   // const checktrue = (e) => {
//   //   setcheck(!e.target.value)
//   //   // if (check == true) {
//   //   //   e.current.style.textDecoration = textRef.current.style.textDecoration === 'line-through' ? 'none' : 'line-through';
//   //   // }
//   // }
//   return (
//     <>
//       <Navbar />
//       <div className="write-your-todo">Keep a Note of your Todo</div>
//       <div className="add-to-do">
//         <input onChange={handleChange} value={todo} type="text" className="to-do-input" placeholder='add your today`s tasks' />
//         <button onClick={handleadd} type="button" className='add-to-tasks'>ADD</button>
//       </div>
//       <div className='heading'>YOUR TO DOS</div>
//       {todos.map((item) => (

//         <>
//           {/* <li key={index}>{element}</li>
//           <div className="todo">Lorem ipsum dolor sit amet.</div> */}

//           <div className="your-to-do">
//           <input type="checkbox" checked={item.isCompleted} onChange={() => handleCheckboxChange(index)} />
//           <div className={item.isCompleted ? 'showdata line-through' : 'showdata'}>{item.todo}</div>
//           <button onClick={handleedit} type="button" className='button-edit'>Edit</button>
//           <button onClick={handledelete} type="button" className='button-delete'>Delete</button>

//           </div>
//         </>



//       ))}

//     </>
//   )
// }

// export default App
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos(prevTodos => [...prevTodos, { todo, isCompleted: false }]);
      setTodo("");
    }
  }
  // const handleedit = (e, id) => {
  //   let t = todos.filter(i => i.id === id)
  //   setTodo(t[0].todo)
  //   let newTodos = todos.filter(item => {
  //     return item.id !== id
  //   });
  //   setTodos(newTodos)
  //   saveToLS()
  // }


  const handleedit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handledelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckboxChange = (index) => {
    setTodos(prevTodos => {
      return prevTodos.map((item, i) => {
        if (i === index) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  }

  return (
    <>
      <Navbar />
      <div className="write-your-todo">Keep a Note of your Todo</div>
      <div className="add-to-do">
        <input onChange={handleChange} value={todo} type="text" className="to-do-input" placeholder='Add your today`s tasks' />
        <button onClick={handleAdd} type="button" className='add-to-tasks'>ADD</button>
      </div>
      <div className='heading'>YOUR TO DOS</div>
      {todos.map((item, index) => (
        <div key={index} className="your-to-do">
          <input type="checkbox" checked={item.isCompleted} onChange={() => handleCheckboxChange(index)} />
          <div className={item.isCompleted ? 'showdata line-through' : 'showdata'}>{item.todo}</div>
          <button onClick={handleedit} type="button" className='button-edit'>Edit</button>
          <button onClick={handledelete} type="button" className='button-delete'>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
