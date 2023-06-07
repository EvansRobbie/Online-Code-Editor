import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2';

const Editor = ({displayName, languageName, value, onChange}:{displayName:string, languageName:string, onChange:React.SetStateAction<React.Dispatch<string>>, value:string}) => {
    
    const handleChange = (editor:any, data:any, value:any) =>{
        onChange(value)
    } 
  return (
   <div className="w-full border border-gray-500   ">
    <div className="flex w-full justify-between  items-center">
        <div className='h-10 text-slate-400 font-bold text-center pt-2 bg-[#263238] w-20'>
            {displayName}
        </div>
     <button>Open</button>
    </div>
    <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className=''
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