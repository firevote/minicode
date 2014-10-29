<?php

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT & ~E_WARNING);

class main extends spController
{
    //------------------  后台页面请求---------------------------------
    function index()
    {
        $this->display('index/index.html');
    }
}