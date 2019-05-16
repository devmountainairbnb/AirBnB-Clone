select
array_agg(i.image_url) as image_url,
array_agg(p.title) as title,
array_agg(p.cost) as cost,
array_agg(p.rating) as rating
from property p
join image i on p.property_id = i.assoc_property_id
where p.property_id in (14, 15, 16, 17)
group by i.assoc_property_id