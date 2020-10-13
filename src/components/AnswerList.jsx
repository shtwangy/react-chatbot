import React from 'react';
import {Answer} from "./index";

const AnswerList = (props) => {
    return (
        <div className="c-grid__answer">
            {props.answers.map((value, index) => {
                return (
                    <Answer key={index.toString()} content={value.content} />
                );
            })}
        </div>
    );
};

export default AnswerList;
