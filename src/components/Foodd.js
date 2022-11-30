import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import {useSelector, useDispatch} from "react-redux";
import {fetchFood} from "./reducerSlice";


const Foodd = () => {
    // const [food_name, setFoodd] = React.useState([])
    const {food} = useSelector(state => state.food)
    const [loading, setLoading] = useState(true)

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const {data} = await axios.get(
    //                 'http://127.0.0.1:8000/food/'
    //             )
    //             console.log(data)
    //
    //             setFoodd(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //
    //         setLoading(false)
    //     }
    //
    //     fetchData()
    // }, [])
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchFood())
                .then((originalPromiseResult) => {
                    console.log('RANGE FETCHED')
                    console.log(originalPromiseResult.payload)
                })
                .catch((rejectedValueOrSerializedError) => {
                    console.log('ERROR APPEARED WHILE RANGE FETCHING')
                    console.log(rejectedValueOrSerializedError)
                })
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
                    {food.map(el => (
                        <div key={el.id} className=''>
                            <Card style={{width: '18rem', margin: '15px'}}>

                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>{el.food_name}</Card.Title>
                                    <Button variant="outline-dark"><Link to={`/food/${el.food_id}`}
                                                                         className="nav-link px-lg-1 link-dark">Подробнее</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Foodd