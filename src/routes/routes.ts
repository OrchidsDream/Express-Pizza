// require the express module
import express from "express";
 
// create a new Router object
const routes = express.Router();
 
routes.get("/", (req, res) => {
    res.render("homepage");
})

routes.get("/specialty", (req, res) => {
    const query = req.query;
    res.render("specialty", query);
})

routes.get("/reviews", (req,res) => {
    const query= req.query;
    res.render("reviews", query)
})
export default routes;
