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
    url(r'^stage1-2/head1-2/$',views.head_html2,name='head1-2'),
    url(r'^stage1-2/nextstory1-2/$',views.nextstory_html2,name='nextstory1-2'),

    ]
