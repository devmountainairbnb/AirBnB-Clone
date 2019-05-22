insert into booking (
    assoc_property_id,
    guests,
    start_date,
    end_date
) values (
    $1,
    $2,
    $3,
    $4
)