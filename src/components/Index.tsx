import {useState, useEffect} from 'react'
import Editor from './Editor'
import UseLocalStorage from '../customHook/UseLocalStorage'

const Index = () => {
    const [html, setHtml] = UseLocalStorage('html', '')
    const [css, setCss] = UseLocalStorage('css', '')
    const [javascript, setJavascript] = UseLocalStorage('javascript', '')
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
            <Editor displayName='CSS' languageName='css' onChange={setCss}  value={css}/>
            <Editor displayName='JS' languageName='javascript' onChange={setJavascript}  value={javascript}/>
         
        </div>
    </div>
        {/* Output display */}
        <div className='overflow-hidden'>
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