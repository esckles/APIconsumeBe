"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainApp = (app) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.use("/api");
        app.get("/", (req, res) => {
            try {
                res.status(200).json({ message: "Welcome to my API", status: 200 });
            }
            catch (error) {
                res.status(404).json({ messsage: "Error to my API", status: 404 });
            }
        });
    }
    catch (error) {
        return error;
    }
});
exports.mainApp = mainApp;
