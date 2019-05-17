
module.exports = {
    getHomes: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes()
        return res.status(200).send(response)
    },

    getEightHomes: async (req, res) => {
        const db = req.app.get('db')
        let response = await db.get_Eight_Homes()
        return res.status(200).send(response)
    },
    getLastHome: async (req, res) => {
        const db = req.app.get('db')
        let response = await db.get_last_home()
        return res.status(200).send(response)
    },

    getCities: async (req, res) => {
        const db = req.app.get('db')
        let response = await db.get_Cities()
        return res.status(200).send(response)
    },

    getHomesByCity: async (req, res) => {
        let { city_id } = req.params
        console.log(req.params)
        const db = req.app.get('db')
        let response = await db.getHomesByCity([city_id])
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

        res.status(200).send(data)
    },

    getHomesTopRated: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes_top_rated()
        return res.status(200).send(response)
    },
    
    getHomesAustin: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_homes_austin()
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
            image_1, 
            image_2, 
            image_3, 
            image_4, 
            image_5, 
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
        // const { id } = req.session.user
        const id = 1;

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
            image_1, 
            image_2, 
            image_3, 
            image_4, 
            image_5, 
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