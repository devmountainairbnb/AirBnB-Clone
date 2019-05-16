select distinct
    p.property_id,
    p.title,
    p.rating,
    p.cost,
    (array_agg(i.image_url))[1] as img_url
from property p
join image i on p.property_id = i.assoc_property_id
group by p.property_id
limit 16