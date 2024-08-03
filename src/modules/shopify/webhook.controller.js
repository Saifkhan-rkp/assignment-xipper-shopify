

const redirect = (req, res) =>{
    try {
        res.redirect(`http://localhost:4000/api/test/${btoa(JSON.stringify(res.data))}`)
    } catch (error) {
        res.status(500).send({message:error?.message||"Internal Server Error"});
    }
}

module.exports = redirect;