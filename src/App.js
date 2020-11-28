import { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { v4 as uuidv4 } from 'uuid'
import './App.css';
var randomColor = require('randomcolor')
const { innerHeight, innerWidth } = window

const randPos = () => {
  const xLocation = Math.floor(Math.random() * innerWidth) - innerWidth / 2
  const yLocation = Math.floor(Math.random() * innerHeight) - innerHeight / 2
  return { x: xLocation, y: yLocation };
}

function App(props) {

  const [item, setItem] = useState('')
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )

  // console.log('?????', innerHeight, innerWidth)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const updatePos = (data, index) => {
    // console.log(data)
    var newArr = [...items]
    newArr[index].defaultPos = { x: data.x, y: data.y }
    setItems(newArr)
  }

  const deleteNote = (deletedId) => {
    var latestItem = items.filter(item => item.id !== deletedId)
    setItems(latestItem)
  }

  const clearItems = () => {
    setItems([])
  }

  const newItem = () => {
    const generateRandPos = randPos()
    if (item.trim() !== "") {
      // if input not a blank, create new item object
      const newItem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: 'light'
        }),
        defaultPos: generateRandPos
      }
      // console.log('pos', generateRandPos)
      // add item to items array
      setItems(item => [...items, newItem])
      setItem('')
    } else {
      alert('Enter something....')
      setItem('')
    }
  }

  const keyPress = (event) => {
    var code = event.keyCode || event.which
    if (code === 13) {
      newItem()
    }
  }

  return (
    <div className="App">
      <div className='App-header'>
        <div className="input-and-btn">
          <input
            value={item}
            onChange={e => setItem(e.target.value)}
            placeholder='Enter Something....'
            onKeyPress={e => keyPress(e)}
          />
          <button onClick={newItem}>Create</button>
          <button onClick={clearItems}>Clear</button>
        </div>

        {
          items.map((item, indexItem) => (
            <Draggable
              key={item.id}
              defaultPosition={item.defaultPos}
              onStop={(_, data) => {
                updatePos(data, indexItem)
              }}
            >
              <div
                style={{
                  backgroundColor: item.color
                }}
                className='draggable-box'
              >
                <p>{`${item.item}`}</p>
                <button
                  id='btn-delete'
                  onClick={() => (
                    deleteNote(item.id)
                  )}
                >X</button>
              </div>
            </Draggable>
          ))
        }
      </div>
    </div>
  );
}

export default App;
