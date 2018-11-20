/**
 * Created by liuxiaohuan on 2017/8/29.
 */
// function AllPage(dom) {
//     this.Parent = dom;
//     this.flag = true;
//     this.init.apply(this, arguments);
//     this.active = 1;
//
// };
// AllPage.prototype = {
//     init: function(data) {
//         this.setLi();
//         this.pageCtr()
//     },
//     setLi: function() {
//         var me = this,
//             len = this.Parent.find('.fy-items').length, //列表的总条数
//             PageNum = Math.round(len / 5), //每页显示5条供多少页
//             oLi = "<li class='page-cur'>1</li>",
//             oLiA = "<li>...</li>";
//         $(".all-page span").text(PageNum)
//         if (PageNum > 10) {
//             for (var i = 1; i < 6; i++) {
//                 oLi += "<li>" + (i + 1) + "</li>"
//             }
//
//
//             oLiA += "<li>" + PageNum + "</li>"
//             $(".page-number").html(oLi + oLiA);
//
//         } else {
//             for (var i = 1; i < PageNum; i++) {
//                 oLi += "<li>" + (i + 1) + "</li>"
//             }
//             $(".page-number").html(oLi);
//         }
//
//     },
//     fixLi: function(index) {
//         var me = this,
//             len = this.Parent.find('.fy-items').length,
//             PageNum = Math.round(len / 5),
//             oLi = "<li>1</li><li>...</li>",
//             oLiA = "",
//             oLiB = "<li>...</li>"
//         for (var i = index - 2; i < index; i++) {
//             oLiA += "<li>" + (i + 1) + "</li>";
//         }
//         for (var i = index; i < index + 2; i++) {
//             oLiA += "<li>" + (i + 1) + "</li>"
//         }
//         if (index < PageNum - 3) {
//             oLiA += "<li>...</li><li>" + PageNum + "</li>"
//         } else {
//             if (me.flag) {
//                 for (var i = index; i < PageNum; i++) {
//                     oLiA += "<li>" + (i + 1) + "</li>";
//                     me.flag = false;
//                 }
//             }
//         }
//         $(".page-number").html(oLi + oLiA);
//     },
//     _fixLi: function() {
//         var me = this,
//             len = this.Parent.find('.fy-items').length,
//             PageNum = Math.round(len / 5),
//             oLi = "<li>1</li><li>...</li>",
//             oLiA = "";
//         for (var i = PageNum - 5; i < PageNum; i++) {
//             oLiA += "<li>" + (i + 1) + "</li>"
//         }
//         $(".page-number").html(oLi + oLiA);
//     },
//     pageCtr: function() {
//         var split = 5,
//             me = this,
//             len = this.Parent.find('.fy-items').length,
//             PageNum = Math.round(len / 5),
//             PageStart = 5;
//         //点击页码
//         $(".page-number").delegate('li', 'click', function() {
//             me.active = $(this).text();
//             if (me.active == "...") {
//                 return
//             } else {
//                 var Tpr = me.active - 1;
//                 $('.fy-items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
//                 if (PageNum > 10) {
//                     if (me.active > 5 && me.active < PageNum - 2) {
//                         me.fixLi(me.active - 1);
//                     } else if (me.active < 5) {
//                         me.setLi()
//                     } else if (me.active >= PageNum - 2) {
//                         me._fixLi();
//                     }
//                 }
//                 $(".page-number").find('li').each(function() {
//                     if ($(this).text() == me.active) {
//                         $(this).addClass("page-cur").siblings().removeClass("page-cur");
//                     }
//                 })
//             }
//             me._Style(me.active, PageNum);
//         });
//         //搜索
//         $('.page-btn').bind('click', function() {
//             me.active = $(".text").val() || 1;
//             if (!isNaN(me.active)) {
//                 var Tpr = me.active - 1,
//                     len = me.Parent.find('.fy-items').length / 5;
//                 if (me.active <= len && me.active > 0) {
//                     $('.fy-items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
//                 } else {
//                     alert('页面输入超出范围了!')
//                     return false;
//                 }
//
//                 if (PageNum > 10) {
//                     if (me.active > 5 && me.active < PageNum - 2) {
//                         me.fixLi(Tpr);
//                     } else if (me.active < 5) {
//                         me.setLi()
//                     } else if (me.active >= PageNum - 2) {
//                         me._fixLi();
//                     }
//                 }
//                 $(".page-number").find('li').each(function() {
//                     if ($(this).text() == me.active) {
//                         $(this).addClass("page-cur").siblings().removeClass("page-cur");
//                     }
//                 });
//                 me._Style(me.active, PageNum);
//             } else {
//                 return
//             }
//
//         });
//         //上一页
//         $(".pre").bind('click', function() {
//             if (me.active > 1) {
//                 me.active -= 1;
//                 var Tpr = me.active - 1;
//                 $('.fy-items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
//                 if (PageNum > 10) {
//                     if (me.active > 5 && me.active < PageNum - 2) {
//                         me.fixLi(me.active - 1);
//                     } else if (me.active < 5) {
//                         me.setLi()
//                     } else if (me.active > PageNum - 2) {
//                         me._fixLi();
//                     }
//                 }
//                 $(".page-number").find('li').each(function() {
//                     if ($(this).text() == me.active) {
//                         $(this).addClass("page-cur").siblings().removeClass("page-cur");
//                     }
//                 });
//             }
//             me._Style(me.active, PageNum);
//         });
//         //下一页
//         $(".next").bind('click', function() {
//
//             if (me.active < PageNum) {
//                 me.active = Number(me.active) + 1;
//                 var Tpr = me.active - 1;
//
//                 $('.fy-items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
//
//                 if (PageNum > 10) {
//                     if (me.active > 5 && me.active < PageNum - 2) {
//                         me.fixLi(me.active - 1);
//                     } else if (me.active < 5) {
//                         me.setLi()
//                     } else if (me.active > PageNum - 2) {
//                         me._fixLi();
//                     }
//                 }
//                 $(".page-number").find('li').each(function() {
//                     if ($(this).text() == me.active) {
//                         $(this).addClass("page-cur").siblings().removeClass("page-cur");
//                     }
//                 });
//             }
//             me._Style(me.active, PageNum);
//         });
//     },
//     _Style: function(start, end) {
//         if (start == end) {
//             $(".next").addClass('defau');
//             $(".pre").removeClass('defau');
//         } else if (start > 1 && start < end) {
//             $(".pre").removeClass('defau');
//             $(".next").removeClass('defau');
//         } else if (start == 1) {
//             $(".pre").addClass('defau')
//             $(".next").removeClass('defau');
//         }
//     }
// };
// $.fn.Page = function() {
//     var $me = $(this)
//     return new AllPage($me)
// }



