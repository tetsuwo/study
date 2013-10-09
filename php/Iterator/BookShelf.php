<?php

class BookShelf implements Aggregate
{
    private $books = [];
    private $maxsize = null;
    private $last = 0;

    public function __construct($maxsize)
    {
        $this->books = [];
        $this->maxsize = $maxsize;
    }

    public function getBookAt($index)
    {
        return $this->books[$index];
    }

    public function appendBook(Book $book)
    {
        $this->books[$this->last] = $book;
        $this->last++;
    }

    public function getLength()
    {
        return $this->last;
    }

    public function iterator()
    {
        return new BookShelfIterator($this);
    }
}
