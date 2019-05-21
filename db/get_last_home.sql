-- select
-- array_agg(i.image_url) as image_url,
-- array_agg(p.title) as title,
-- array_agg(p.cost) as cost,
-- array_agg(p.description) as description,
-- array_agg(p.bed) as bed,
-- array_agg(p.bath) as bath,
-- array_agg(p.rooms) as rooms,
-- array_agg(p.guests) as guests
-- from property p
-- join image i on p.property_id = i.assoc_property_id
-- group by i.assoc_property_id
-- order by i.assoc_property_id desc
-- limit 1;



select distinct
    p.property_id,
    p.title,
    p.rooms,
    p.guests,
    p.bed,
    p.bath,
    p.cost,
    (array_agg(i.image_url))[1] as img_url
from property p
join image i on p.property_id = i.assoc_property_id
group by p.property_id
order by p.property_id desc
limit 1