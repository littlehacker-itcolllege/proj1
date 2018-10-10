from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^map/$',views.map,name='map'),

    url(r'^stage4-1/$',views.stage4_1,name='stage4-1'),
    url(r'^stage4-1/story4-1/$',views.story_html4_1,name='story4-1'),
    url(r'^stage4-1/game4-1/$',views.game_html4_1,name='game4-1'),
    url(r'^stage4-1/head4-1/$',views.head_html4_1,name='head4-1'),
    url(r'^stage4-1/nextstory4-1/$',views.nextstory_html4_1,name='nextstory4-1'),
    url(r'^stage4-1/see4-1/$',views.see_html4_1,name='see4-1'),
    url(r'^stage4-1/input4-1/$',views.input_html4_1,name='input4-1'),

    url(r'^stage4-2/$',views.stage4_2,name='stage4-2'),
    url(r'^stage4-2/story4-2/$',views.story_html4_2,name='story4-2'),
    url(r'^stage4-2/game4-2/$',views.game_html4_2,name='game4-2'),
    url(r'^stage4-2/head4-2/$',views.head_html4_2,name='head4-2'),
    url(r'^stage4-2/nextstory4-2/$',views.nextstory_html4_2,name='nextstory4-2'),
    url(r'^stage4-2/see4-2/$',views.see_html4_2,name='see4-2'),
    url(r'^stage4-2/see4-2-1/$',views.see_html4_2_1,name='see4-2-1'),
    url(r'^stage4-2/input4-2/$',views.input_html4_2,name='input4-2'),

    url(r'^stage4-3/$',views.stage4_3,name='stage4-3'),
    url(r'^stage4-3/story4-3/$',views.story_html4_1,name='story4-3'),
    url(r'^stage4-3/game4-3/$',views.game_html4_1,name='game4-3'),
    url(r'^stage4-3/head4-3/$',views.head_html4_1,name='head4-3'),
    url(r'^stage4-3/nextstory4-3/$',views.nextstory_html4_1,name='nextstory4-3'),
    url(r'^stage4-3/see4-3/$',views.see_html4_1,name='see4-3'),
    url(r'^stage4-3/input4-3/$',views.input_html4_1,name='input4-3'),
]
