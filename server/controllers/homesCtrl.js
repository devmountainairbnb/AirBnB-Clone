
module.exports = {
    getHomes: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes()
        return res.status(200).send(response)
    },
    getHomesTopRated: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes_top_rated()
        return res.status(200).send(response)
    },
    createListing: async (req, res) => {
        const { 
            city_name, 
            state_name, 
            zipcode_name,
            street_address,
            title,
            cost,  
            description,
            bed,
            bath,
            rooms,
            guests,
            image_url, 
            kitchen, 
            shampoo, 
            heating,
            air_conditioning,
            washer,
            dryer,
            wifi,
            breakfast,
            indoor_fireplace,
            iron,
            hair_dryer,
            laptop_friendly_workspace,
            crib,
            tv,
            smoke_dectector,
            carbon_monoxide_detector,
            private_bathroom
        } = req.body
        const { id } = req.session.user

        const db = req.app.get('db')
        const newListing = await db.create_listing([
            city_name, 
            state_name, 
            zipcode_name,
            street_address,
            id,
            title,
            cost,
            description,
            bed,
            bath,
            rooms,
            guests,
            image_url, 
            kitchen, 
            shampoo, 
            heating,
            air_conditioning,
            washer,
            dryer,
            wifi,
            breakfast,
            indoor_fireplace,
            iron,
            hair_dryer,
            laptop_friendly_workspace,
            crib,
            tv,
            smoke_dectector,
            carbon_monoxide_detector,
            private_bathroom
        ])

        return res.status(200).send(newListing)
    }
}