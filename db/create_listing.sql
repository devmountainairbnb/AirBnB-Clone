insert into city (
    city_name
) values (
    $1
);

insert into state (
    state_name
) values (
    $2
);

insert into zipcode (
    zipcode_name
) values (
    $3
);

insert into address (street_address, city_id, state_id, zipcode_id) 
select $4, max(city_id), max(state_id), max(zipcode_id)
from city, state, zipcode;

insert into property (assoc_user_id, assoc_address_id, title, cost, description, bed, bath, rooms, guests)
select $5, max(address_id), $6, $7, $8, $9, $10, $11, $12
from address;

insert into image (assoc_property_id, image_url)
select max(property_id), $13
from property;

insert into amenities (assoc_property_id, kitchen, shampoo, heating, air_conditioning, washer, dryer, wifi, breakfast, indoor_fireplace, iron, hair_dryer, laptop_friendly_workspace, crib, tv, smoke_detector, carbon_monoxide_detector, private_bathroom)
select max(property_id), $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30
from property

