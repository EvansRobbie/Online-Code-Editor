import {useState} from 'react'
import Editor from './Editor'

const CodeEditor = () => {
    const [html, setHtml] = useState<string>('')
    const [css, setCss] = useState<string>('')
    const [javascript, setJavascript] = useState<string>('')
  return (
    <div className='flex bg-black h-[60vh] py-4'>
        <div className='border flex w-full gap-4 border-gray-500'>
            <Editor displayName='HTML' languageName='xml' onChange={setHtml}  value={html}/>
            <Editor displayName='CSS' languageName='CSS' onChange={setCss}  value={css}/>
            <Editor displayName='JS' languageName='JS' onChange={setJavascript}  value={javascript}/>

        </div>
    </div>
  )
}

export default CodeEditor