import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
        <Header title="About Us" image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil harum omnis nostrum est architecto incidunt vel assumenda, deserunt dicta temporibus?
        </Header>
        <section className='about__story'>
            <div className="container about__story-container">
                <div className="about__section-image">
                    <img src={StoryImage} alt="our story image" />
                </div>
                <div className="about__section-content">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae perferendis incidunt aperiam dolores eos sequi, labore temporibus iure ullam minima explicabo tempore. Mollitia, aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae perferendis incidunt aperiam dolores eos sequi, labore temporibus iure ullam minima explicabo tempore. Mollitia, aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis ex rem est consequatur consequuntur?</p>
                </div>
            </div>
        </section>
        <section className='about__vision'>
            <div className="container about__vision-container">
                <div className="about__section-content">
                    <h1>Our Vision</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae perferendis incidunt aperiam dolores eos sequi, labore temporibus iure ullam minima explicabo tempore. Mollitia, aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae perferendis incidunt aperiam dolores eos sequi, labore temporibus iure ullam minima explicabo tempore. Mollitia, aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis ex rem est consequatur consequuntur?</p>
                </div>
                <div className="about__section-image">
                    <img src={VisionImage} alt="our Vision image" />
                </div>

            </div>
        </section>
        <section className='about__mission'>
            <div className="container about__mission-container">
                <div className="about__section-image">
                    <img src={MissionImage} alt="our mission image" />
                </div>
                <div className="about__section-content">
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae perferendis incidunt aperiam dolores eos sequi, labore temporibus iure ullam minima explicabo tempore. Mollitia, aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae perferendis incidunt aperiam dolores eos sequi, labore temporibus iure ullam minima explicabo tempore. Mollitia, aut.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis ex rem est consequatur consequuntur?</p>
                </div>
            </div>
        </section>


    </>
  )
}

export default About