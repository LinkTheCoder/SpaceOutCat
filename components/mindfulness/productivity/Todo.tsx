"use client"

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { auth, firestore } from '../../../firebaseConfig.js';

export default function Productivity() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubscribe;

    const fetchTodoItems = async (user) => {
      try {
        const userDocRef = firestore.collection('users').doc(user.uid);
        const doc = await userDocRef.get();

        if (doc.exists) {
          const userTodoRef = userDocRef.collection('todoItems');
          unsubscribe = userTodoRef.onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTodoItems(data);
          });
        } else {
          await userDocRef.set({ todoItems: [] });
          setTodoItems([]);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase Firestore:', error);
      }
    };

    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchTodoItems(user);
      } else {
        setTodoItems([]);
      }
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      unsubscribeAuth();
    };
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (user) {
        const userTodoRef = firestore.collection('users').doc(user.uid).collection('todoItems');
        userTodoRef
          .add({ text: newTodo, completed: false })
          .then(() => {
            setNewTodo('');
          })
          .catch((error) => {
            console.error('Error saving data to Firebase Firestore:', error);
          });
      }
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const toggleComplete = (index) => {
    if (user) {
      const userTodoRef = firestore.collection('users').doc(user.uid).collection('todoItems');
      userTodoRef.doc(todoItems[index].id).update({ completed: !todoItems[index].completed });
    }
  };

  const deleteTodo = (index) => {
    if (user) {
      const userTodoRef = firestore.collection('users').doc(user.uid).collection('todoItems');
      userTodoRef.doc(todoItems[index].id).delete();
    }
  };

  const editTodo = (index, newValue) => {
    if (user) {
      const userTodoRef = firestore.collection('users').doc(user.uid).collection('todoItems');
      userTodoRef.doc(todoItems[index].id).update({ text: newValue });
    }
  };

  return (
    <>
      <div className="mb-16 px-6 pt-4 pb-2 text-primary font-bold text-center">
        <div className="mb-4">
          <ul className="max-w-md mx-auto rounded shadow divide-y divide-primary">
            {todoItems.map((item, index) => (
              <li key={index} className="p-4 flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="border-primary text-primary focus:ring-primary"
                    checked={item.completed}
                    onChange={() => toggleComplete(index)}
                  />
                  <span className={item.completed ? 'line-through' : ''}>{item.text}</span>
                </label>
                <div>
                  <button
                    onClick={() => editTodo(index, prompt('Enter new value', item.text))}
                    className=" text-blue-500 hover:text-blue-600"
                  >
                    <FaEdit color="#ba68c8" size="20px" />
                  </button>

                  <button
                    onClick={() => deleteTodo(index)}
                    className="text-red-500 hover:text-red-600 ml-2"
                  >
                    <FaTrash color="#ba68c8" size="20px" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a new item"
            className="bg-transparent rounded-l px-4 py-2 border-primary focus:outline-none focus:ring focus:border-purple-300"
          />
          <button onClick={addTodo} className="bg-primary hover:bg-purple-500 text-white px-4 py-2 rounded-r">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
