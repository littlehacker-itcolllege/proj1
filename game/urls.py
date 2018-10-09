from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^map/$',views.map,name='map'),
    url(r'^stage1-1/$',views.stage,name='stage1-1'),
    url(r'^stage1-1/story1-1/$',views.story_html,name='story1-1'),
    url(r'^stage1-1/game1-1/$',views.game_html,name='game1-1'),
    url(r'^stage1-1/head1-1/$',views.head_html,name='head1-1'),
    url(r'^stage1-1/nextstory1-1/$',views.nextstory_html,name='nextstory1-1'),
    #stage1-2
    url(r'^stage1-2/$',views.stage2,name='stage1-2'),
    url(r'^stage1-2/story1-2/$',views.story_html2,name='story1-2'),
    url(r'^stage1-2/game1-2/$',views.game_html2,name='game1-2'),
    url(r'^stage1-2/wepon/$',views.game_wepon,name='wepon'),
    url(r'^stage1-2/head1-2/$',views.head_html2,name='head1-2'),
    url(r'^stage1-2/nextstory1-2/$',views.nextstory_html2,name='nextstory1-2'),
    #stage1-3
    url(r'^stage1-3/$',views.stage3,name='stage1-3'),
    url(r'^stage1-3/story1-3/$',views.story_html3,name='story1-3'),
    url(r'^stage1-3/game1-3/$',views.game_html3,name='game1-3'),
    url(r'^stage1-3/head1-3/$',views.head_html3,name='head1-3'),
    url(r'^stage1-3/nextstory1-3/$',views.nextstory_html3,name='nextstory1-3'),
    #stage1-4
    url(r'^stage1-4/$',views.stage4,name='stage1-4'),
    url(r'^stage1-4/story1-4/$',views.story_html4,name='story1-4'),
    url(r'^stage1-4/game1-4/$',views.game_html4,name='game1-4'),
    url(r'^stage1-4/head1-4/$',views.head_html4,name='head1-4'),
    url(r'^stage1-4/nextstory1-4/$',views.nextstory_html4,name='nextstory1-4'),
    #stage2-1
    url(r'^stage2-1/$',views.stage5,name='stage1-4'),
    url(r'^stage2-1/story2-1/$',views.story_html5,name='story2-1'),
    url(r'^stage2-1/game2-1/$',views.game_html5,name='game2-1'),
    url(r'^stage2-1/head2-1/$',views.head_html5,name='head2-1'),
    url(r'^stage2-1/nextstory2-1/$',views.nextstory_html5,name='nextstory2-1'),

    ]
