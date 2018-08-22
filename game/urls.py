from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^map/$',views.map,name='map'),
    url(r'^stage1-1/$',views.stage,name='stage1-1'),
    url(r'^stage1-1/story1-1/$',views.story_html,name='story1-1'),
    url(r'^stage1-1/game1-1/$',views.game_html,name='game1-1'),
    url(r'^stage1-1/head1-1/$',views.head_html,name='head1-1'),
    url(r'^stage1-1/nextstory1-1/$',views.nextstory_html,name='nextstory1-1'),

    ]
