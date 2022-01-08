// const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
const app = express();
var cors = require('cors');
// const {cloudinary} = require('./utils/cloudinary');
const mongoose = require("mongoose");
const atlasUrl = "mongodb+srv://mnitmarket:qwerty123@cluster0.4nggj.mongodb.net/productsDB?retryWrites=true&w=majority";
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

mongoose.connect(atlasUrl)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

const productsSchema = new mongoose.Schema({
    id: Number,
    rid: Number,
    isShown: Boolean,
    cloudlink: String
    // img: {data: Buffer, contentType: String},
},{timestamps: true});

const Product = mongoose.model('Product',productsSchema);
app.get('/',async (req,res)=>{
    //i could have used cloudinary api to fetch and delet
    // const query = await Product.find({isShown: false});
    const query = await Product.find({isShown: false});
    //we have got this fucking array 
    
    res.send(JSON.stringify(query));
    
    // console.log(query[0].cloudlink);
})
app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const sid = req.body.id;
        const rid = req.body.rndID;
        //now the id se i can insert into mongodb 
        //the admin portal 
        //no need to upload this response yet I think 

        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        const product = new Product({
            id: id,
            isShown: false,
            rid: rid,
            cloudlink: uploadResponse.url
        });
        try {
            product.save();
            console.log("saved something \n");
        } catch (error) {
            console.error(error);
        }
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log('listening on 3002');
});