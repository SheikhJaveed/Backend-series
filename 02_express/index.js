import express from 'express';

const app = express();
const port=3000;
app.use(express.json());

let teaData=[];
let nextid=1;

app.post('/api/data', (req, res) => {
    const {name,price}=req.body;
    const newTea={id:nextid++,name,price};
    teaData.push(newTea);
    res.status(201).json(newTea);
});

app.get('/teas', (req, res) => {
    res.json(teaData);
});

app.get('/teas/:id', (req, res) => {
    const tea=teaData.find((t)=>t.id===parseInt(req.params.id));
    if(tea){
        res.json(tea);
    }
    else{
        res.status(404).send('Tea not found\n');
    }
});

app.put('/teas/:id', (req, res) => {
    const tea=teaData.find((t)=>t.id===parseInt(req.params.id));
    if(!tea){
        return res.status(404).send('Tea not found\n');
    }
    const {name,price}=req.body;
    tea.name=name;
    tea.price=price;
    res.status(200).send('Tea updated\n');
});

app.delete('/teas/:id', (req, res) => {
    const index=teaData.findIndex((t)=>t.id===parseInt(req.params.id));
    if(index===-1){
        return res.status(404).send('Tea not found\n');
    }
    teaData.splice(index,1);
    res.status(200).send('Tea deleted\n');
})
app.get('/', (req, res) => {
    res.send('Hello World from Express\n');
});

app.get('/about', (req, res) => {
    res.send('About\n');
});

app.get('/contact', (req, res) => {
    res.send('Contact\n');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});