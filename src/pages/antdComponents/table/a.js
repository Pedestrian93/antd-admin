// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react'

// function Example() {
//   // 声明一个叫 “count” 的 state 变量。
//   const [count, setCount] = useState(0)

//   const [names, setNames] = useState(['Tom', 'Jack'])
//   const [obj, setObj] = useState({})

//   useEffect(async () => {
//     const result = await axios(
//       'http://hn.algolia.com/api/v1/search?query=redux'
//     )
//     setData(result.data)
//   }, [])

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>

//       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//     </div>
//   )
// }

// export default Example

// function App() {
//   const [query, setQuery] = useState('redux')
//   const [search, setSearch] = useState('redux')

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(`...?query=${search}`)
//       setData(result.data)
//     }
//     fetchData()
//   }, [search])

//   return (
//     <>
//       <input onChange={event => setQuery(event.target.value)} />
//       <button type="button" onClick={() => setSearch(query)}>
//         Search
//       </button>
//     </>
//   )
// }

// const useHackerNewsApi = () => {
//   const [data, setData] = useState()
//   const [url, setUrl] = useState('http://search?query=redux')
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios(url)
//         setData(result.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchData()
//   }, [url])
//   return [{ data }, setUrl]
// }

// function Appp() {
//   const [query, setQuery] = useState('redux')
//   const [{ data }, doFetch] = useHackerNewsApi()

//   return (
//     <>
//       <form
//         onSubmit={event => {
//           doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
//           event.preventDefault()
//         }}
//       >
//         <input
//           type="text"
//           value={query}
//           onChange={event => setQuery(event.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       ...
//     </>
//   )
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] =
//    useReducer(reducer, initialState);

//    const refContainer = useRef(initialValue);

//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() =>
//         dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }

// const value = useContext(MyContext);

// import React, { Component } from 'react'

// export default class a extends Component {

//   static contextType = MyContext

//   const memoizedCallback = useCallback(
//     () => {
//       doSomething(a, b);
//     },
//     [a, b],
//   );

//   function Parent({ a, b }) {
//     // Only re-rendered if `a` changes:
//     const child1 = useMemo(() => <Child1 a={a} />, [a]);
//     // Only re-rendered if `b` changes:
//     const child2 = useMemo(() => <Child2 b={b} />, [b]);
//     return (
//       <>
//         {child1}
//         {child2}
//       </>
//     )
//   }

//   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

//   render() {
//     return (
//       <div>

//         <MyContext.Consumer>
//           {

//           }
//         </MyContext.Consumer>
//       </div>
//     )
//   }
// }
