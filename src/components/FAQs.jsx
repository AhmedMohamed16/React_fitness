import SectionHead from "./SectionHead"
import {FaQuestion} from 'react-icons/fa'
import { faqs } from "../data"
import FQA from './FAQ'
const FAQs = () => {
  return (
    <section>
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion />} title="FAQs" />
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return <FQA key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs