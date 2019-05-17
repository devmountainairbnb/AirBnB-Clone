select distinct street_address, city_name, state_name, zipcode_name, title, cost, rating, description, bed, bath, rooms, guests, image_url, property_id from address a 
inner join city c on (a.city_id = c.city_id)
inner join state s on (a.state_id = s.state_id) inner join zipcode z on (a.zipcode_id = z.zipcode_id) 
inner join property p on (a.address_id = p.assoc_address_id) inner join image i on (p.property_id = i.assoc_property_id)
where city_name in ('Los Angeles', 'London');