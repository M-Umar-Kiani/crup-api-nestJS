import { Controller,Post, Put, Delete, Get, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService : BookService) {}

  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param("id") bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Get('/getAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }
}
