/* A stack is a container of objects that are inserted and removed according to the 
** last-in first-out (LIFO) principle.

-> push(key) : add key to collection.
-> top(key) : returns most recently added key.
-> pop(key) : removes and returns most recently added key.
-> empty() : are there any elements?

-> can be implemented with either an array or linked list.
-> O(1) is the stack operation.

**/

/* A queue is a container of objects (a linear collection) 
** that are inserted and removed according to the 
** first-in first-out (FIFO) principle

-> enqueue(key) - adds key to collection
-> queue(key) - removes and returns least recently added key
-> empty()

-> implemented with linkedlist
-> enqueue - uses List.PushBack
-> dequeue - uses List.TopFront and List.PopFront
-> empty - uses List.Empty
**/

// challenge
// https://github.com/microverse-students/stack-Cathella