import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreator } from '../app_state';
import { bindActionCreators } from 'redux';

const Shop = () => {
    // altering the state, using a useDispatch() hook
    const dispatch = useDispatch();

    // 2. with bindactionacreator
    const {addNumber, subtractNumber} = bindActionCreators(actionCreator, dispatch);

    return (
        <div>
            <h1>Buy HP Laptop</h1>

            {/* 1. without bindActionCreator, directly  */}
            <div>

                <button className="btn btn-primary mx-2" onClick={() => {
                    dispatch(actionCreator.withdrawMoney(100))
                }}>-</button>
                Money
                <button className="btn btn-primary mx-2" onClick={() => {
                    dispatch(actionCreator.depositMoney(100))
                }}>+</button>
            </div>

            <br />
            {/* 2. with bindActionCreator  */}
            <div>

                <button className="btn btn-primary mx-2 my-2" onClick={() => {subtractNumber(1)}}>-</button>
                Numbers
                <button className="btn btn-primary mx-2" onClick={() => {addNumber(1)}}>+</button>
            </div>

        </div>
    )
}

export default Shop