# TaskMaster - My Todo List App

I built this todo list app as part of my React assignment. It took me a while but finally got it working!

GitHub Repo: https://github.com/harshcloud3/Todo--App

## What I learned

This was my first time using React hooks like useState. The edit functionality was tricky but I figured it out by passing functions as props between components.

## Features I added

- Add new tasks (had to handle empty input validation)
- Delete tasks when you don't need them anymore
- Mark tasks as complete with a checkbox
- Edit tasks (this was the hardest part)
- Shows total tasks and how many are completed

## How I built it

I used Vite to create the project because the assignment required it. The components are:

- App.jsx - manages all the state
- Header.jsx - just the title section
- ToDoList.jsx - renders the list using map()
- ToDoItem.jsx - each individual task with its buttons

## Running the project

Open your terminal and run:

''''terminal
npm install
npm run dev