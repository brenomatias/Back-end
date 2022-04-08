"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userController_1 = require("./controllers/userController");
var connection_1 = require("./models/connection");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var conn;
if (process.env.ENV === "devel") {
    conn = new connection_1.MockedConnection();
}
else {
    conn = connection_1["default"].conn;
}
app.post('/users', new userController_1["default"](new connection_1.MockedConnection()).createUser);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Ouvindo a porta ".concat(PORT));
});
