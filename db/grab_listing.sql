select
    p.*
    , am.*
    , ad.street_address
    , c.city_name
    , s.state_name
    , z.zipcode_name
    , u.first_name
    , u.profile_pic_url
from property p
join amenities am on p.property_id = am.assoc_property_id
join address ad on p.assoc_address_id = ad.address_id
join city c on ad.city_id = c.city_id
join state s on ad.state_id = s.state_id
join zipcode z on ad.zipcode_id = z.zipcode_id
join users u on p.assoc_user_id = u.user_id

where p.property_id = $1