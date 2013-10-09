<?php

require_once("Aggregate.php");
require_once("Iterator.php");
require_once("BookShelf.php");
require_once("BookShelfIterator.php");
require_once("Book.php");

use tetsukamp\Study\DesignPattern\Iterator as Iterator;

class Main
{
    public function __construct()
    {
        $bookShelf = new BookShelf(1);
        $bookShelf->appendBook(new Book("Around the World in 80 Days"));
        $bookShelf->appendBook(new Book("Bible"));
        $bookShelf->appendBook(new Book("Cinderella"));
        $it = $bookShelf->iterator();
        while ($it->hasNext())
        {
            $book = $it->next();
            printf($book->getName() . "\n");
        }
    }
}

new Main();
