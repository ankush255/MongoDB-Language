-- 1
// use e_commerce





-- 2

db.customers.insertMany([
    {
        "_id":"C00001",
        "firstName":"Ankush",
        "lastName":"Thummar",
        "email":"ankush67@gmail.com",
        "password":"ankush6788"
    },
    {
        "_id":"C00002",
        "firstName":'Het',
        "lastName":'Lathiya',
        "email":'het278@gmail.com',
        "password":'het673'
    },
    {
        "_id":"C00003",
        "firstName":"Nayan",
        "lastName":"Katariya",
        "email":"nayan67@gmail.com",
        "password":"nayan90"
    },
    {
        "_id":"C00004",
        "firstName":"Minesh",
        "lastName":"Savaliya",
        "email":"mineah45@gmail.com",
        "password":"munno908"
    },
    {
        "_id":"C00005",
        "firstName":"Raj",
        "lastName":"Kanani",
        "email":"raj85@gmail.com",
        "password":"raj08"
    }]);



db.product.insertMany([
    {
        "product_id" : "1",
        "product_Name" : "Mobile",
        "products_description" : "Personal USE",
        "product_price" : "20000",
        "product_quantity": "3",
        "category" : "Electronic",
    },{
        "product_id" : "2",
        "product_Name" : "Charger",
        "products_description" : "Mobile USE",
        "product_price" : "1000",
        "product_quantity": "4",
        "category" : "Electronic",
    },{
        "product_id" : "3",
        "product_Name" : "Cable",
        "products_description" : "Charger Connecter",
        "product_price" : "150",
        "product_quantity": "6",
        "category" : "Rubber",
    },{
        "product_id" : "4",
        "product_Name" : "Mobile Cover",
        "products_description" : "Mobile USE",
        "product_price" : "200",
        "product_quantity": "3",
        "category" : "Rubber , Plastic",
    },{
        "product_id" : "5",
        "product_Name" : "Smart Watch",
        "products_description" : "Clock and Mini Mobile",
        "product_price" : "2000",
        "product_quantity": "5",
        "category" : "Electronic",
    }
]);



db.order.insertMany([
    {
        "Order_id": "O-1",
        "Customer_id" : "C-1",
        "Order_Date" : "2023-10-10",
        "Total_Price" : "23000.90",
    }, {
        "Order_id" : ")-2",
        "Customer_id" : "C-2",
        "Order_Date" : "2023-10-13",
        "Total_Price" : "8700.89",
    }, {
        "Order_id" : "O-3",
        "Customer_id" : "C-3",
        "Order_Date" : "2023-10-14",
        "Total_Price" : "34500.50",
    }, {
        "Order_id" : "O-4",
        "Customer_id" : "C-4",
        "Order_Date" : "2023-10-16",
        "Total_Price" : "50200.10",
    }, {
        "Order_id" : "O-5",
        "Customer_id" : "C-5",
        "Order_Date" : "2023-10-19",
        "Total_Price" : "60900.80",
    }
]);




db.order_item.insertMany([
    {
        "Order_item_id" : "O-I-1",
        "Order_id" : "O-1",
        "Product_id" : "1",
        "Quantity" : "100",
        "Price" : "100000"
    },{
        "Order_item_id" : "O-I-45",
        "Order_id" : "O-2",
        "Product_id" : "2",
        "Quantity" : "56",
        "Price" : "34500"
    },{
        "Order_item_id" : "O-I-89",
        "Order_id" : "O-3",
        "Product_id" : "3",
        "Quantity" : "90",
        "Price" : "190000"
    },{
        "Order_item_id" : "O-I-98",
        "Order_id" : "O-4",
        "Product_id" : "4",
        "Quantity" : "210",
        "Price" : "50000"
    },{
        "Order_item_id" : "O-I-119",
        "Order_id" : "O-5",
        "Product_id" : "5",
        "Quantity" : "110",
        "Price" : "10900"
    }
]);




-- 4

db.customers.find();






--5

db.product.find();





--6 

db.order.find();





--7

db.order_item.find();







--9

db.product.updateMany({"product_id" : '1'},{$set : {"product_quantity" : '10'}});






--10

db.product.aggregate([{$sort:{"category" : 1}}]);





--12

db.order.deleteOne({"Order_id" : 'O-3'});