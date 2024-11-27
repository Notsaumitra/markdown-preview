"use client"

import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

const Home = () => {
    const [text, setText] = useState<string>("**bold**");
    const [markDown, setMarkdown] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const getHtmlGenerated = async () => {
        try {
        if(text){
        setLoading(true)
        const BASE_URL = "http://localhost:3008/api";

          const data = await fetch(`${BASE_URL}/markdown`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text  }),
          });
          const markdownRes = await data.json();

          if(markdownRes && markdownRes.htmlGenerated){
              
              const parseMarkdown = markdownRes.htmlGenerated.replace(/\n/g, '<br />');
              console.log(parseMarkdown);
            setLoading(false);
            setMarkdown(parseMarkdown);
            if(error) setError("");
          }
        }
        } catch (err: any) {
          setError('Error: ' + err.message);
          setMarkdown('');
          setText('');
        }
      };

    useEffect(()=>{
        getHtmlGenerated();
    },[text]);

    return (
        <div className="w-full">
            <div className="flex justify-center w-full px-4 sm:px-64">
                <div className="mb-2 w-full">
                    <Input type="name" placeholder="Enter markdown" onChange={(e)=>{
                        setText(e.target.value)}} value={text}/>
                </div>
            </div>
            { loading && !error ?
            <div className="mb-4 sm:px-48 h-64 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Loading...</div>
            :<div className="flex justify-center mt-5 w-full sm:px-48">
                <div dangerouslySetInnerHTML={{__html: markDown}}></div>
            </div>
            }
            { loading && !error ?
            <div className="mb-4 sm:px-48 h-64 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Loading...</div>
            :<div className="flex justify-center mt-5 w-full sm:px-48">
                <div>{markDown}</div>
            </div>
            }
            {
                error ? <div className="flex justify-center mt-5 w-full sm:px-48">
                <div>{error}</div>
                </div> : null
            }
        </div>
    )
}

export default Home