import React from 'react'
import { useState } from 'react'
import {faqsData} from './data'
import FAQ from './FAQ';


const FAQS=()=>{
    console.log(faqsData);
    const [faqs,setFaqs] = useState(faqsData);
  return (
    <div>
        <h1>FAQS</h1>
        <div>
            {faqs.map((faq)=> <FAQ key={faq.id} {...faq} /> )}
        </div>
    </div>
  )
}

export default FAQS