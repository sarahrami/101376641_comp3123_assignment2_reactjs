db = db.getSiblingDB("fall2023_comp3123");

db.createUser({
    user: "root",
    pwd: "password",
    roles: [{role: "readWrite", db: "fall2023_comp3123"}]
});

db.createCollection("user");