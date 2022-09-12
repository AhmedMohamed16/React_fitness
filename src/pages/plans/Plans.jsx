import HeaderImage from '../../images/header_bg_4.jpg'
import Header from '../../components/Header'
import Card from '../../UI/Card'
import { plans } from '../../data'

import './plans.css'
const Plans = () => {
  return (
    <>
        <Header title="Membership Plans" image={HeaderImage}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim reprehenderit nesciunt aperiam earum blanditiis nemo.

        </Header>
        <section className='plans'>
            <div className="container plans__container">
                {
                    plans.map(({id, name, desc, price, features}) => {
                        return <Card key={id}>
                            <h3>{name}</h3>
                            <small>{desc}</small>
                            <h1>{`$${price}`}</h1><h2>/mo</h2>
                            {
                                features.map(({feature, available, index}) => {
                                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                })
                            }
                            <button className='btn lg'>Chosse Plan</button>
                        </Card>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Plans