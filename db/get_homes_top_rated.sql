-- select
-- array_agg(i.image_url) as image_url,
-- array_agg(p.title) as title,
-- array_agg(p.cost) as cost,
-- array_agg(p.rating) as rating
-- from property p
-- join image i on p.property_id = i.assoc_property_id
-- where p.rating = 5
-- group by i.assoc_property_id
-- limit 4


select distinct
    p.property_id,
    p.title,
    p.rating,
    p.cost,
    (array_agg(i.image_url))[1] as img_url
from property p
join image i on p.property_id = i.assoc_property_id
where p.rating = 5
group by p.property_id
limit 4