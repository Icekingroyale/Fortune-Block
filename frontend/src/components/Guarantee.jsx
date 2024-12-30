import React from "react";
import "../stylesheets/Guarantee.css";
import assurance from "../assets/FortuneBlock_files/assurance.png";

const Transaction = () => {
    return (
        <div className="guarantee-container">
            <div className="gtext">
                <h2>Make your <span>financial goals</span> a reality</h2>
                <p>
                    Our platform provides world class crypto investment stability by
                    maintaining full reserves, healthy investment relationships and the
                    highest standards of legal compliance. Earning the trust of our
                    clients has always been our highest priority. We earn that trust
                    through the best security in the business — Our digital assets are
                    held safely in cold wallets so bad actors can't reach it. We also pair
                    our global 24/7/365 live chat with an extensive Support Center to help
                    ensure your questions are answered and your needs are met around the
                    clock -- no matter who or where you are.
                </p>
            </div>
            <img src={assurance} alt="gurarantee image"/>
        </div>
    );
};

export default Transaction;
