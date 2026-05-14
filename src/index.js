import "./styles.css";
import { loadHome } from "./tabs/home.js";
import { loadMenu } from "./tabs/menu.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const reviews = document.getElementById("reviews");
const photos = document.getElementById("photos");
const contacus = document.getElementById("contactus");

home.addEventListener('click', loadHome);
menu.addEventListener('click', loadMenu);