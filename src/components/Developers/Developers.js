import React from 'react';
import {Card, Stack} from "react-bootstrap";
import "./Developers.css"

const Developers = () => {
    return (
        <Stack className="developers-section">
            <h2 className="heading_developers">{"Разработчики"}</h2>
            <div className="developers">
                <Card className="developer-card">
                    <Card.Img src={require("../../img/og_buda_avatar.jpg")} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">{"Елькин"}</Card.Title>
                        <a href="https://github.com/alexeibob1" target="_blank" className="button-git">{"Профиль на GitHub"}</a>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Img src={require("../../img/og_buda_avatar.jpg")} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">{"Ханенко"}</Card.Title>
                        <a href="https://github.com/freezton" target="_blank" className="button-git">{"Профиль на GitHub"}</a>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Img src={require("../../img/Altxander.jpg")} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">{"Шмаргун"}</Card.Title>
                        <a href="https://github.com/Ptuxa" target="_blank" className="button-git">{"Профиль на GitHub"}</a>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Img src={require("../../img/og_buda_avatar.jpg")} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">{"Асепков"}</Card.Title>
                        <a href="https://github.com/Ptuxa" target="_blank" className="button-git">{"Профиль на GitHub"}</a>
                    </Card.Body>
                </Card>
            </div>

        </Stack>
    );
};

export default Developers;