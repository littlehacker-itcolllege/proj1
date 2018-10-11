from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^map/$',views.map,name='map'),
    #stage1-1
    url(r'^stage1-1/$',views.stage1_1,name='stage1-1'),
    url(r'^stage1-1/story1-1/$',views.story1_1,name='story1-1'),
    url(r'^stage1-1/game1-1/$',views.game1_1,name='game1-1'),
    url(r'^stage1-1/head1-1/$',views.head1_1,name='head1-1'),
    url(r'^stage1-1/nextstory1-1/$',views.nextstory1_1,name='nextstory1-1'),
    #stage1-2
    url(r'^stage1-2/$',views.stage1_2,name='stage1-2'),
    url(r'^stage1-2/story1-2/$',views.story1_2,name='story1-2'),
    url(r'^stage1-2/game1-2/$',views.game1_2,name='game1-2'),
    url(r'^stage1-2/wepon/$',views.game_wepon,name='wepon'),
    url(r'^stage1-2/head1-2/$',views.head1_2,name='head1-2'),
    url(r'^stage1-2/nextstory1-2/$',views.nextstory1_2,name='nextstory1-2'),
    #stage1-3
    url(r'^stage1-3/$',views.stage1_3,name='stage1-3'),
    url(r'^stage1-3/story1-3/$',views.story1_3,name='story1-3'),
    url(r'^stage1-3/game1-3/$',views.game1_3,name='game1-3'),
    url(r'^stage1-3/head1-3/$',views.head1_3,name='head1-3'),
    url(r'^stage1-3/nextstory1-3/$',views.nextstory1_3,name='nextstory1-3'),
    #stage1-4
    url(r'^stage1-4/$',views.stage1_4,name='stage1-4'),
    url(r'^stage1-4/story1-4/$',views.story1_4,name='story1-4'),
    url(r'^stage1-4/game1-4/$',views.game1_4,name='game1-4'),
    url(r'^stage1-4/head1-4/$',views.head1_4,name='head1-4'),
    url(r'^stage1-4/nextstory1-4/$',views.nextstory1_4,name='nextstory1-4'),
    #stage2-1
    url(r'^stage2-1/$',views.stage2_1,name='stage2-1'),
    url(r'^stage2-1/story2-1/$',views.story2_1,name='story2-1'),
    url(r'^stage2-1/game2-1/$',views.game2_1,name='game2-1'),
    url(r'^stage2-1/head2-1/$',views.head2_1,name='head2-1'),
    url(r'^stage2-1/nextstory2-1/$',views.nextstory2_1,name='nextstory2-1'),
    #stage2-2
    url(r'^stage2-2/$',views.stage2_2,name='stage2-2'),
    url(r'^stage2-2/story2-2/$',views.story2_2,name='story2-2'),
    url(r'^stage2-2/game2-2/$',views.game2_2,name='game2-2'),
    url(r'^stage2-2/head2-2/$',views.head2_2,name='head2-2'),
    url(r'^stage2-2/nextstory2-2/$',views.nextstory2_2,name='nextstory2-2'),
    #stage2-3
    url(r'^stage2-3/$',views.stage2_3,name='stage2-3'),
    url(r'^stage2-3/story2-3/$',views.story2_3,name='story2-3'),
    url(r'^stage2-3/game2-3/$',views.game2_3,name='game2-3'),
    url(r'^stage2-3/head2-3/$',views.head2_3,name='head2-3'),
    url(r'^stage2-3/nextstory2-3/$',views.nextstory2_3,name='nextstory2-3'),
    #stage4-1
    url(r'^stage4-1/$',views.stage4_1,name='stage4-1'),
    url(r'^stage4-1/story4-1/$',views.story4_1,name='story4-1'),
    url(r'^stage4-1/game4-1/$',views.game4_1,name='game4-1'),
    url(r'^stage4-1/head4-1/$',views.head4_1,name='head4-1'),
    url(r'^stage4-1/nextstory4-1/$',views.nextstory4_1,name='nextstory4-1'),
    url(r'^stage4-1/see4-1/$',views.see4_1,name='see4-1'),
    url(r'^stage4-1/input4-1/$',views.input4_1,name='input4-1'),

    url(r'^stage4-2/$',views.stage4_2,name='stage4-2'),
    url(r'^stage4-2/story4-2/$',views.story4_2,name='story4-2'),
    url(r'^stage4-2/game4-2/$',views.game4_2,name='game4-2'),
    url(r'^stage4-2/head4-2/$',views.head4_2,name='head4-2'),
    url(r'^stage4-2/nextstory4-2/$',views.nextstory4_2,name='nextstory4-2'),
    url(r'^stage4-2/see4-2/$',views.see4_2,name='see4-2'),
    url(r'^stage4-2/see4-2-1/$',views.see4_2_1,name='see4-2-1'),
    url(r'^stage4-2/input4-2/$',views.input4_2,name='input4-2'),

    url(r'^stage4-3/$',views.stage4_3,name='stage4-3'),
    url(r'^stage4-3/story4-3/$',views.story4_3,name='story4-3'),
    url(r'^stage4-3/game4-3/$',views.game4_3,name='game4-3'),
    url(r'^stage4-3/head4-3/$',views.head4_3,name='head4-3'),
    url(r'^stage4-3/nextstory4-3/$',views.nextstory4_3,name='nextstory4-3'),
    url(r'^stage4-3/see4-3/$',views.see4_3,name='see4-3'),
    url(r'^stage4-3/input4-3/$',views.input4_3,name='input4-3'),

    url(r'^stage4-4/$',views.stage4_4,name='stage4-4'),
    url(r'^stage4-4/story4-4/$',views.story4_4,name='story4-4'),
    url(r'^stage4-4/game4-4/$',views.game4_4,name='game4-4'),
    url(r'^stage4-4/head4-4/$',views.head4_4,name='head4-4'),
    url(r'^stage4-4/nextstory4-4/$',views.nextstory4_4,name='nextstory4-4'),
    url(r'^stage4-4/see4-4/$',views.see4_4,name='see4-4'),
    url(r'^stage4-4/input4-4/$',views.input4_4,name='input4-4'),

]
