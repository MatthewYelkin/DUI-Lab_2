import React, {useState} from 'react';
import SingerBlock from "../../components/SingerBlock/SingerBlock";
import "./ListOfSingersPage.css"
import {Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import singers from "../../data/singers.json"

const ListOfSingersPage = () => {
    const {t, i18n} = useTranslation()

    const singersArr = Object.keys(singers).map((singer)=>[singer, singers[singer]['nick']])

    const [foundSingers, setFoundSingers] = useState(singersArr);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = singersArr.filter((singer) => {
                return singer[1].toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundSingers(results);
        } else {
            setFoundSingers(singersArr);
        }
    };

    return (
        <div className="ListOfSingersPage">
            <div className="ListOfSingersPage_header">
                <h1>{t('listOfSingersPage_allSingers')}</h1>
                <div className="search_wrapper">
                    <Form className="search-form">
                        <Form.Control className="search-box" type="search" placeholder={t('listOfSingersPage_search')} onChange={filter}/>
                    </Form>
                </div>
            </div>
            <div className="Singers">
                {foundSingers.map(([singer, nick]) =>
                    <SingerBlock
                        img={`${singer}.png`}
                        name={nick}
                        years={t(`singers.${singer}.birth_date`)}
                        info={t(`singers.${singer}.short_info`)}
                        page={`/artists/${singer}`}
                    />
                )}
            </div>
        </div>
    );
};

export default ListOfSingersPage;