create table profiles (
auth_token,
first_name,
photo_id_array,
age,
height,
home_town,
home_state,
geolocation,
bio,
work,
school,
interests,
hangouts,
relationship_readiness,
age_range,
search_location_radius,
search_hometown, //true or false
matches_array,
blocked_user_array
);

create table messages (
messages_id,
user_id_01,
user_id_02,
messages, //array of messages w/ timestamp
);