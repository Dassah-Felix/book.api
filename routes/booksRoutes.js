const {Router} =require("express")


const{getBooks, createBook, deleteBook} =require("../controllers/booksController")

const router =Router();

router.route("/books").get(getBooks).post(createBook)
router.get("/books/:title", deleteBook)


module.exports=router