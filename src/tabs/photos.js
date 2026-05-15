import { addContent } from "./addContent.js";
import SpaceRestaurant1 from "../images/SpaceRestaurant1.jpeg";
import SpaceRestaurant2 from "../images/SpaceRestaurant2.jpeg";
import SpaceRestaurant3 from "../images/SpaceRestaurant3.jpeg";
import SpaceRestaurant4 from "../images/SpaceRestaurant4.jpeg";

const main = document.getElementById("content");

export function loadPhotos(){
    main.innerHTML = '';
    
        addContent(main, "img", null, SpaceRestaurant1);
    
        addContent(main, "img", null, SpaceRestaurant2);

        addContent(main, "img", null, SpaceRestaurant3);

        addContent(main, "img", null, SpaceRestaurant4);
        

};