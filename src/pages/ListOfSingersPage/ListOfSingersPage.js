import React from 'react';
import SingerBlock from "../../components/SingerBlock/SingerBlock";
import "./ListOfSingersPage.css"
import {Form} from "react-bootstrap";

const ListOfSingersPage = () => {
    return (
        <div className="ListOfSingersPage">
            <div className="ListOfSingersPage_header">
                <h1>Все исполнители</h1>
                <div className="search_wrapper">
                    <Form className="search-form">
                        <Form.Control className="search-box" type="search" placeholder=""/>
                    </Form>
                </div>
            </div>
            <div className="Singers">
                <SingerBlock name="OG BUDA" years="1999 - 2023" info="fadsasdfdsfds" to="/singers/ogbuda"/>
                <SingerBlock name="OG BUDA" years="1999 - 2023" info="fadsasfdsfdsfdsfdsfdsfdsfdsfds fdsfdsfdsfds fdsfds afdsafdsafdsafdsafadsdfdsfds"/>
                <SingerBlock name="OG BUDA" years="1999 - 2023" info="fadsasdfdsfds"/>
                <SingerBlock name="OG BUDA" years="1999 - 2023" info="fadsasdfdsfds"/>
            </div>
        </div>
    );
};

export default ListOfSingersPage;