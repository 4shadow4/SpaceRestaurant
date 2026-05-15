import "./styles.css";
import { loadHome } from "./tabs/home.js";
import { loadMenu } from "./tabs/menu.js";
import { loadReviews } from "./tabs/reviews.js";
import { loadContactUs } from "./tabs/contactUs.js";
import { loadPhotos } from "./tabs/photos.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const reviews = document.getElementById("reviews");
const photos = document.getElementById("photos");
const contactus = document.getElementById("contactus");

home.addEventListener('click', loadHome);
menu.addEventListener('click', loadMenu);
reviews.addEventListener('click', loadReviews);
photos.addEventListener('click', loadPhotos);
contactus.addEventListener('click', loadContactUs);

loadHome();