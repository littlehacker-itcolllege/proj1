from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^map/$',views.map,name='map'),

    url(r'^stage1-1/$',views.stage1_1,name='stage1-1'),
    url(r'^stage1-1/story1-1/$',views.story_html1_1,name='story1-1'),
    url(r'^stage1-1/game1-1/$',views.game_html1_1,name='game1-1'),
    url(r'^stage1-1/head1-1/$',views.head_html1_1,name='head1-1'),
    url(r'^stage1-1/nextstory1-1/$',views.nextstory_html1_1,name='nextstory1-1'),
    #stage1-2
    url(r'^stage1-2/$',views.stage1_2,name='stage1-2'),
    url(r'^stage1-2/story1-2/$',views.story_html1_2,name='story1-2'),
    url(r'^stage1-2/game1-2/$',views.game_html1_2,name='game1-2'),
    url(r'^stage1-2/head1-2/$',views.head_html1_2,name='head1-2'),
    url(r'^stage1-2/nextstory1-2/$',views.nextstory_html1_2,name='nextstory1-2'),

    url(r'^stage4-1/$',views.stage4_1,name='stage4-1'),
    url(r'^stage4-1/story4-1/$',views.story_html4_1,name='story4-1'),
    url(r'^stage4-1/game4-1/$',views.game_html4_1,name='game4-1'),
    url(r'^stage4-1/head4-1/$',views.head_html4_1,name='head4-1'),
    url(r'^stage4-1/nextstory4-1/$',views.nextstory_html4_1,name='nextstory4-1'),
    url(r'^stage4-1/see4-1/$',views.see_html4_1,name='see4-1'),
    url(r'^stage4-1/input4-1/$',views.input_html4_1,name='input4-1'),



    ]
