const store = createStore

export default function createStore(reducer) {
  let state
  dispatch({type:'@@INIT'})

  function getState(){
    return state
  }

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');

}
