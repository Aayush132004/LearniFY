const express=require("express");
const subjectiveRouter=express.Router();
const {getProblemByClass}=require("../controllers/subjectiveController")

subjectiveRouter.get("/problemByClass/:Class",getProblemByClass);
// subjectiveRouter.get("/problemResponse/:id",getResponseByPid);




module.exports=subjectiveRouter;