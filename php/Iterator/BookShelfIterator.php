<?php

use tetsukamp\Study\DesignPattern\Iterator as Iterator;

class BookShelfIterator implements Iterator
{
    private $bookShelf;
    private $index;

    public function __construct(BookShelf $bookShelf)
    {
        $this->bookShelf = $bookShelf;
        $this->index = 0;
    }

    public function hasNext()
    {
        return $this->index < $this->bookShelf->getLength();
    }

    public function next()
    {
        $book = $this->bookShelf->getBookAt($this->index);
        $this->index++;
        return $book;
    }
}
