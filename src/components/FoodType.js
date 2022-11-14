import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'


const FoodType = () => {
    const [food_type, setFoodType] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/food/'
                )
                console.log(data)

                setFoodType(data)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        fetchData()
    }, [])


    return (
        <div>
            {loading && 'Загрузка...'}

            <div className=''>
                <div className='' style={{
                    display: 'flex', justifyContent: 'center',
                    overflow: 'auto'
                }}>
                    {food_type.map(el => (
                        <div key={el.id} className=''>
                            <Card style={{width: '18rem', margin: '15px'}}>
                                <img src={`${el.image}`}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>{el.food_name}</Card.Title>
                                    <Card.Text style={{textAlign: 'center'}}>{el.price} </Card.Text>
                                    <Button variant="outline-dark"><Link to={`/food_type/${el.id}`}
                                                                         className="nav-link px-lg-1 link-dark">Еда</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodType