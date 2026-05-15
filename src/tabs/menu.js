import { addContent } from "./addContent.js";

const main = document.getElementById("content");

export function loadMenu(){
    main.innerHTML = "";

    addContent(main, "h1", "Cosmic Menu");

    addContent(main, "h3", "Stardust Salad");
    addContent(main, "p",`
        A fresh mix of crisp greens, cherry tomatoes, cucumber ribbons, 
        and candied pecans, topped with goat cheese and served 
        with a shimmering citrus vinaigrette.
        `);

    addContent(main, "h3", "Meteorite Steak");
    addContent(main, "p",`
        Tender grilled beef steak seasoned with interstellar spices, served 
        alongside roasted moon potatoes and a rich black-hole pepper sauce.
        `);
    
    addContent(main, "h3", "Milky Way Cheesecake");
    addContent(main, "p",`
        Creamy vanilla cheesecake on a chocolate cookie crust, 
        finished with a swirl of blueberry galaxy sauce and sparkling sugar stars.
        `);
    
    
}
