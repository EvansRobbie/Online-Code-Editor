import {useState, useEffect} from 'react'
import Output from './Output'
import Editor from './Editor'

const Index = () => {
    const [html, setHtml] = useState<string>('')
    const [css, setCss] = useState<string>('')
    const [javascript, setJavascript] = useState<string>('')
    const [srcDoc, setSrcDoc] = useState('')
 useEffect (() =>{
    const timeOut = setTimeout(() =>{
        setSrcDoc(`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
        </html>
        `)
    }, 250)
    return () => clearTimeout(timeOut)
 }, [html, css, javascript])
    
  return (
    <div className='h-screen'>
        {/* Editor */}
        <div className='flex  bg-black h-[60vh] py-4'>
        <div className='border flex flex-grow gap-4 border-gray-500'>
            <Editor displayName='HTML' languageName='xml' onChange={setHtml}  value={html}/>
            <Editor displayName='CSS' languageName='CSS' onChange={setCss}  value={css}/>
            <Editor displayName='JS' languageName='JS' onChange={setJavascript}  value={javascript}/>

        </div>
    </div>
        {/* Output display */}
        <div className=''>
        <iframe srcDoc={srcDoc} title='output'
                sandbox='allow-scripts'
                height={100}
                width={100}
                />
        </div>
    </div>
  )
}

export default Index