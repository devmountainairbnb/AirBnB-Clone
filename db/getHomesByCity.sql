select
    p.property_id,
    p.title,
    p.rating,
    p.cost,
    (array_agg(i.image_url))[1] as img_url,
    c.city_name
from property p
join image i on p.property_id = i.assoc_property_id
join address a on p.assoc_address_id = a.address_id
join city c on c.city_id = a.city_id
where a.city_id = $1
group by i.assoc_property_id, p.property_id, c.city_name
limit 8;