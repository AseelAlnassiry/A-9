### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - The purpose of react router is to allow movement between pages in a react application, without having to refresh the url.

- What is a single page application?
  - An application where switching between pages does not require a reload.

-  What are some differences between client side and server side routing?
  - Client side routing is for the front-end of the application, backend routing is for the backend.

- What are two ways of handling redirects with React Router? When would you use each?
  - useNavigate
  - a Navigation component with a link

- What are two different ways to handle page-not-found user experiences using React Router? 
  - Redirecting to the home page or something else, along with a message regarding page not found.
  - Sending to a not-found page.

- How do you grab URL parameters from within a component using React Router?
  - useParams

- What is context in React? When would you use it?
  - context is global state, its used to store things that are required by multiple components. things like current user, themes, shopping carts, etc. 

- Describe some differences between class-based components and function
  components in React.
  - class-based components extend the React.Component class. 
  - function-based components do not use methods like render, etc.

- What are some of the problems that hooks were designed to solve?
  - HOC are really hard to follow.
  - The use of a function across multiple components
  - No need for wrappers