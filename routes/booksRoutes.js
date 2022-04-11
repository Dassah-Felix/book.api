const {Router} =require("express")
const auth= require("../middlewares/books.auth")


const{getBooks, createBook, deleteBook} =require("../controllers/booksController")

const router =Router();

router.route("/books").get(auth, getBooks).post(createBook)
router.delete("/books/:title",auth, deleteBook)


module.exports=router