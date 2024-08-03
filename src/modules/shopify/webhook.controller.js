

const redirect = (req, res) =>{
    try {
        console.log(req.body)
        res.status(200).send("Data recieved!")
    } catch (error) {
        res.status(500).send({message:error?.message||"Internal Server Error"});
    }
}

module.exports = redirect;