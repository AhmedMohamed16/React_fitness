
import HeaderImage from '../../images/header_bg_2.jpg'
import Header from '../../components/Header'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'
const Contact = () => {
  return (
    <>
        <Header title="Get In Touch" image={HeaderImage}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim reprehenderit nesciunt aperiam earum blanditiis nemo.

        </Header>
        <section className='contact'>
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <a href="mailto:support@ahmed.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
                    <a href="https://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
                    <a href="https://wa.me/+201011744406" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact