/**
 * Created by W.J.Chang on 2014/10/29.
 */
define(function(require,exports){
    var urls = {
        get_page_url:'./index.php?c=page_provider&a=get_page'

    };

    var controls = {
        // 页面挂载节点
        page_node:$('#page_node'),

        // 左侧导航
        left_nav_items:$('.main-nav-left li')
    };

    function init() {
        bind_event();
        controls.left_nav_items.first().trigger('click');
    }

    function bind_event() {
        // 阻断网页右键
        $(document).bind("contextmenu", function () {
            return false;
        });

        // 阻断网页选中功能
        $(document).bind("selectstart", function () {
            return false;
        });

        // 绑定导航点击事件
        controls.left_nav_items.bind('click',function(){
            var post_args={'page_name':$(this).children('input').first().val()};

            show_page_loading();
            controls.page_node.load(urls.get_page_url,post_args,function() {
                remove_page_loading();

            });
        });
    }

    function show_page_loading() {
        var dom = '<div class="loading"><img src="assert/image/loading.gif"/></div>';
        $('body').append(dom);
    }

    function remove_page_loading() {
        setTimeout(function(){
            $('.loading').remove();
        },500);
    }

    exports.init = init;
});