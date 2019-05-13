
module.exports = {
    getHomes: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes()
        return res.status(200).send(response)
    },
    getListing: async (req, res) => {
        const db = req.app.get('db')
        const {property_id} = req.params

        let listing = await db.grab_listing([property_id])
        let images = await db.grab_listing_images([property_id])

        const urls = images.map(img => img.image_url)

        const data = {
            details: listing[0],
            urls
        }
        
        console.log(data)

        res.status(200).send(data)

    }
}