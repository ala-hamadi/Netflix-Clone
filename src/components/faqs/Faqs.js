import React,{useState} from 'react'
import faqsData from './faqs.json'
import * as styles from './StylesFaqs'
import EmailForm from '../forms/EmailForm'
const Faqs=()=> {
    const [toogleShow, setToogleShow] = useState([false,false,false,false,false])

    const handleClickHeader=(index)=>{
        let items=toogleShow.slice()
        items[index]=!items[index]
        setToogleShow(items)
    }
    return (
        <styles.Container>
            <styles.Inner>
                <styles.Title>Frequently Asked Questions</styles.Title>
                {
                    faqsData.map(data=>(
                        <styles.Item key={data.id}>
                            <styles.Header onClick={()=>handleClickHeader(data.id)}>
                                {data.header}
                                {
                                    toogleShow[data.id] ? 
                                    <img src="assets/images/icons/close-slim.png" alt="close" /> :
                                    <img src="assets/images/icons/add.png" alt="open" /> 
                                }
                            </styles.Header>
                            <styles.Body isPadding={toogleShow[data.id]}>
                                {toogleShow[data.id] ? data.body : null}
                            </styles.Body>
                        </styles.Item>
                    ))
                }
                <EmailForm />
            </styles.Inner>
        </styles.Container>
    )
}

export default Faqs
