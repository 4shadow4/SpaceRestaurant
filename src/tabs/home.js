import { addContent } from "./addContent.js";
import dinner from "../images/DinnerInSpace.jpeg";
import space from "../images/SpacePhoto.jpeg";
import spaceRestaurant from "../images/SpaceRestaurant.jpeg";

const main = document.getElementById("content");

export function loadHome(){
    main.innerHTML = "";

    addContent(main, "p", "WELCOME TO THE COSMOS");
    addContent(main, "h1", "A Culinary Journey Beyond Earth");
    addContent(main, "p", 
        `
            Embark on an unforgettable dining experience where interstellar 
            design meets extraordinary cuisine. Surrounded by glowing nebulae, 
            orbiting planets, and panoramic views of the universe, every meal 
            feels like a voyage through the stars.
        `
    );
    let imageContainer = document.createElement("div");
    let imageContainer2 = document.createElement("div");

    imageContainer.id = "images";

    addContent(imageContainer, "img", null, dinner);
    addContent(imageContainer2, "img", null, space);
    addContent(imageContainer2, "img", null, spaceRestaurant);

    imageContainer.append(imageContainer2);

    main.append(imageContainer);

    addContent(main, "h2", "A Restaurant Orbiting Imagination");
    addContent(main, "p", 
        `
            We believe dining should be an experience, not just a meal. Inspired by deep space exploration, our concept merges advanced technology, immersive storytelling, and culinary artistry.

            Each dish represents a different corner of the universe—crafted with precision, creativity, and a touch of interstellar wonder.

        `
    );
    addContent(main, "h2", "Inside the Cosmos");
    addContent(main, "p", 
        `
            Step into a glowing environment of floating lights, panoramic galaxy views, and sleek futuristic architecture. Every table is positioned to feel like your own private window into space.

            Soft ambient lighting simulates distant stars, while dynamic projections bring nebulae and planets to life around you.
        `
    );

    let linkContainer = document.createElement("div");

    linkContainer.id = "links";

    addContent(linkContainer, "a", "Space Picture from Pinterest", null, "https://de.pinterest.com/pin/3025924743972631/?utm_source=chatgpt.com");
    addContent(linkContainer, "a", "Space Restaurant from Pinterest", null, "https://de.pinterest.com/pin/604960162478833587/");
    addContent(linkContainer, "a", "Space from Pinterest", null, "https://de.pinterest.com/pin/687010118164167337/");

    main.appendChild(linkContainer);

}

