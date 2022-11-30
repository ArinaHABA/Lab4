import React, {useEffect, useState} from "react";
import {Col, Row, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFood, loadFood, setLoading} from "./reducerSlice";
import axios from "axios";
import {fetchFoodEl} from "./reducerSlice";

const Foddy = () => {
    let id = useParams()['food_pk'];
    console.log(useParams())
    const {food} = useSelector((state) => state.food);
    const {loading} = useSelector((state) => state.toolkit.isLoading);
    const {foodEl} = useSelector((state) => state.foodEl);
    // let foodEl = food ? food.find((x) => x.id === id) : null;
    // let foodEl = food[id-1]
    // const [foodEl, setfoodEl] = useState()

    //
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(id)
        const fetchData = async () => {
            await dispatch(fetchFoodEl(id))
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
        <>
            <div><Link to='/'>Главная</Link> / <Link to={`/food/${foodEl.food_id}`}>{foodEl.food_id}</Link><p></p></div>
            {food && <h2 className="mb-3">{foodEl.food_id}</h2>}
            <Row>
                {loading && "Загрузка..."}
                {food && (
                    <>
                        <Col xs="12" md="6" lg="4" xl="3">
                            <h5 className="fw-bold">Название</h5>
                            <p>{foodEl.food_name}</p>
                            <h5 className="fw-bold">Вес</h5>
                            <p>{foodEl.weight}</p>
                            <h5 className="fw-bold">Цена</h5>
                            <p>{foodEl.food_price}</p>
                        </Col>
                    </>
                )}
            </Row>
        </>
    );
};
export default Foddy;