function AllPage(dom) {
    this.Parent = dom;
    this.flag = true;
    this.init.apply(this, arguments);
    this.active = 1;

};
AllPage.prototype = {
    init: function(data) {
        this.setLi();
        this.pageCtr()
    },
    setLi: function() {
        var me = this,
            len = this.Parent.find('.items').length, //列表的总条数
            PageNum = Math.round(len / 6), //每页显示5条供多少页
            oLi = "<li class='page-cur'>1</li>",
            oLiA = "<li>...</li>";
        $(".all-page span").text(PageNum)
        if (PageNum > 12) {
            for (var i = 1; i < 6; i++) {
                oLi += "<li>" + (i + 1) + "</li>"
            }


            oLiA += "<li>" + PageNum + "</li>"
            $(".page-number").html(oLi + oLiA);

        } else {
            for (var i = 1; i < PageNum; i++) {
                oLi += "<li>" + (i + 1) + "</li>"
            }
            $(".page-number").html(oLi);
        }

    },
    fixLi: function(index) {
        var me = this,
            len = this.Parent.find('.items').length,
            PageNum = Math.round(len / 6),
            oLi = "<li>1</li><li>...</li>",
            oLiA = "",
            oLiB = "<li>...</li>"
        for (var i = index - 2; i < index; i++) {
            oLiA += "<li>" + (i + 1) + "</li>";
        }
        for (var i = index; i < index + 2; i++) {
            oLiA += "<li>" + (i + 1) + "</li>"
        }
        if (index < PageNum - 3) {
            oLiA += "<li>...</li><li>" + PageNum + "</li>"
        } else {
            if (me.flag) {
                for (var i = index; i < PageNum; i++) {
                    oLiA += "<li>" + (i + 1) + "</li>";
                    me.flag = false;
                }
            }
        }
        $(".page-number").html(oLi + oLiA);
    },
    _fixLi: function() {
        var me = this,
            len = this.Parent.find('.items').length,
            PageNum = Math.round(len / 6),
            oLi = "<li>1</li><li>...</li>",
            oLiA = "";
        for (var i = PageNum - 6; i < PageNum; i++) {
            oLiA += "<li>" + (i + 1) + "</li>"
        }
        $(".page-number").html(oLi + oLiA);
    },
    pageCtr: function() {
        var split = 6,
            me = this,
            len = this.Parent.find('.items').length,
            PageNum = Math.round(len / 6),
            PageStart = 6;
        //点击页码
        $(".page-number").delegate('li', 'click', function() {
            me.active = $(this).text();
            if (me.active == "...") {
                return
            } else {
                var Tpr = me.active - 1;
                $('.items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
                if (PageNum > 12) {
                    if (me.active > 6 && me.active < PageNum - 2) {
                        me.fixLi(me.active - 1);
                    } else if (me.active < 6) {
                        me.setLi()
                    } else if (me.active >= PageNum - 2) {
                        me._fixLi();
                    }
                }
                $(".page-number").find('li').each(function() {
                    if ($(this).text() == me.active) {
                        $(this).addClass("page-cur").siblings().removeClass("page-cur");
                    }
                })
            }
            me._Style(me.active, PageNum);
        });
        //搜索
        $('.page-btn').bind('click', function() {
            me.active = $(".text").val() || 1;
            if (!isNaN(me.active)) {
                var Tpr = me.active - 1,
                    len = me.Parent.find('.items').length / 6;
                if (me.active <= len && me.active > 0) {
                    $('.items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
                } else {
                    alert('页面输入超出范围了!')
                    return false;
                }

                if (PageNum > 12) {
                    if (me.active > 6 && me.active < PageNum - 2) {
                        me.fixLi(Tpr);
                    } else if (me.active < 6) {
                        me.setLi()
                    } else if (me.active >= PageNum - 2) {
                        me._fixLi();
                    }
                }
                $(".page-number").find('li').each(function() {
                    if ($(this).text() == me.active) {
                        $(this).addClass("page-cur").siblings().removeClass("page-cur");
                    }
                });
                me._Style(me.active, PageNum);
            } else {
                return
            }

        });
        //上一页
        $(".pre").bind('click', function() {
            if (me.active > 1) {
                me.active -= 1;
                var Tpr = me.active - 1;
                $('.items').hide().slice(Tpr * PageStart, me.active * PageStart).show();
                if (PageNum > 12) {
                    if (me.active > 6 && me.active < PageNum - 2) {
                        me.fixLi(me.active - 1);
                    } else if (me.active < 6) {
                        me.setLi()
                    } else if (me.active > PageNum - 2) {
                        me._fixLi();
                    }
                }
                $(".page-number").find('li').each(function() {
                    if ($(this).text() == me.active) {
                        $(this).addClass("page-cur").siblings().removeClass("page-cur");
                    }
                });
            }
            me._Style(me.active, PageNum);
        });
        //下一页
        $(".next").bind('click', function() {

            if (me.active < PageNum) {
                me.active = Number(me.active) + 1;
                var Tpr = me.active - 1;

                $('.items').hide().slice(Tpr * PageStart, me.active * PageStart).show();

                if (PageNum > 12) {
                    if (me.active > 6 && me.active < PageNum - 2) {
                        me.fixLi(me.active - 1);
                    } else if (me.active < 6) {
                        me.setLi()
                    } else if (me.active > PageNum - 2) {
                        me._fixLi();
                    }
                }
                $(".page-number").find('li').each(function() {
                    if ($(this).text() == me.active) {
                        $(this).addClass("page-cur").siblings().removeClass("page-cur");
                    }
                });
            }
            me._Style(me.active, PageNum);
        });
    },
    _Style: function(start, end) {
        if (start == end) {
            $(".next").addClass('defau');
            $(".pre").removeClass('defau');
        } else if (start > 1 && start < end) {
            $(".pre").removeClass('defau');
            $(".next").removeClass('defau');
        } else if (start == 1) {
            $(".pre").addClass('defau')
            $(".next").removeClass('defau');
        }
    }
};
$.fn.Page = function() {
    var $me = $(this)
    return new AllPage($me)
}