import {useState} from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

import { Controlled as CodeMirror } from 'react-codemirror2';

const Editor = ({displayName, languageName, value, onChange}:{displayName:string, languageName:string, onChange:React.SetStateAction<React.Dispatch<string>>, value:string}) => {
    const [isOpen, setIsopen] = useState(true)
    const handleChange = (editor:any, data:any, value:any) =>{
        onChange(value)
    } 
    // console.log(isOpen)
  return (
   <div className={` ${ isOpen ? ' flex-grow ' : 'flex-grow-0 flex-shrink  '} relative  border border-gray-500`}>
    <div className="flex w-full justify-between  items-center">
        <div className='h-10 text-slate-400 font-bold text-center pt-2 bg-[#263238] w-20'>
            {displayName}
        </div>
        <div>

     <button onClick={() => setIsopen(!isOpen)} className='text-slate-200 cursor-pointer'>
        {isOpen ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>
:    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
}
     </button>
        </div>
    </div>
    <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className='codeMirror'
        options={{
            lineWrapping:true,
            lint:true,
            theme:'material',
            mode:languageName,
            lineNumbers:true,
          
        }}
        />
   </div>
  )
}

export default Editor