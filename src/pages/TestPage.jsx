import React, { useEffect, useState } from 'react'
import { fetchData } from '../services'

const pid = 1305;

const HtmlContent = ({ htmlString }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    );
  };

function TestPage() {
    const [data, setData] = useState([])
    const [item, setItem] = useState(null)


    useEffect(() => {
        const load = async () => {
            const result = await fetchData();
            console.log({ result });
            setData(result);
            if (result) {
                const it = result.filter(a => a.id === pid)[0];
                setItem(it.content.rendered)
            }
        }
        load();
        return () => {
            load();
        }
    }, [])

    
      const htmlString = `
      <link rel='stylesheet' id='elementor-post-${pid}-css'
    href='http://www.bestbuyads.com/wp-content/uploads/elementor/css/post-${pid}.css' media='all' />
      ${item}
    `;
    return (
        <div className='bg-light'>
            {/* {item} */}
            {/* <div dangerouslySetInnerHTML={{__html: HtmlContent(item)}}></div> */}
            <HtmlContent htmlString={htmlString} />
        </div>
    )
}

export default TestPage