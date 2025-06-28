import { useState, useCallback, useEffect, useRef, use} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [incchar, setincchar] = useState(false)
  const [incnum, setincnum] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (incchar) str += '!@#$%^&*()_+[]{}|;:,.<>?'
    if (incnum) str += '0123456789'

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  }, [length, incchar, incnum, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, incchar, incnum, passwordGenerator])

  const passwordRef = useRef(null)
  const copypassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])
  return (
    <>
      <div className='w-full max-w-lg shadow-md mx-auto px-4 py-8 my-8 rounded-lg text-orange-500 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Password Generator</h1>
        <div className='flex shadow-sm overflow-hidden rounded-lg mb-4'>
          <input
            type='text'
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
            className='w-full px-4 py-2 text-lg bg-gray-100 text-gray-700 focus:outline-none'
          />
          <button className='bg-blue-700 hover:bg-blue-900 text-white w-15 hover:cursor-pointer' 
          onClick={copypassword}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-4 justify-center mb-4'>
          <div className='flex items-center justify-center align-middle gap-1'>
            <input
              type='range'
              min={6}
              max={100}
              className='cursor-pointer'
              onChange={e => setLength(e.target.value)}
              value={length}
            />
            <label> Length : {length}</label>
          </div>
          <div className='flex items-center justify-center gap-0.5'>
            <input
              type='checkbox'
              checked={incchar}
              onChange={e => setincchar(prev => !prev)}
            />
            <label>Characters</label>
          </div>
          <div className='flex items-center justify-center gap-0.5'>
            <input
              type='checkbox'
              checked={incnum}
              onChange={e => setincnum(prev => !prev)} 
              className='cursor-pointer gap-0.5'
            />
            <label>Numbers</label>
          </div>
        </div>
        <button
          className='bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 mt-4 rounded-lg'
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
        <p className='text-sm text-gray-500 mt-2'>
          Click the button to generate a new password.
        </p>
      </div>
    </>
  )
}

export default App
