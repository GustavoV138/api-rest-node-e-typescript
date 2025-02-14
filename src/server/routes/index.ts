import { Router } from 'express';

const router = Router();


router.get("/", (_, res) => {
    res.send("Olá Dev!!!");
});

router.post("/teste", (req, res) => {
    console.log(req.body);

    res.status(200).send("Seja lá o que você enviou, FUNCIONOU!");
});


export { router };