from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.stage,name='stage'),
    url(r'^story/$',views.story_html,name='story'),
    url(r'^game/$',views.game_html,name='game'),
    url(r'^head/$',views.head_html,name='head'),
    ]
