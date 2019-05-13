
module.exports = {
    getHomes: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes()
        return res.status(200).send(response)
    }
}