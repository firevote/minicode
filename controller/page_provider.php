<?php

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT & ~E_WARNING);

class page_provider extends spController
{
    //------------------  后台页面请求---------------------------------
    function index()
    {
        $this->display('index/index.html');
    }

    function get_page() {
        $page_name = $_POST['page_name'];
        if($page_name == 'living_room') {
            $this->display('index/living_room.html');
        } else if($page_name == 'search') {
            $this->display('index/search.html');
        } else if($page_name == 'personal_center') {
            $this->display('index/personal_center.html');
        } else if($page_name == 'help') {
            $this->display('index/help.html');
        } else if($page_name == 'about') {
            $this->display('index/about.html');
        }
    }

}