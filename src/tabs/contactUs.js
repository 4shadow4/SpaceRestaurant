import { addContent } from "./addContent.js";

const main = document.getElementById("content");

export function loadContactUs(){
    main.innerHTML = '';
    

        addContent(main, "p",`
            Email: contact@cosmicorbit.com
            `);
    

        addContent(main, "p",`
            Phone: +1 (555) 420-STAR
            `);
        

        addContent(main, "p",`
            Location: 42 Nebula Boulevard, Lunar City, Mars Colony
            `);

        addContent(main, "p",`
            Galactic Network: www.cosmicorbit.com
            `);
};