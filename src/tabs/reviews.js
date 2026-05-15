import { addContent } from "./addContent.js";

const main = document.getElementById("content");

export function loadReviews(){
    main.innerHTML = '';

    addContent(main, "h1", "What Our Guests Say");
    
        addContent(main, "h3", '"A Journey Beyond the Stars"');
        addContent(main, "p",`
            Dining at Cosmic Orbit was unlike anything I’ve ever experienced. 
            The atmosphere felt like stepping aboard a luxury spaceship, 
            and the Nebula Steak was cooked to perfection. 
            Every detail, from the glowing décor to the stellar service, made the evening unforgettable.
            `);
    
        addContent(main, "h3", "“Out of This World Flavors”");
        addContent(main, "p",`
            I came for the unique concept, but I stayed for the incredible food. 
            The Galaxy Pasta was rich and flavorful, and the Lunar Cheesecake was 
            the best dessert I’ve had in years. This restaurant truly lives up to its cosmic theme.
            `);
        
        addContent(main, "h3", "“The Perfect Intergalactic Date Night”");
        addContent(main, "p",`
            My partner and I celebrated our anniversary here, and it was magical. 
            The panoramic star projections and ambient music 
            created a romantic atmosphere, while the dishes were both creative and delicious. 
            We’ll definitely be returning for another trip through the universe.
            `);
};