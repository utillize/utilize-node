import 'reflect-metadata'
import express, {Request, Response} from 'express';

const app = express();

app.get('/',(req: Request, res: Response) => {
    res.send('hello world')
})

app.listen(8000, ()=> {
    console.log('started Utilize on 8000')
})