select start_date, end_date
from booking
where assoc_property_id = $1
order by start_date