insert into users (
	first_name,
	last_name,
    phone,
    profile_pic_url,
	email,
	hash
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
)

returning
    first_name,
	last_name,
    phone,
    profile_pic_url,
	email