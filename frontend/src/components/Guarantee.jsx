import React from "react";
import "../stylesheets/Guarantee.css";
import assurance from "../assets/FortuneBlock_files/assurance.png";

const Transaction = () => {
    return (
        <div className="guarantee-container">
            <div className="gtext">
                <h2>Make your <span>financial goals</span> a reality</h2>
                <p>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quam aut ab harum accusamus adipisci saepe, incidunt magni quia id laudantium omnis enim nobis sit optio excepturi! Sint, sunt debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet rerum facilis, deleniti quas natus, quibusdam aut rem numquam ex provident quae neque!
                </p>
            </div>
            <img src={assurance} alt="gurarantee image"/>
        </div>
    );
};

export default Transaction;
