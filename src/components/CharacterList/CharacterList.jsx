import {v4 as uuidv4} from 'uuid'

function List() {

  return (
    <>
      <form action="#">
        <input className='uno' type="text" placeholder='Name'></input>
        <input className='dos' type="text" placeholder='Age'></input>
        <input className='uno' type="text" placeholder='Job'></input>
        <button variant="primary" type="submit">Add</button>
        <input className='tres' type="text" placeholder='Image URL'></input>
      </form>
    </>
  )
}

export default List
