import  express  from "express";


const router = express.Router();

router.post('/messages', (req, res) =>{
  res.send("messages");
});


export default router;