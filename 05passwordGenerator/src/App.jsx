import { useState, useCallback, useEffect, useRef, use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')

  // useRef HOOK

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+[]{}|;:,.<>?`~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy password: ", err);
    });
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
