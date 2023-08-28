const { readFileSync } = require("fs");
const { resolve } = require("path");


const Header = readFileSync(resolve(__dirname, "Header.html"), );
const Hero = readFileSync(resolve(__dirname, "Hero.html"), );
const Features = readFileSync(resolve(__dirname, "Features.html"), );
const Benifts = readFileSync(resolve(__dirname, "Benifts.html"), );
const Newslater = readFileSync(resolve(__dirname, "Newslater.html"), );
const Footer = readFileSync(resolve(__dirname, "Footer.html"), );


module.exports = {
  Header,
  Hero,
  Features,
  Benifts,
  Newslater,
  Footer,
}
