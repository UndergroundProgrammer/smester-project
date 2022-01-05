import React from 'react';
const HomePage = () => {
    return ( <div>
    <div className="container">
        <div className="row row-content align-items-center">
            <div className="col-12 order-sm-first col-sm-4 col-md-3">
                <h3>Our Lipsmacking Culinary Creations</h3>
            </div>
            <div className="col order-sm-first col-sm col-md">
                <h2>Uthappizza</h2>
                <p>A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>
            </div>
        </div>


        <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 col-md-3 ">
                <h3>This Month's Promotions</h3>
            </div>
            <div className="col col-sm col-md">
                <h2>Weekend Grand Buffet</h2>
                <p>Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
            </div>
        </div>

        <div className="row row-content align-items-center">
            <div className="col-12 order-sm-last col-sm-4 col-md-3">
                <h3>Meet our Culinary Specialists</h3>
            </div>
            <div className="col order-sm-first col-sm col-md">
                <h2>Alberto Somayya</h2>
                <h4>Executive Chef</h4>
                <p>Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. </p>
            </div>
        </div>
    </div>
    </div> );
}
 
export default HomePage;