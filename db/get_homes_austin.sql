select distinct
    p.property_id,
    p.title,
    p.rating,
    p.cost,
    (array_agg(i.image_url))[1] as img_url
from property p
join image i on p.property_id = i.assoc_property_id
where p.property_id in (14, 15, 16, 17)
group by p.property_id
limit 4